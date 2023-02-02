import { nodeType } from "@tdurieux/dinghy";
export { enrichers as supportedCommands } from "./enrichers";
export declare function enrich(root: nodeType.DockerOpsNodeType): nodeType.DockerOpsNodeType;
export declare function abstract(root: nodeType.DockerOpsNodeType): nodeType.DockerOpsNodeType;
declare const _default: (node: nodeType.DockerOpsNodeType) => nodeType.DockerOpsNodeType;
export default _default;
