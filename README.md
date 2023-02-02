# Docker-Parfum

A software that detects and repairs Docker smells.

Docker-Parfum currently support 23 rules that have been identified by Henkel et al. in "Learning from, Understanding, and Supporting DevOps Artifacts for Docker"

## Rules

- curlUseFlagF
- npmCacheCleanAfterInstall
- npmCacheCleanUseForce
- rmRecursiveAfterMktempD
- curlUseHttpsUrl
- wgetUseHttpsUrl
- pipUseNoCacheDir
- mkdirUsrSrcThenRemove
- configureShouldUseBuildFlag
- gemUpdateSystemRmRootGem
- sha256sumEchoOneSpaces
- gemUpdateNoDocument
- gpgVerifyAscRmAsc
- yumInstallForceYes
- yumInstallRmVarCacheYum
- tarSomethingRmTheSomething
- gpgUseBatchFlag
- gpgUseHaPools
- ruleAptGetInstallUseY
- ruleAptGetInstallUseNoRec
- ruleAptGetUpdatePrecedesInstall
- ruleAptGetInstallThenRemoveAptLists
- apkAddUseNoCache

## Usage

### Web based

You can use the web version of Docker-Parfum https://durieux.me/docker-parfum/ (The website is purely static no data is sent).

### API

**Node**

```typescript
import { DockerParser, File } from "@tdurieux/dinghy";
import { Matcher, rules } from "@tdurieux/docker-parfum";

const dockerParser = new DockerParser(new File(<filePath>,<filecontent>)); // the path or the content can be provided
const ast = await dockerParser.parse();
const matcher = new Matcher(dockerfile);
const violations = matcher.match(rules.aptGetInstallThenRemoveAptLists); // look for a specific rule
const allViolations = matcher.matchAll();

for (const violation of allViolations) {
  await violation.repair(); // repair the violation
}

const repairedDockerfile = ast.toString(true);
```

**Browser**

```javascript
const dockerParser = new dockerParfum.dinghy.dockerfileParser.DockerParser(
  new dockerParfum.dinghy.File(undefined, dockerfile)
);

const ast = await dockerParser.parse();
const matcher = new dockerParfum.Matcher(ast);
const violations = matcher.match(
  dockerParfum.rules.aptGetInstallThenRemoveAptLists
); // look for a specific rule
const violations = matcher.matchAll();

for (const violation of allViolations) {
  await violation.repair(); // repair the violation
}

const repairedDockerfile = ast.toString(true);
```

## Enricher

```typescript
import * as dindhy from "@tdurieux/dinghy";
import {enricher} from "@tdurieux/docker-parfum";

const ast = await dindhy.parseDocker(/* file */);
enricher.enrich(ast);
ast.find(dindhy.nodeType.Q("SC-APT-PACKAGE"))
```
