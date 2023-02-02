import { Command } from "commander";
import { Matcher } from "../rule-matcher";
import * as Diff from "diff";

import { ALL_RULES } from "../rules";
import { File, DockerParser, parseDocker } from "@tdurieux/dinghy";
const program = new Command();

program
  .name("docker-parfum")
  .description("Identify and Repair Docker smells")
  .version("0.5.0");

program
  .command("rules")
  .description("List the supported rules")
  .action(async function () {
    for (const rule of ALL_RULES) {
      console.log(rule.name);
      console.log(rule.description);
    }
  });

program
  .command("repair")
  .description("Repair the Dockerfile smells")
  .argument("<file>", "The filepath to the Dockerfile")
  .option("-o, --output <output>", "the output destination of the repair")
  .action(async function (file: string, options: { output: string }) {
    const parser = new DockerParser(new File(file));
    const dockerfile = await parser.parse();
    const matcher = new Matcher(dockerfile);
    const originalOutput = matcher.node.toString(true);
    matcher.matchAll().forEach(async (e) => {
      console.log(e.toString());
      await e.repair();
    });
    const repairedOutput = matcher.node.toString(true);
    const diff = Diff.diffLines(parser.file.content, repairedOutput);

    console.log("The changes:\n");
    diff.forEach((part) => {
      // green for additions, red for deletions
      // grey for common parts
      const color = part.added ? "green" : part.removed ? "red" : "grey";
      part.value.split("\n").forEach((line) => {
        if (part.added) {
          console.log("+ " + line);
        } else if (part.removed) {
          console.log("- " + line);
        } else {
          console.log(" " + line);
        }
      });
    });
  });

program
  .command("analyze")
  .description("Analyze a Dockerfile file for smells")
  .argument("<file>", "The filepath to the Dockerfile")
  .action(async (file: string) => {
    const dockerfile = await parseDocker(file);
    const matcher = new Matcher(dockerfile);
    const smells = matcher.matchAll();
    if (smells.length == 0) {
      console.log(`Well done, no smells found was found in ${file}!`);
    } else {
      console.log(`Found ${smells.length} smells in ${file}.`);
    }
    smells.forEach((e) => console.log(e.toString()));
  });

program.parse();
