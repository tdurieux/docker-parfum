#!/usr/bin/env node

import { Command } from "commander";
import { Matcher } from "../rule-matcher";
import * as Diff from "diff";

import { ALL_RULES } from "../rules";
import { File, DockerParser, parseDocker } from "@tdurieux/dinghy";
import { writeFile } from "fs/promises";
const program = new Command();

program
  .command("rules")
  .description("List the supported rules")
  .action(async function () {
    let index = 0;
    for (const rule of ALL_RULES) {
      console.log(`\t ${++index}. [${rule.name}] ${rule.description}`);
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

    const smells = matcher.matchAll();
    if (smells.length == 0) {
      console.log(`Well done, no smells found was found in ${file}!`);
    } else {
      console.log(`Found ${smells.length} smells in ${file}.`);
    }
    for (const smell of smells) {
      console.log(smell.toString());
      try {
        await smell.repair();
      } catch (error) {}
    }
    const repairedOutput = matcher.node.toString(true);
    const diff = Diff.createTwoFilesPatch(
      file,
      file,
      parser.file.content,
      repairedOutput
    );

    if (options.output) {
      await writeFile(options.output, repairedOutput, { encoding: "utf-8" });
      console.log(`The repaired Dockerfile was written in ${options.output}`);
    }

    console.log("The changes:\n");
    console.log(diff);
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
