import { parseDocker } from "@tdurieux/dinghy";
import { Matcher } from "../../lib/rule-matcher";
import rule from "../../lib/hadolint_rules/DL3046";

describe("DL3046", () => {
  test("useradd without -l", async () => {
    const root = await parseDocker("RUN useradd -u 123456 foobar");
    const matcher = new Matcher(root);

    const violations = matcher.match(rule);
    expect(violations).toHaveLength(1);
    violations[0].repair();
    expect(root.toString()).toBe("RUN useradd -u 123456 --no-log-init foobar");
  });
  test("useradd with -l", async () => {
    const root = await parseDocker("RUN useradd -l -u 123456 foobar");
    const matcher = new Matcher(root);

    const violations = matcher.match(rule);
    expect(violations).toHaveLength(0);
  });
  test("useradd with --no-log-init", async () => {
    const root = await parseDocker("RUN useradd --no-log-init -u 123456 foobar");
    const matcher = new Matcher(root);

    const violations = matcher.match(rule);
    expect(violations).toHaveLength(0);
  });
});
