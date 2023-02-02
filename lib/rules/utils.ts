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
  const script = node.getParent(nodeType.BashIfThen)
    ? node.getParent(nodeType.BashIfThen)
    : node.getParent(nodeType.BashScript);

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
