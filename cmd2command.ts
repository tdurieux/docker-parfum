import { readdirSync, readFileSync, writeFileSync } from "fs";
import { parse as yamlParser } from "yaml";

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
  providerFor: string[];
  options: Options;
  scenarios: Scenario[];
}
interface CommandFile {
  command: Command;
}

const YAML_DIR = `${__dirname}/cmd-options`;

function getOptions(scenario: Scenario) {
  if (scenario.options.merge) {
    const options = {
      booleans: [],
      strings: [],
      paths: [],
      arrays: [],
      counts: [],
    } as Options;

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

  return scenario.options;
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
} as const;
function createEnrichers() {
  let indexOutput = "";
  const commands: Command[] = [];
  readdirSync(`${YAML_DIR}`)
    .filter((x) => x.endsWith(".yml"))
    .forEach((fname) => {
      const command = (
        yamlParser(readFileSync(`${YAML_DIR}/${fname}`, "utf8")) as CommandFile
      ).command;
      commands.push(command);
      command.prefix;
      let output = `import { Command } from 'commander';

export default {
  providerFor: ${JSON.stringify(command.providerFor)},
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
        ];
        output += `    {\n`;
        for (const key of toCopy) {
          if (scenario[key] !== undefined) {
            output += `      ${key}: ${JSON.stringify(scenario[key])},\n`;
          }
        }

        const options = getOptions(scenario);
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
        if (options.counts) {
          output += `      counts: ${JSON.stringify(
            options.counts.map(processArg).flat()
          )},\n`;
        }
        output += `      argv: () => {
        const program = new Command("${scenario.cmd}")
          .enablePositionalOptions()\n`;
        for (const optType in optType2argvType) {
          if (!options[optType]) continue;
          for (let arg of options[optType]) {
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
            if (
              optType2argvType[optType] === "string" ||
              optType2argvType[optType] === "array"
            ) {
              arg += " <value>";
            }
            output += `          .option("${arg}", "${tag}")\n`;
          }
        }
        output += `
        return program;
      },
      tags: ${JSON.stringify(scenarioTags)}
    },\n`;
      }
      output += `  ],
  tags: ${JSON.stringify(allTags)}
};`;
      writeFileSync(
        `${__dirname}/lib/enrichers/${fname.replace(".yml", ".ts")}`,
        output
      );

      let name = fname
        .replace(".yml", "")
        .replace(/-/g, "_")
        .replace(".", "")
        .replace("/", "");
      if (["true", "export"].includes(name)) name = `_${name}`;

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
  writeFileSync(`${__dirname}/lib/enrichers/index.ts`, indexOutput);
}

(async () => {
  createEnrichers();
})();
