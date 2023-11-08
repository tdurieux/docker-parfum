import { File, parseDocker } from "@tdurieux/dinghy";
import { Matcher } from "./rule-matcher";

export { PARFUM_RULES, BINNACLE_RULES, HADOLINT_RULES } from "./rules";

export { Violation, Matcher } from "./rule-matcher";
export * as enricher from "./enricher";

export function parseAndMatch(dockerfile: string) {
  const ast = parseDocker(new File(null, dockerfile));
  return new Matcher(ast).matchAll();
}
