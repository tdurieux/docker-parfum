import { parseDocker } from "@tdurieux/dinghy";
import { Matcher } from "../../lib/rule-matcher";
import rule from "../../lib/hadolint_rules/DL3029";

describe("DL3029", () => {
  test("FROM with platfrom", async () => {
    const root = await parseDocker("FROM --platform=x86 busybox");
    const matcher = new Matcher(root);

    const violations = matcher.match(rule);
    expect(violations).toHaveLength(1);
    violations[0].repair();
    expect(root.toString()).toBe("FROM busybox");
  });
  test("FROM without platfrom", async () => {
    const root = await parseDocker("FROM busybox");
    const matcher = new Matcher(root);

    const violations = matcher.match(rule);
    expect(violations).toHaveLength(0);
  });
});
