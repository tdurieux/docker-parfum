process.argv.push("--browser");
import { File, parseDocker, enricher } from "@tdurieux/dinghy";
import { Matcher } from "./rule-matcher";

export { PARFUM_RULES, BINNACLE_RULES, HADOLINT_RULES } from "./rules";

export { Violation, Matcher } from "./rule-matcher";
export * as dinghy from "@tdurieux/dinghy";
export { enricher } from "@tdurieux/dinghy";

export function parseAndMatch(dockerfile: string) {
  const ast = parseDocker(new File(null, dockerfile));
  return new Matcher(ast).matchAll();
}
