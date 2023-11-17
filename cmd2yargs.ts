import { readdirSync, readFileSync, writeFileSync } from "fs";
import { parse as yamlParser } from "yaml";
import yargs from "yargs/yargs";
import { Argv } from "yargs";
import { parseArgs } from "util";

interface Options {
  booleans?: string[];
  strings?: string[];
  paths?: string[];
  arrays?: string[];
  counts?: string[];
  merge?: Options[];
}
interface Scenario {
  cmd: string;
  name: string;
  categories?: string[];
  options: Options;
  fixBadLongNames?: string[];
  captureAllAfter?: {
    name: string;
    match: string[];
  };
  rejectIf?: string[];
  mustHave?: string[];
  replaceEmptyArgsWith?: string[];
  fixupNonSpacedArgs?: boolean;
  stealFromArrayFor?: {
    array: string;
    for: string;
  };
  saveLastNonOption?: string;
  rejectIfIs?: {
    name: string;
    values: string[];
  };
  captureAfterThirdNonOption?: string;
  captureAfterSecondNonOption?: string;
  captureAfterFirstNonOption?: string;
  postProcess?: {
    tagLastElement?: {
      source: string;
      tag: string;
    };
    subCommand?: string;
  }[];
}
interface Command {
  prefix: string;
  categories?: string[];
  providerFor: string[];
  options: Options;
  scenarios: Scenario[];
}
interface CommandFile {
  command: Command;
}

const YAML_DIR = `${__dirname}/cmd-options`;

function getOptions(scenario: Scenario) {
  const options = {
    booleans: [],
    strings: [],
    paths: [],
    arrays: [],
    counts: [],
  } as Options;
  if (scenario.options?.merge) {
    options.booleans = scenario.options.merge
      .map((opt) => opt.booleans || [])
      .flat();
    options.strings = scenario.options.merge
      .map((opt) => opt.strings || [])
      .flat();
    options.paths = scenario.options.merge.map((opt) => opt.paths || []).flat();
    options.arrays = scenario.options.merge
      .map((opt) => opt.arrays || [])
      .flat();
    options.counts = scenario.options.merge
      .map((opt) => opt.counts || [])
      .flat();

    return options;
  }

  return scenario.options || options;
}

function processArg(arg: string): [short: string, long?: string] {
  if (arg.indexOf(",") === -1) {
    return [arg.trim().replace(/^--?/, "")];
  }

  const parts = arg.split(",");
  const short = parts[0].trim().replace(/^--?/, "");
  const long = parts[1].trim().replace(/^--?/, "");
  return [short, long];
}

const optType2argvType = {
  booleans: "boolean",
  strings: "string",
  paths: "string",
  arrays: "array",
  counts: "count",
};
function createEnrichers() {
  let indexOutput = "";
  const commands: Command[] = [];
  readdirSync(`${YAML_DIR}`)
    .filter((x) => x.endsWith(".yml"))
    .forEach((fname) => {
      console.log(fname);
      const command = (
        yamlParser(readFileSync(`${YAML_DIR}/${fname}`, "utf8")) as CommandFile
      ).command;
      commands.push(command);
      command.prefix;
      let output = `import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ${JSON.stringify(command.providerFor)},
  categories: ${JSON.stringify(command.categories || [])},
  prefix: "${command.prefix}",
  scenarios: [\n`;
      const allTags: string[] = [];
      for (const scenario of command.scenarios) {
        const scenarioTags: string[] = [];
        const toCopy = [
          "captureAfterFirstNonOption",
          "captureAfterSecondNonOption",
          "captureAfterThirdNonOption",
          "captureAllAfter",
          "saveLastNonOption",
          "stealFromArrayFor",
          "fixBadLongNames",
          "fixupNonSpacedArgs",
          "mustHave",
          "postProcess",
          "rejectIf",
          "rejectIfIs",
          "replaceEmptyArgsWith",
          "cmd",
          "name",
          "categories"
        ];
        output += `    {\n`;
        for (const key of toCopy) {
          if (scenario[key] !== undefined) {
            output += `      ${key}: ${JSON.stringify(scenario[key])},\n`;
          }
        }

        const detailedO = {
          alias: {},
          array: [],
          boolean: [],
          count: [],
          string: [],
          number: [],
        };
        const options = getOptions(scenario);
        for (const optType in optType2argvType) {
          if (!options[optType]) continue;
          for (const arg of options[optType]) {
            const opt = processArg(arg);
            detailedO.alias[opt[0]] = opt[1];
            detailedO[optType2argvType[optType]].push(opt[0]);
          }
        }
        output += `      prefix: ${JSON.stringify(command.prefix)},\n`;
        if (options.paths) {
          output += `      paths: ${JSON.stringify(
            options.paths.map(processArg).flat()
          )},\n`;
        }
        if (options.booleans) {
          output += `      booleans: ${JSON.stringify(
            options.booleans.map(processArg).flat()
          )},\n`;
        }
        if (options.strings) {
          output += `      strings: ${JSON.stringify(
            options.strings.map(processArg).flat()
          )},\n`;
        }
        if (options.counts) {
          output += `      counts: ${JSON.stringify(
            options.counts.map(processArg).flat()
          )},\n`;
        }
        //   output += `      detailed: (args: string[]) => {
        //     return parser.detailed(args, ${JSON.stringify(detailedO)})
        // },\n`;
        output += `      argv: () => {
        return (yargs() as Argv)
          .describe("${command.providerFor}", "${command.prefix}")
          .help(false)
          .version(false)
          .exitProcess(false)
          .showHelpOnFail(false)
          .parserConfiguration({
            "short-option-groups": true,
            "boolean-negation": false,
            "camel-case-expansion": false,
            "parse-numbers": false,
          })\n`;
        output += `          .command("${scenario.cmd}", "${scenario.name}")\n`;
        for (const optType in optType2argvType) {
          if (!options[optType]) continue;
          for (const arg of options[optType]) {
            const opt = processArg(arg);
            let isRequired = false;
            if (scenario.mustHave) {
              isRequired =
                scenario.mustHave.includes(`--${opt[0]}`) ||
                scenario.mustHave.includes(`-${opt[0]}`);
              if (!isRequired && opt[1]) {
                isRequired = scenario.mustHave.includes(`-${opt[1]}`);
              }
            }
            const tag = `${scenario.name}-F-${opt[0]
              .replace(/"/g, "")
              .toUpperCase()}`;
            allTags.push(tag);
            scenarioTags.push(tag);
            const o = {
              alias: opt[1],
              type: optType2argvType[optType],
              // require: isRequired,
              // describe: tag,
            };
            output += `          .option("${opt[0]}", ${JSON.stringify(o)})\n`;
          }
        }
        output += `      }`;
        // output += `,\n      tags: ${JSON.stringify(scenarioTags)}`;
        output += `\n    },\n`;
      }
      output += `  ]`;
      // output += `,\n  tags: ${JSON.stringify(allTags)}`;
      output += `\n};`;
      writeFileSync(
        `${__dirname}/lib/enricher/enrichers/${fname.replace(".yml", ".ts")}`,
        output
      );

      let name = fname
        .replace(".yml", "")
        .replace(/-/g, "_")
        .replace(".", "")
        .replace("/", "");
      if (["true", "export", "false"].includes(name)) name = `_${name}`;

      (command as any).name = name;
      indexOutput += `import ${name} from "./${fname.replace(".yml", "")}";\n`;
      indexOutput += `export {default as ${name}} from "./${fname.replace(
        ".yml",
        ""
      )}";\n`;
    });
  indexOutput += `export const enrichers = [\n`;
  for (const command of commands) {
    indexOutput += `${(command as any).name},`;
  }
  indexOutput += `]\n`;
  writeFileSync(`${__dirname}/lib/enricher/enrichers/index.ts`, indexOutput);
}

(async () => {
  createEnrichers();
})();
