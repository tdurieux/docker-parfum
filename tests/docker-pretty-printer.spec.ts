import { BINNACLE_RULES } from "../lib";
import { Matcher } from "../lib/rule-matcher";
import { praseFile } from "./test-utils";

describe("Testing docker-pretty-printer", () => {
  test("print reprint_issue", async () => {
    const dockerfile = await praseFile("reprint_issue");
    expect(dockerfile.toString(true)).toBe(dockerfile.position.file.content);
  });
  test("test repair non sha256", async () => {
    const dockerfile = await praseFile("non_sha256echo");
    expect(dockerfile.toString(true)).toBe(dockerfile.position.file.content);
    const matcher = new Matcher(dockerfile);
    const violations = matcher.matchAll(BINNACLE_RULES);
    expect(violations.length).toBe(0);
    violations.forEach(async (e) => {
      await e.repair();
    });
    expect(dockerfile.toString(true)).toBe(dockerfile.position.file.content);
  });
  test("print 7cb0093bfdd6688528619ff0af54cdf0f95243b3", async () => {
    const dockerfile = await praseFile(
      "7cb0093bfdd6688528619ff0af54cdf0f95243b3"
    );
    // expect(dockerfile.toString(true)).toBe(dockerfile.fileContent);
    const matcher = new Matcher(dockerfile);
    matcher.matchAll(BINNACLE_RULES).forEach(async (e) => {
      await e.repair();
    });
    expect(dockerfile.toString(true)).toBe(dockerfile.position.file.content);
  });

  test("print 0001a177c159ca47f359c34cfdce78ecf80e7eb0", async () => {
    const dockerfile = await praseFile(
      "0001a177c159ca47f359c34cfdce78ecf80e7eb0"
    );
    // expect(dockerfile.toString(true)).toBe(dockerfile.fileContent);
    const matcher = new Matcher(dockerfile);
    matcher.matchAll(BINNACLE_RULES).forEach(async (e) => {
      try {
        await e.repair();
      } catch (error) {}
    });
    expect(dockerfile.toString(true)).toBe(dockerfile.position.file.content);
  });

  test("print 0ce06af56644fb21ee96178f60c2d57eb73c8226", async () => {
    const dockerfile = await praseFile(
      "0ce06af56644fb21ee96178f60c2d57eb73c8226"
    );
    // expect(dockerfile.toString(true)).toBe(dockerfile.fileContent);
    const matcher = new Matcher(dockerfile);
    matcher.matchAll(BINNACLE_RULES).forEach(async (e) => {
      try {
        await e.repair();
      } catch (error) {}
    });
    expect(dockerfile.toString(true)).toBe(dockerfile.position.file.content);
  });
  test("print 9cae314c3410c74d2267c7c71eeb17a83b13f07f", async () => {
    const dockerfile = await praseFile(
      "9cae314c3410c74d2267c7c71eeb17a83b13f07f"
    );
    // expect(dockerfile.toString(true)).toBe(dockerfile.fileContent);
    const matcher = new Matcher(dockerfile);
    matcher.matchAll(BINNACLE_RULES).forEach(async (e) => {
      try {
        await e.repair();
      } catch (error) {}
    });
    expect(dockerfile.toString(true)).toBe(dockerfile.position.file.content);
  });
});
