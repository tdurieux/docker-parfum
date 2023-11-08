import { parseDocker } from "@tdurieux/dinghy";
import { Matcher } from "../../lib/rule-matcher";
import DL3002 from "../../lib/rules/hadolint/DL3002";

describe("DL3002", () => {
  test("without user", () => {
    const root = parseDocker("RUN apt-get update\nRUN apt-get install test");
    const matcher = new Matcher(root);

    const violations = matcher.match(DL3002);
    expect(violations).toHaveLength(0);
  });

  test("with not root user", () => {
    const root = parseDocker(
      "USER test\nRUN apt-get update\nRUN apt-get install test"
    );
    const matcher = new Matcher(root);

    const violations = matcher.match(DL3002);
    expect(violations).toHaveLength(0);
  });

  test("with root user and not root user", () => {
    const root = parseDocker(
      "USER root\nRUN apt-get update\nRUN apt-get install test\nUSER test"
    );
    const matcher = new Matcher(root);

    const violations = matcher.match(DL3002);
    expect(violations).toHaveLength(0);
  });

  test("with root user", () => {
    const root = parseDocker(
      "USER root\nRUN apt-get update\nRUN apt-get install test"
    );
    const matcher = new Matcher(root);

    const violations = matcher.match(DL3002);
    expect(violations).toHaveLength(1);
  });
});
