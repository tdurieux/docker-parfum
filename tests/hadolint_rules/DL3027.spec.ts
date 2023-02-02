import { parseDocker } from "@tdurieux/dinghy";
import { Matcher } from "../../lib/rule-matcher";
import rule from "../../lib/rules/hadolint/DL3027";

describe("DL3027", () => {
  test("apt instead of apt-get", async () => {
    const root = await parseDocker("RUN apt install curl=1.1.0");
    const matcher = new Matcher(root);

    const violations = matcher.match(rule);
    expect(violations).toHaveLength(1);
    violations[0].repair();
    expect(root.toString()).toBe("RUN apt-get install curl=1.1.0");
  });
  test("apt-get", async () => {
    const root = await parseDocker("RUN apt-get install curl=1.1.0");
    const matcher = new Matcher(root);

    const violations = matcher.match(rule);
    expect(violations).toHaveLength(0);
  });
});
