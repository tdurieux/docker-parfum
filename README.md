<div align="center">

# 🐳 docker-parfum

**Detect and automatically repair Dockerfile smells that inflate image size and attack surface.**

[![CI](https://github.com/tdurieux/docker-parfum/actions/workflows/build-test.yml/badge.svg)](https://github.com/tdurieux/docker-parfum/actions/workflows/build-test.yml)
[![npm](https://img.shields.io/npm/v/@tdurieux/docker-parfum?logo=npm)](https://www.npmjs.com/package/@tdurieux/docker-parfum)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[Try it in the browser](https://durieux.me/docker-parfum/) · [Rules](#supported-rules) · [Paper](https://arxiv.org/abs/2312.13888)

</div>

## What it does

Dockerfiles quietly accumulate *smells* — missing flags, leftover package caches, insecure defaults — that make images larger and less secure. They are hard to spot because they hide across both the Dockerfile instructions and the shell commands inside `RUN`.

docker-parfum parses the Dockerfile **and its embedded shell** into a single AST (via [Dinghy](https://github.com/tdurieux/Dinghy)), matches it against **32 rules**, and can **rewrite the file to fix the violations automatically**.

The impact of these smells is measured in the paper *[Empirical Study of the Docker Smells Impact on the Image Size](https://arxiv.org/abs/2312.13888)* (ICSE 2024). The rule set builds on smells identified by Henkel et al., *Learning from, Understanding, and Supporting DevOps Artifacts for Docker*.

## Usage

### Browser

Use the fully static web version — no data leaves your machine: **<https://durieux.me/docker-parfum/>**

### CLI

```bash
npm i -g @tdurieux/docker-parfum
docker-parfum repair <dockerfile>
```

```
Usage: docker-parfum [options] [command]

Commands:
  rules                    List the supported rules
  analyze <file>           Analyze a Dockerfile for smells
  repair [options] <file>  Repair the Dockerfile smells
  help [command]           display help for command
```

### API

```typescript
import { DockerParser, File } from "@tdurieux/dinghy";
import { Matcher, rules } from "@tdurieux/docker-parfum";

// The path or the content can be provided
const dockerParser = new DockerParser(new File(filePath, fileContent));
const ast = await dockerParser.parse();

const matcher = new Matcher(ast);
matcher.match(rules.aptGetInstallThenRemoveAptLists); // a specific rule
const allViolations = matcher.matchAll();               // every rule

for (const violation of allViolations) {
  await violation.repair();
}

const repairedDockerfile = ast.toString(true);
```

<details>
<summary>Browser build & semantic enricher</summary>

**Browser build**

```javascript
const dockerParser = new dockerParfum.dinghy.dockerfileParser.DockerParser(
  new dockerParfum.dinghy.File(undefined, dockerfile)
);
const ast = await dockerParser.parse();
const matcher = new dockerParfum.Matcher(ast);
for (const violation of matcher.matchAll()) {
  await violation.repair();
}
const repairedDockerfile = ast.toString(true);
```

**Enricher** — annotate the AST with semantic node types:

```typescript
import * as dinghy from "@tdurieux/dinghy";
import { enricher } from "@tdurieux/docker-parfum";

const ast = await dinghy.parseDocker(/* file */);
enricher.enrich(ast);
ast.find(dinghy.nodeType.Q("SC-APT-PACKAGE"));
```

</details>

## Building from source

```bash
npm run build
```

## Supported rules

docker-parfum ships **32 rules**, covering package managers (`apt-get`, `apk`, `yum`, `npm`, `yarn`, `pip`, `gem`), download tools (`curl`, `wget`), archive/cleanup hygiene, and a set of Hadolint-style checks (`DL3002`, `DL3004`, `DL3020`, `DL3027`, `DL3029`, `DL3046`).

<details>
<summary>Full list of 32 rules</summary>

| #   | Rule                            | Description                                                                                                             |
| --- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 1   | curlUseFlagL                    | Use `-L` with `curl` to follow redirects when downloading.                                                             |
| 2   | ruleMoreThanOneInstall          | Group all `apt-get install` calls into a single command.                                                               |
| 3   | curlUseFlagF                    | Use `curl -f` to fail the build on HTTP error codes (≥ 400).                                                           |
| 4   | npmCacheCleanAfterInstall       | Run `npm cache clean` after `npm install` to reduce image size.                                                        |
| 5   | npmCacheCleanUseForce           | Use `--force` with `npm cache clean` so it actually clears.                                                            |
| 6   | yarnCacheCleanAfterInstall      | Clear the yarn cache with `yarn cache clean` to shrink the image.                                                      |
| 7   | rmRecursiveAfterMktempD         | Remove temporary directories created with `mktemp -d`.                                                                 |
| 8   | curlUseHttpsUrl                 | Prefer `https` over `http` with `curl`.                                                                                |
| 9   | wgetUseHttpsUrl                 | Prefer `https` over `http` with `wget`.                                                                                |
| 10  | pipUseNoCacheDir                | Use `--no-cache-dir` with `pip` to avoid caching packages.                                                            |
| 11  | mkdirUsrSrcThenRemove           | Clean up `/usr/src*` after use.                                                                                        |
| 12  | configureShouldUseBuildFlag     | Pass the build flag to `./configure` so it detects the environment.                                                    |
| 13  | gemUpdateSystemRmRootGem        | Remove `/root/.gem` after `gem update --system`.                                                                       |
| 14  | sha256sumEchoOneSpaces          | `sha256sum` expects a single space separator when reading from stdin.                                                  |
| 15  | gemUpdateNoDocument             | Skip gem docs with `--no-document` to speed up updates.                                                                |
| 16  | gpgVerifyAscRmAsc               | Remove the `.asc` file once its signature is verified.                                                                 |
| 17  | yumInstallForceYes              | Use `-y` with `yum install` for non-interactive builds.                                                               |
| 18  | yumInstallRmVarCacheYum         | Remove `/var/cache/yum` after `yum install`.                                                                           |
| 19  | tarSomethingRmTheSomething      | Remove the `.tar` archive after extracting it.                                                                         |
| 20  | gpgUseBatchFlag                 | Use `--batch` with `gpg` for non-interactive runs.                                                                    |
| 21  | gpgUseHaPools                   | Prefer `ha.pool.*` key servers with `gpg`.                                                                            |
| 22  | aptGetInstallUseY               | Use `-y` with `apt-get install` for non-interactive builds.                                                           |
| 23  | aptGetInstallUseNoRec           | Use `--no-install-recommends` to reduce size and attack surface.                                                       |
| 24  | aptGetUpdatePrecedesInstall     | Run `apt-get update` and `install` in the same layer.                                                                 |
| 25  | aptGetInstallThenRemoveAptLists | Remove `/var/lib/apt/lists/*` after `apt-get install`.                                                                |
| 26  | apkAddUseNoCache                | Use `--no-cache` with `apk add`.                                                                                       |
| 27  | DL3002                          | Switch back to a non-privileged `USER` after root operations.                                                          |
| 28  | DL3004                          | Do not use `sudo`; prefer a tool like `gosu`.                                                                         |
| 29  | DL3020                          | Use `COPY` instead of `ADD` for files and folders.                                                                    |
| 30  | DL3027                          | Prefer `apt-get`/`apt-cache` over the less stable `apt`.                                                              |
| 31  | DL3029                          | Avoid `--platform` in `FROM` to keep the image multi-platform.                                                        |
| 32  | DL3046                          | Use `-l`/`--no-log-init` with `useradd` to avoid huge sparse log files.                                              |

</details>

## Citation

If you use docker-parfum in your research, please cite the paper (see [`CITATION.cff`](CITATION.cff)):

> T. Durieux. *Empirical Study of the Docker Smells Impact on the Image Size.* ICSE 2024. <https://arxiv.org/abs/2312.13888>

## License

[MIT](LICENSE) © [Thomas Durieux](https://durieux.me)
