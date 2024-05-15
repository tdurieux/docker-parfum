import { DockerParser, File, Printer } from "@tdurieux/dinghy";
import { readFile } from "fs/promises";

export function praseFile(file: string) {
  const filePath = `./tests/data/${file}.Dockerfile`;
  const dockerParser = new DockerParser(new File(filePath));
  const ast = dockerParser.parse();
  expect(dockerParser.errors).toHaveLength(0);
  const printer = ast.printer();
  printer.print();
  expect(printer.errors).toHaveLength(0);
  return ast;
}
export async function repairedFile(file: string) {
  const filePath = `./tests/repaired_data/${file}.Dockerfile`;
  return readFile(filePath, { encoding: "utf-8" });
}
