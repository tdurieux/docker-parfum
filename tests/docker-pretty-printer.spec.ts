import { Matcher } from "../lib/rule-matcher";
import { ALL_RULES } from "../lib/rules";
import { praseFile, repairedFile } from "./test-utils";

async function parseAndRepair(name: string) {
  const dockerfile = praseFile(name);
  const matcher = new Matcher(dockerfile);
  matcher.matchAll(ALL_RULES);
  for (const smell of matcher.matchAll(ALL_RULES)) {
    try {
      await smell.repair();
    } catch (error) {}
  }
  expect(dockerfile.toString(true)).toBe(await repairedFile(name));
}
describe("Testing docker-pretty-printer", () => {
  test("print reprint_issue", () => {
    const dockerfile = praseFile("reprint_issue");
    expect(dockerfile.toString(true)).toBe(dockerfile.position.file?.content);
  });
  test("test repair non sha256", async () => {
    await parseAndRepair("non_sha256echo");
  });
  test("print 7cb0093bfdd6688528619ff0af54cdf0f95243b3", async () => {
    await parseAndRepair("7cb0093bfdd6688528619ff0af54cdf0f95243b3");
  });

  test("print 0001a177c159ca47f359c34cfdce78ecf80e7eb0", async () => {
    await parseAndRepair("0001a177c159ca47f359c34cfdce78ecf80e7eb0");
  });

  test("print 0ce06af56644fb21ee96178f60c2d57eb73c8226", async () => {
    await parseAndRepair("0ce06af56644fb21ee96178f60c2d57eb73c8226");
  });
  test("print 9cae314c3410c74d2267c7c71eeb17a83b13f07f", async () => {
    await parseAndRepair("9cae314c3410c74d2267c7c71eeb17a83b13f07f");
  });
});
