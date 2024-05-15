import {
  AllDockerNodes,
  BashConditionBinary,
  BashConditionBinaryLhs,
  BashConditionBinaryOp,
  BashConditionBinaryRhs,
  BashIfThen,
  BashOp,
  BashScript,
  BashStatement,
  DockerJSONInstruction,
  enricher,
  ShellNodeTypes,
} from "@tdurieux/dinghy";

export async function postFixWith(
  node: AllDockerNodes,
  toInsert: AllDockerNodes
) {
  if (!toInsert) {
    console.error("[REPAIR] toInsert is null");
    return;
  }
  if (toInsert instanceof BashScript) {
    toInsert = toInsert.children[0];
  }
  enricher.default(toInsert);
  let script = node.getParent(BashIfThen)
    ? node.getParent(BashIfThen)
    : node.getParent(BashScript)
    ? node.getParent(BashScript)
    : node.getParent(DockerJSONInstruction);

  // transform the docker instruction into a bash script to be able to add the node
  if (script instanceof DockerJSONInstruction) {
    const newScript = new BashScript().setPosition(script.position);
    newScript.children = script.children as ShellNodeTypes[];
    // need to force the reprint otherwise the args will have "" around them
    newScript.traverse((n) => {
      n.isChanged = true;
    });
    script.replace(newScript);
    script = newScript;
  }
  let child = script.children[0];
  for (const c of script.children) {
    if (c === node || c.hasChild(node as ShellNodeTypes)) {
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

  if (child instanceof BashStatement && child.semicolon) {
    script.addChild(toInsert as ShellNodeTypes);
  } else {
    // add at the end of the command
    const binary = new BashConditionBinary();
    binary.parent = child.parent;
    child.replace(binary);

    binary
      .addChild(
        new BashConditionBinaryLhs().setPosition(child.position).addChild(child)
      )
      .addChild(
        new BashConditionBinaryOp()
          .setPosition(position)
          .addChild(new BashOp("10").setPosition(position))
      )
      .addChild(
        new BashConditionBinaryRhs()
          .setPosition(position)
          .addChild(toInsert.setPosition(position) as ShellNodeTypes)
      );
    enricher.default(binary);
  }
}
