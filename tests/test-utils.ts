import { DockerParser, File, Printer } from "@tdurieux/dinghy";

export async function praseFile(file: string) {
  const filePath = `./tests/data/${file}.Dockerfile`;
  const dockerParser = new DockerParser(new File(filePath));
  const ast = await dockerParser.parse();
  expect(dockerParser.errors).toHaveLength(0);
  const printer = new Printer(ast);
  printer.print();
  expect(printer.errors).toHaveLength(0);
  return ast;
}
