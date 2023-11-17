import { exec } from "child_process";

interface Options {
  booleans?: string[];
  strings?: string[];
  paths?: string[];
  arrays?: string[];
  counts?: string[];
  merge?: Options[];
}

interface CommandHelp {
  command: string;
  scenarios: { cmd: string; name: string; options: Options }[];
  options: Options;
}

function parseCommandHelp(command: string): Promise<CommandHelp> {
  return new Promise((resolve, reject) => {
    exec(`${command} --help`, async (error, stdout, stderr) => {
      if (error) {
        stdout += stderr;
      }

      const helpText = stdout;

      // Regular expressions to match commands and options
      const commandPattern = /Usage:? ([^\n]+)/i;
      const commandsPattern = /(Commands):?\n([\s\S]*?)(?=\n\S|$)/i;
      const optionsPattern = /(Options|Flags):?\n([\s\S]*?)(?=\n\S|$)/i;

      const commandMatch = helpText.match(commandPattern);
      const optionsMatch = helpText.match(optionsPattern);
      const commandsMatch = helpText.match(commandsPattern);

      const output: any = {
        scenarios: [],
      };
      if (commandMatch) {
        const commandDescription = commandMatch[1]
          .trim()
          .replace(command, "")
          .replace("[OPTIONS]", "")
          .trim();
        output.command = commandDescription;
      }

      if (commandsMatch) {
        const commandsText = commandsMatch[2];
        const commands = commandsText
          .split("\n")
          .map((line) => {
            const parts = line.trim().split(" ");
            const command = parts[0].replace(":", "");
            const description = parts.slice(1).join(" ");
            return command;
          })
          .filter((line) => line);
        for (const scenario of commands) {
          try {
            const scenarioOutput = await parseCommandHelp(
              `${command} ${scenario}`
            );
            output.scenarios.push({
              cmd: `${command} ${scenario}`.trim(),
              options: scenarioOutput.options,
              name: `SC-${command
                .replace(" ", "-")
                .toUpperCase()}-${scenario.toUpperCase()}`,
            });
            if (scenarioOutput.scenarios) {
              output.scenarios.push(...scenarioOutput.scenarios);
            }
          } catch (error) {
            console.log(error);
          }
        }
      }

      if (optionsMatch) {
        const optionsText = optionsMatch[2];

        // Split options into individual lines
        const options = {
          booleans: [],
          strings: [],
          paths: [],
          arrays: [],
          counts: [],
        };
        output.options = options;

        optionsText.split("\n").forEach((line) => {
          line = line.trim();
          if (line[0] !== "-") {
            return "";
          }
          // check if the option has a value
          const parts = line.split(" ");
          let type = "booleans";
          if (parts.filter((part) => !part.startsWith("-"))[0] != "") {
            type = parts.filter((part) => !part.startsWith("-"))[0];
            if (type == "list") {
              type = "arrays";
            } else if (type == "path" || type == "file" || type == "dir") {
              type = "paths";
            }
            type = "strings";
          }
          if (line[2] == ",") {
            // Short and long option
            const parts = line.split(",");
            const short = parts[0].trim().replace(/^--?/, "");
            const long = parts[1].trim().replace(/^--?/, "").split(" ")[0];

            options[type].push(`-${short}, --${long}`);
          } else {
            options[type].push(line.split(" ")[0]);
          }
        });
      }

      resolve(output);
    });
  });
}

function options2yml(options: Options): string {
  let o = "";
  if (!options) {
    return o;
  }
  if (options.booleans && options.booleans.length > 0) {
    o += `        booleans:
`;
    for (const option of options.booleans) {
      o += `          - ${option}
`;
    }
  }
  if (options.strings && options.strings.length > 0) {
    o += `        strings:
`;
    for (const option of options.strings) {
      o += `          - ${option}
`;
    }
  }
  if (options.paths && options.paths.length > 0) {
    o += `        paths:
`;
    for (const option of options.paths) {
      o += `          - ${option}
`;
    }
  }
  if (options.arrays && options.arrays.length > 0) {
    o += `        arrays:
`;
    for (const option of options.arrays) {
      o += `          - ${option}
`;
    }
  }
  return o;
}
function command2yml(cmd: string, command: CommandHelp): string {
  let o = `command:
  providerFor:
    - ${cmd}
  prefix: SC-${cmd.toUpperCase()}
  scenarios:
    - cmd: $0
      options: 
        ${options2yml(command.options).trim()}
      name: SC-${cmd.toUpperCase()}
`;
  for (const scenario of command.scenarios) {
    o += `    - cmd: ${scenario.cmd.replace(cmd, "$0").trim()}
      options: 
        ${options2yml(scenario.options).trim()}
      name: ${scenario.name}
`;
  }

  return o;
}
(async () => {
  let cmd = process.argv[2];
  const command = await parseCommandHelp(cmd);
  console.log(command2yml(cmd, command));
})();
