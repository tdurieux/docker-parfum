import { Argv } from "yargs";
const yargs = require("yargs/yargs");

export default {
  providerFor: ["docker"],
  categories: ["VIRTUALIZATION"],
  prefix: "SC-DOCKER",
  scenarios: [
    {
      captureAfterThirdNonOption: "args",
      postProcess: [{"subCommand":"args"}],
      cmd: "$0 run <image> [...args]",
      name: "SC-DOCKER-RUN",
      prefix: "SC-DOCKER",
      booleans: ["d","detach","disable-content-trust","help","init","i","interactive","no-healthcheck","oom-kill-disable","privileged","P","publish-all","q","quiet","read-only","rm","sig-proxy","t","tty"],
      argv: () => {
        return (yargs() as Argv)
          .describe("docker", "SC-DOCKER")
          .help(false)
          .version(false)
          .exitProcess(false)
          .showHelpOnFail(false)
          .parserConfiguration({
            "short-option-groups": true,
            "boolean-negation": false,
            "camel-case-expansion": false,
            "parse-numbers": false,
          })
          .command("$0 run <image> [...args]", "SC-DOCKER-RUN")
          .option("d", {"alias":"detach","type":"boolean"})
          .option("disable-content-trust", {"type":"boolean"})
          .option("help", {"type":"boolean"})
          .option("init", {"type":"boolean"})
          .option("i", {"alias":"interactive","type":"boolean"})
          .option("no-healthcheck", {"type":"boolean"})
          .option("oom-kill-disable", {"type":"boolean"})
          .option("privileged", {"type":"boolean"})
          .option("P", {"alias":"publish-all","type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("read-only", {"type":"boolean"})
          .option("rm", {"type":"boolean"})
          .option("sig-proxy", {"type":"boolean"})
          .option("t", {"alias":"tty","type":"boolean"})
          .option("add-host", {"type":"string"})
          .option("annotation", {"type":"string"})
          .option("a", {"alias":"attach","type":"string"})
          .option("blkio-weight", {"type":"string"})
          .option("blkio-weight-device", {"type":"string"})
          .option("cap-add", {"type":"string"})
          .option("cap-drop", {"type":"string"})
          .option("cgroup-parent", {"type":"string"})
          .option("cgroupns", {"type":"string"})
          .option("cidfile", {"type":"string"})
          .option("cpu-count", {"type":"string"})
          .option("cpu-percent", {"type":"string"})
          .option("cpu-period", {"type":"string"})
          .option("cpu-quota", {"type":"string"})
          .option("cpu-rt-period", {"type":"string"})
          .option("cpu-rt-runtime", {"type":"string"})
          .option("c", {"alias":"cpu-shares","type":"string"})
          .option("cpus", {"type":"string"})
          .option("cpuset-cpus", {"type":"string"})
          .option("cpuset-mems", {"type":"string"})
          .option("detach-keys", {"type":"string"})
          .option("device", {"type":"string"})
          .option("device-cgroup-rule", {"type":"string"})
          .option("device-read-bps", {"type":"string"})
          .option("device-read-iops", {"type":"string"})
          .option("device-write-bps", {"type":"string"})
          .option("device-write-iops", {"type":"string"})
          .option("dns", {"type":"string"})
          .option("dns-option", {"type":"string"})
          .option("dns-search", {"type":"string"})
          .option("domainname", {"type":"string"})
          .option("entrypoint", {"type":"string"})
          .option("e", {"alias":"env","type":"string"})
          .option("env-file", {"type":"string"})
          .option("expose", {"type":"string"})
          .option("gpus", {"type":"string"})
          .option("group-add", {"type":"string"})
          .option("health-cmd", {"type":"string"})
          .option("health-interval", {"type":"string"})
          .option("health-retries", {"type":"string"})
          .option("health-start-period", {"type":"string"})
          .option("health-timeout", {"type":"string"})
          .option("h", {"alias":"hostname","type":"string"})
          .option("io-maxbandwidth", {"type":"string"})
          .option("io-maxiops", {"type":"string"})
          .option("ip", {"type":"string"})
          .option("ip6", {"type":"string"})
          .option("ipc", {"type":"string"})
          .option("isolation", {"type":"string"})
          .option("kernel-memory", {"type":"string"})
          .option("l", {"alias":"label","type":"string"})
          .option("label-file", {"type":"string"})
          .option("link", {"type":"string"})
          .option("link-local-ip", {"type":"string"})
          .option("log-driver", {"type":"string"})
          .option("log-opt", {"type":"string"})
          .option("mac-address", {"type":"string"})
          .option("m", {"alias":"memory","type":"string"})
          .option("memory-reservation", {"type":"string"})
          .option("memory-swap", {"type":"string"})
          .option("memory-swappiness", {"type":"string"})
          .option("mount", {"type":"string"})
          .option("name", {"type":"string"})
          .option("network", {"type":"string"})
          .option("network-alias", {"type":"string"})
          .option("oom-score-adj", {"type":"string"})
          .option("pid", {"type":"string"})
          .option("pids-limit", {"type":"string"})
          .option("platform", {"type":"string"})
          .option("p", {"alias":"publish","type":"string"})
          .option("pull", {"type":"string"})
          .option("restart", {"type":"string"})
          .option("runtime", {"type":"string"})
          .option("security-opt", {"type":"string"})
          .option("shm-size", {"type":"string"})
          .option("stop-signal", {"type":"string"})
          .option("stop-timeout", {"type":"string"})
          .option("storage-opt", {"type":"string"})
          .option("sysctl", {"type":"string"})
          .option("tmpfs", {"type":"string"})
          .option("ulimit", {"type":"string"})
          .option("u", {"alias":"user","type":"string"})
          .option("userns", {"type":"string"})
          .option("uts", {"type":"string"})
          .option("v", {"alias":"volume","type":"string"})
          .option("volume-driver", {"type":"string"})
          .option("volumes-from", {"type":"string"})
          .option("w", {"alias":"workdir","type":"string"})
      }
    },
    {
      captureAfterThirdNonOption: "args",
      postProcess: [{"subCommand":"args"}],
      cmd: "$0 exec <container> [...args]",
      name: "SC-DOCKER-EXEC",
      prefix: "SC-DOCKER",
      booleans: ["d","detach","i","interactive","privileged","t","tty"],
      argv: () => {
        return (yargs() as Argv)
          .describe("docker", "SC-DOCKER")
          .help(false)
          .version(false)
          .exitProcess(false)
          .showHelpOnFail(false)
          .parserConfiguration({
            "short-option-groups": true,
            "boolean-negation": false,
            "camel-case-expansion": false,
            "parse-numbers": false,
          })
          .command("$0 exec <container> [...args]", "SC-DOCKER-EXEC")
          .option("d", {"alias":"detach","type":"boolean"})
          .option("i", {"alias":"interactive","type":"boolean"})
          .option("privileged", {"type":"boolean"})
          .option("t", {"alias":"tty","type":"boolean"})
          .option("detach-keys", {"type":"string"})
          .option("e", {"alias":"env","type":"string"})
          .option("env-file", {"type":"string"})
          .option("u", {"alias":"user","type":"string"})
          .option("w", {"alias":"workdir","type":"string"})
      }
    },
    {
      cmd: "$0 ps",
      name: "SC-DOCKER-PS",
      prefix: "SC-DOCKER",
      booleans: ["a","all","l","latest","no-trunc","q","quiet","s","size"],
      argv: () => {
        return (yargs() as Argv)
          .describe("docker", "SC-DOCKER")
          .help(false)
          .version(false)
          .exitProcess(false)
          .showHelpOnFail(false)
          .parserConfiguration({
            "short-option-groups": true,
            "boolean-negation": false,
            "camel-case-expansion": false,
            "parse-numbers": false,
          })
          .command("$0 ps", "SC-DOCKER-PS")
          .option("a", {"alias":"all","type":"boolean"})
          .option("l", {"alias":"latest","type":"boolean"})
          .option("no-trunc", {"type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("s", {"alias":"size","type":"boolean"})
          .option("f", {"alias":"filter","type":"string"})
          .option("format", {"type":"string"})
          .option("n", {"alias":"last","type":"string"})
      }
    },
    {
      cmd: "$0 build",
      name: "SC-DOCKER-BUILD",
      prefix: "SC-DOCKER",
      booleans: ["load","no-cache","pull","push","q","quiet"],
      argv: () => {
        return (yargs() as Argv)
          .describe("docker", "SC-DOCKER")
          .help(false)
          .version(false)
          .exitProcess(false)
          .showHelpOnFail(false)
          .parserConfiguration({
            "short-option-groups": true,
            "boolean-negation": false,
            "camel-case-expansion": false,
            "parse-numbers": false,
          })
          .command("$0 build", "SC-DOCKER-BUILD")
          .option("load", {"type":"boolean"})
          .option("no-cache", {"type":"boolean"})
          .option("pull", {"type":"boolean"})
          .option("push", {"type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("add-host", {"type":"string"})
          .option("allow", {"type":"string"})
          .option("attest", {"type":"string"})
          .option("build-arg", {"type":"string"})
          .option("build-context", {"type":"string"})
          .option("builder", {"type":"string"})
          .option("cache-from", {"type":"string"})
          .option("cache-to", {"type":"string"})
          .option("cgroup-parent", {"type":"string"})
          .option("f", {"alias":"file","type":"string"})
          .option("iidfile", {"type":"string"})
          .option("label", {"type":"string"})
          .option("metadata-file", {"type":"string"})
          .option("network", {"type":"string"})
          .option("no-cache-filter", {"type":"string"})
          .option("o", {"alias":"output","type":"string"})
          .option("platform", {"type":"string"})
          .option("progress", {"type":"string"})
          .option("provenance", {"type":"string"})
          .option("sbom", {"type":"string"})
          .option("secret", {"type":"string"})
          .option("shm-size", {"type":"string"})
          .option("ssh", {"type":"string"})
          .option("t", {"alias":"tag","type":"string"})
          .option("target", {"type":"string"})
          .option("ulimit", {"type":"string"})
      }
    },
    {
      cmd: "$0 pull",
      name: "SC-DOCKER-PULL",
      prefix: "SC-DOCKER",
      booleans: ["a","all-tags","disable-content-trust","q","quiet"],
      argv: () => {
        return (yargs() as Argv)
          .describe("docker", "SC-DOCKER")
          .help(false)
          .version(false)
          .exitProcess(false)
          .showHelpOnFail(false)
          .parserConfiguration({
            "short-option-groups": true,
            "boolean-negation": false,
            "camel-case-expansion": false,
            "parse-numbers": false,
          })
          .command("$0 pull", "SC-DOCKER-PULL")
          .option("a", {"alias":"all-tags","type":"boolean"})
          .option("disable-content-trust", {"type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("platform", {"type":"string"})
      }
    },
    {
      cmd: "$0 push",
      name: "SC-DOCKER-PUSH",
      prefix: "SC-DOCKER",
      booleans: ["a","all-tags","disable-content-trust","q","quiet"],
      argv: () => {
        return (yargs() as Argv)
          .describe("docker", "SC-DOCKER")
          .help(false)
          .version(false)
          .exitProcess(false)
          .showHelpOnFail(false)
          .parserConfiguration({
            "short-option-groups": true,
            "boolean-negation": false,
            "camel-case-expansion": false,
            "parse-numbers": false,
          })
          .command("$0 push", "SC-DOCKER-PUSH")
          .option("a", {"alias":"all-tags","type":"boolean"})
          .option("disable-content-trust", {"type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
      }
    },
    {
      cmd: "$0 images",
      name: "SC-DOCKER-IMAGES",
      prefix: "SC-DOCKER",
      booleans: ["a","all","digests","no-trunc","q","quiet"],
      argv: () => {
        return (yargs() as Argv)
          .describe("docker", "SC-DOCKER")
          .help(false)
          .version(false)
          .exitProcess(false)
          .showHelpOnFail(false)
          .parserConfiguration({
            "short-option-groups": true,
            "boolean-negation": false,
            "camel-case-expansion": false,
            "parse-numbers": false,
          })
          .command("$0 images", "SC-DOCKER-IMAGES")
          .option("a", {"alias":"all","type":"boolean"})
          .option("digests", {"type":"boolean"})
          .option("no-trunc", {"type":"boolean"})
          .option("q", {"alias":"quiet","type":"boolean"})
          .option("f", {"alias":"filter","type":"string"})
          .option("format", {"type":"string"})
      }
    },
    {
      cmd: "$0 login",
      name: "SC-DOCKER-LOGIN",
      prefix: "SC-DOCKER",
      booleans: ["h","help","password-stdin"],
      argv: () => {
        return (yargs() as Argv)
          .describe("docker", "SC-DOCKER")
          .help(false)
          .version(false)
          .exitProcess(false)
          .showHelpOnFail(false)
          .parserConfiguration({
            "short-option-groups": true,
            "boolean-negation": false,
            "camel-case-expansion": false,
            "parse-numbers": false,
          })
          .command("$0 login", "SC-DOCKER-LOGIN")
          .option("h", {"alias":"help","type":"boolean"})
          .option("password-stdin", {"type":"boolean"})
          .option("p", {"alias":"password","type":"string"})
          .option("u", {"alias":"username","type":"string"})
      }
    },
    {
      cmd: "$0 login azure",
      name: "SC-DOCKER-LOGIN-AZURE",
      prefix: "SC-DOCKER",
      booleans: ["h","help"],
      argv: () => {
        return (yargs() as Argv)
          .describe("docker", "SC-DOCKER")
          .help(false)
          .version(false)
          .exitProcess(false)
          .showHelpOnFail(false)
          .parserConfiguration({
            "short-option-groups": true,
            "boolean-negation": false,
            "camel-case-expansion": false,
            "parse-numbers": false,
          })
          .command("$0 login azure", "SC-DOCKER-LOGIN-AZURE")
          .option("h", {"alias":"help","type":"boolean"})
          .option("client-id", {"type":"string"})
          .option("client-secret", {"type":"string"})
          .option("cloud-name", {"type":"string"})
          .option("tenant-id", {"type":"string"})
      }
    },
    {
      cmd: "$0 logout",
      name: "SC-DOCKER-LOGOUT",
      prefix: "SC-DOCKER",
      booleans: ["h","help"],
      argv: () => {
        return (yargs() as Argv)
          .describe("docker", "SC-DOCKER")
          .help(false)
          .version(false)
          .exitProcess(false)
          .showHelpOnFail(false)
          .parserConfiguration({
            "short-option-groups": true,
            "boolean-negation": false,
            "camel-case-expansion": false,
            "parse-numbers": false,
          })
          .command("$0 logout", "SC-DOCKER-LOGOUT")
          .option("h", {"alias":"help","type":"boolean"})
      }
    },
    {
      cmd: "$0 logout azure",
      name: "SC-DOCKER-LOGOUT-AZURE",
      prefix: "SC-DOCKER",
      booleans: ["h","help"],
      argv: () => {
        return (yargs() as Argv)
          .describe("docker", "SC-DOCKER")
          .help(false)
          .version(false)
          .exitProcess(false)
          .showHelpOnFail(false)
          .parserConfiguration({
            "short-option-groups": true,
            "boolean-negation": false,
            "camel-case-expansion": false,
            "parse-numbers": false,
          })
          .command("$0 logout azure", "SC-DOCKER-LOGOUT-AZURE")
          .option("h", {"alias":"help","type":"boolean"})
      }
    },
    {
      cmd: "$0 search",
      name: "SC-DOCKER-SEARCH",
      prefix: "SC-DOCKER",
      booleans: ["no-trunc"],
      argv: () => {
        return (yargs() as Argv)
          .describe("docker", "SC-DOCKER")
          .help(false)
          .version(false)
          .exitProcess(false)
          .showHelpOnFail(false)
          .parserConfiguration({
            "short-option-groups": true,
            "boolean-negation": false,
            "camel-case-expansion": false,
            "parse-numbers": false,
          })
          .command("$0 search", "SC-DOCKER-SEARCH")
          .option("no-trunc", {"type":"boolean"})
          .option("f", {"alias":"filter","type":"string"})
          .option("format", {"type":"string"})
          .option("limit", {"type":"string"})
      }
    },
    {
      cmd: "$0 version",
      name: "SC-DOCKER-VERSION",
      prefix: "SC-DOCKER",
      booleans: ["h","help"],
      argv: () => {
        return (yargs() as Argv)
          .describe("docker", "SC-DOCKER")
          .help(false)
          .version(false)
          .exitProcess(false)
          .showHelpOnFail(false)
          .parserConfiguration({
            "short-option-groups": true,
            "boolean-negation": false,
            "camel-case-expansion": false,
            "parse-numbers": false,
          })
          .command("$0 version", "SC-DOCKER-VERSION")
          .option("h", {"alias":"help","type":"boolean"})
          .option("f", {"alias":"format","type":"string"})
          .option("kubeconfig", {"type":"string"})
      }
    },
    {
      cmd: "$0 info",
      name: "SC-DOCKER-INFO",
      prefix: "SC-DOCKER",
      argv: () => {
        return (yargs() as Argv)
          .describe("docker", "SC-DOCKER")
          .help(false)
          .version(false)
          .exitProcess(false)
          .showHelpOnFail(false)
          .parserConfiguration({
            "short-option-groups": true,
            "boolean-negation": false,
            "camel-case-expansion": false,
            "parse-numbers": false,
          })
          .command("$0 info", "SC-DOCKER-INFO")
          .option("f", {"alias":"format","type":"string"})
      }
    },
  ]
};