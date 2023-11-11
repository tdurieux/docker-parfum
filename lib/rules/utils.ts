import { nodeType } from "@tdurieux/dinghy";
import enrich from "../enricher";

export async function postFixWith(
  node: nodeType.DockerOpsNodeType,
  toInsert: nodeType.DockerOpsNodeType
) {
  if (!toInsert) {
    console.error("[REPAIR] toInsert is null");
    return;
  }
  if (toInsert instanceof nodeType.BashScript) {
    toInsert = toInsert.children[0];
  }
  enrich(toInsert);
  let script = node.getParent(nodeType.BashIfThen)
    ? node.getParent(nodeType.BashIfThen)
    : node.getParent(nodeType.BashScript)
    ? node.getParent(nodeType.BashScript)
    : node.getParent(nodeType.DockerJSONInstruction);

  // transform the docker instruction into a bash script to be able to add the node
  if (script instanceof nodeType.DockerJSONInstruction) {
    const newScript = new nodeType.BashScript().setPosition(script.position);
    newScript.children = script.children;
    // need to force the reprint otherwise the args will have "" around them
    newScript.traverse((n) => {
      n.isChanged = true;
    });
    script.replace(newScript);
    script = newScript;
  }
  let child = script.children[0];
  for (const c of script.children) {
    if (c === node || c.hasChild(node)) {
      child = c;
      break;
    }
  }
  const position = child.position.clone();
  // position.lineStart = (child.position.lineEnd || 0) + 1;
  toInsert.traverse(
    (n) => {
      n.setPosition(position);
    },
    { includeSelf: true }
  );

  if (child instanceof nodeType.BashStatement && child.semicolon) {
    script.addChild(toInsert);
  } else {
    // add at the end of the command
    const binary = new nodeType.BashConditionBinary();
    binary.parent = child.parent;
    child.replace(binary);

    binary
      .addChild(
        new nodeType.BashConditionBinaryLhs()
          .setPosition(child.position)
          .addChild(child)
      )
      .addChild(
        new nodeType.BashConditionBinaryOp()
          .setPosition(position)
          .addChild(new nodeType.BashOp("10").setPosition(position))
      )
      .addChild(
        new nodeType.BashConditionBinaryRhs()
          .setPosition(position)
          .addChild(toInsert.setPosition(position))
      );
    enrich(binary);
  }
}
