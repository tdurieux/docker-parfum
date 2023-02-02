import { abstract as abstraction } from "./abstraction";
import { enrich as enricher } from "./enricher";
import { nodeType } from "@tdurieux/dinghy";

/**
 * The list of supported commands
 */
export { enrichers as supportedCommands } from "./enrichers";

/**
 * Enrich the node with command information
 * @param root
 * @returns
 */
export function enrich(root: nodeType.DockerOpsNodeType) {
  return enricher(root);
}

/**
 * Abstract the node as a pre-step for the matching
 * @param root
 * @returns
 */
export function abstract(root: nodeType.DockerOpsNodeType) {
  return abstraction(root);
}

/**
 * Enrich and abstract the node
 * @param node the node to enrich and abstract
 * @returns the enriched and abstracted node
 * @example
 * import * as dindhy from "@tdurieux/dinghy";
 * import dindhyEnrich from "@tdurieux/dinghy-enricher";
 *
 * const ast = await dindhy.dockerfileParser.parseDocker(/* file *\/);
 * dindhyEnrich(ast);
 */
export default (node: nodeType.DockerOpsNodeType) => {
  return abstract(enrich(node));
};
