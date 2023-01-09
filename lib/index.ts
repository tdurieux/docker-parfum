import { File, parseDocker } from "@tdurieux/dinghy";
import { Matcher } from "./rule-matcher";

export { RULES, BINNACLE_RULES } from "./rules";
export * as rules from "./rules";
export * as hadoling_rules from "./hadolint_rules";
export { HADOLING_RULES } from "./hadolint_rules";

export { Violation, Matcher } from "./rule-matcher";

export async function parseAndMatch(dockerfile: string) {
  const ast = await parseDocker(new File(null, dockerfile));
  return new Matcher(ast).matchAll();
}
