#!/usr/bin/env node

import { readSync } from "fs";

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
  .action(function () {
    let index = 0;
    for (const rule of ALL_RULES) {
      console.log(`${rule.name}`);
    }
  });

program
  .command("repair")
  .description("Repair the Dockerfile smells")
  .argument("[file]", "The filepath to the Dockerfile")
  .option("--stdin", "Read the Dockerfile from stdin", false)
  .option("-o, --output <output>", "the output destination of the repair")
  .action(async function (
    file: string,
    options: { output: string; stdin: boolean }
  ) {
    if (!options.stdin && !file) {
      console.error("Please provide a Dockerfile file");
      process.exit(1);
    }
    if (options.stdin && !file) {
      file = stdinToString();
    }
    const parser = new DockerParser(new File(file));
    const dockerfile = parser.parse();
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

function stdinToString(): string {
  const BUFSIZE = 256;
  const buf = Buffer.alloc(BUFSIZE);
  let bytesRead;
  let stdin = "";
  do {
    // Loop as long as stdin input is available.
    bytesRead = 0;
    try {
      bytesRead = readSync(process.stdin.fd, buf, 0, BUFSIZE, null);
    } catch (e) {
      if (e.code === "EAGAIN") {
        // 'resource temporarily unavailable'
        // Happens on OS X 10.8.3 (not Windows 7!), if there's no
        // stdin input - typically when invoking a script without any
        // input (for interactive stdin input).
        // If you were to just continue, you'd create a tight loop.
        throw "ERROR: interactive stdin input not supported.";
      } else if (e.code === "EOF") {
        // Happens on Windows 7, but not OS X 10.8.3:
        // simply signals the end of *piped* stdin input.
        break;
      }
      throw e; // unexpected exception
    }
    if (bytesRead === 0) {
      // No more stdin input available.
      // OS X 10.8.3: regardless of input method, this is how the end
      //   of input is signaled.
      // Windows 7: this is how the end of input is signaled for
      //   *interactive* stdin input.
      break;
    }
    // Process the chunk read.
    stdin += buf.toString(undefined, 0, bytesRead);
  } while (bytesRead > 0);

  return stdin;
}

program
  .command("analyze")
  .description("Analyze a Dockerfile file for smells")
  .option("--stdin", "Read the Dockerfile from stdin", false)
  .argument("[file]", "The filepath to the Dockerfile")
  .action((file: string, options: { stdin: boolean }) => {
    if (!options.stdin && !file) {
      console.error("Please provide a Dockerfile file");
      process.exit(1);
    }
    if (options.stdin && !file) {
      file = stdinToString();
    }
    console.log(`Analyzing ${file}`);
    const dockerfile = parseDocker(file);
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
