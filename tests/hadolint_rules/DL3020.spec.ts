import { parseDocker } from "@tdurieux/dinghy";
import { Matcher } from "../../lib/rule-matcher";
import rule from "../../lib/rules/hadolint/DL3020";

describe("DL3020", () => {
  test("COPY", () => {
    const root = parseDocker("COPY requirements.txt /usr/src/app/");
    const matcher = new Matcher(root);

    const violations = matcher.match(rule);
    expect(violations).toHaveLength(0);
  });
  test("ADD tar", () => {
    const root = parseDocker("ADD requirements.tar /usr/src/app/");
    const matcher = new Matcher(root);

    const violations = matcher.match(rule);
    expect(violations).toHaveLength(0);
  });
  test("ADD file", async () => {
    const root = parseDocker("ADD requirements.txt /usr/src/app/");
    const matcher = new Matcher(root);

    const violations = matcher.match(rule);
    expect(violations).toHaveLength(1);
    await violations[0].repair();
    expect(root.toString()).toBe("COPY requirements.txt /usr/src/app/");
  });
});
