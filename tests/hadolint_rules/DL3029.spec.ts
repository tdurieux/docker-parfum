import { parseDocker } from "@tdurieux/dinghy";
import { Matcher } from "../../lib/rule-matcher";
import rule from "../../lib/rules/hadolint/DL3029";

describe("DL3029", () => {
  test("FROM with platfrom", async () => {
    const root = parseDocker("FROM --platform=x86 busybox");
    const matcher = new Matcher(root);

    const violations = matcher.match(rule);
    expect(violations).toHaveLength(1);
    await violations[0].repair();
    expect(root.toString()).toBe("FROM busybox");
  });
  test("FROM without platfrom", () => {
    const root = parseDocker("FROM busybox");
    const matcher = new Matcher(root);

    const violations = matcher.match(rule);
    expect(violations).toHaveLength(0);
  });
});
