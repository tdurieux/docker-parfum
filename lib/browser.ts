process.argv.push("--browser");
import { File, parseDocker } from "@tdurieux/dinghy";
import { Matcher } from "./rule-matcher";

export { RULES } from "./rules";
export * as rules from "./rules";

export { Violation, Matcher } from "./rule-matcher";
export * as dinghy from "@tdurieux/dinghy";
export * as enricher from "dinghy-enricher";

export async function parseAndMatch(dockerfile: string) {
  const ast = await parseDocker(new File(null, dockerfile));
  return new Matcher(ast).matchAll();
}
