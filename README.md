# Docker-Parfum

Parfum is a tool to detect and repair smell in Dockerfile smells.

The impact of the smells are described in the paper "Empirical Study of the Docker Smells Impact on the Image Size".

Docker-Parfum currently support 32 rules that have been partially identified by Henkel et al. in "Learning from, Understanding, and Supporting DevOps Artifacts for Docker"

## Build

```
npm run build
```

## Usage

### Web based

You can use the web version of Docker-Parfum https://durieux.me/docker-parfum/ (The website is purely static no data is sent).


### CLI

```bash
npm i -g @tdurieux/docker-parfum
docker-parfum repair <dockerfile>
```

```
Usage: docker-parfum [options] [command]

Options:
  -h, --help               display help for command

Commands:
  rules                    List the supported rules
  repair [options] <file>  Repair the Dockerfile smells
  analyze <file>           Analyze a Dockerfile file for smells
  help [command]           display help for command
```

### API

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
import { enricher } from "@tdurieux/docker-parfum";

const ast = await dindhy.parseDocker(/* file */);
enricher.enrich(ast);
ast.find(dindhy.nodeType.Q("SC-APT-PACKAGE"));
```


## Supported Rules

| #   | Rule                            | Description                                                                                                                                                                                                                                                                      |
| --- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | curlUseFlagL                    | The `-L` option in `curl` stands for "follow redirects." When this option is used, curl will follow any redirects that it encounters when making an HTTP request. This can be useful in a Dockerfile if you want to download a file from a URL that may redirect to another URL. |
| 2   | ruleMoreThanOneInstall          | All apt-get install should group into one.                                                                                                                                                                                                                                       |
| 3   | curlUseFlagF                    | Using curl -f in a Dockerfile can help to prevent the build from failing if the HTTP request returns an error code >= 400.                                                                                                                                                       |
| 4   | npmCacheCleanAfterInstall       | Running npm cache clean after npm install in a Dockerfile can help to reduce the size of the image and ensure that the latest version of packages are installed.                                                                                                                 |
| 5   | npmCacheCleanUseForce           | Using the --force flag with npm cache clean can override the default behavior of npm and force the cache to be cleaned, even if it is not more than 3 days old or if npm is in a "read-only" state.                                                                              |
| 6   | yarnCacheCleanAfterInstall      | yarn keeps a local cache of downloaded packages. This unnecessarily increases image size. It can be cleared by executing yarn cache clean.                                                                                                                                       |
| 7   | rmRecursiveAfterMktempD         | Using mktemp -d followed by rm -r in a Dockerfile can create and delete a temporary directory, helping to keep the image small and clean up sensitive data.                                                                                                                      |
| 8   | curlUseHttpsUrl                 | Using https instead of http with curl in a Dockerfile can provide an encrypted connection for transferring data and ensure that curl can access resources that may require https.                                                                                                |
| 9   | wgetUseHttpsUrl                 | Using https instead of http with wget in a Dockerfile can provide an encrypted connection for transferring data and ensure that wget can access resources that may require https.                                                                                                |
| 10  | pipUseNoCacheDir                | Using the --no-cache-dir flag with pip in a Dockerfile can disable the package cache, ensuring that the latest version of a package and its dependencies are installed.                                                                                                          |
| 11  | mkdirUsrSrcThenRemove           | Running rm -rf /usr/src\* after creating the /usr/src directory in a Dockerfile helps keep the file system organized, reduce clutter, and free up space, but it is important to be cautious when using the rm -rf command.                                                       |
| 12  | configureShouldUseBuildFlag     | Passing the --build flag to ./configure in a Dockerfile can help to ensure that the configure script correctly detects the current build environment and generates the correct Makefiles.                                                                                        |
| 13  | gemUpdateSystemRmRootGem        | Removing the /root/.gem directory after running gem update --system can ensure that all of the installed gems are compatible with the new version of gem and that the image starts with a clean slate.                                                                           |
| 14  | sha256sumEchoOneSpaces          | The sha256sum command reads input from stdin with one space as a separator in order to distinguish the input from a filename.                                                                                                                                                    |
| 15  | gemUpdateNoDocument             | Adding the --no-document flag to the .gemrc config file or using it with gem update can speed up the update process by skipping the installation of documentation for updated gems.                                                                                              |
| 16  | gpgVerifyAscRmAsc               | It is generally good practice to remove the .asc file after verifying its signature because the .asc file serves no further purpose once the signature has been verified.                                                                                                        |
| 17  | yumInstallForceYes              | Using the -y flag with yum install in a Dockerfile allows for fully automated package installation, but it is important to carefully consider the packages being installed to avoid potential issues or conflicts.                                                               |
| 18  | yumInstallRmVarCacheYum         | Removing the /var/cache/yum directory after running yum install in a Dockerfile helps reduce the size of the final image and can improve build times, as well as prevent issues caused by outdated or inconsistent cache data.                                                   |
| 19  | tarSomethingRmTheSomething      | Removing the .tar file after extracting its contents in a Dockerfile helps reduce the size of the final image and can improve build times, as well as keep the file system organized and reduce clutter.                                                                         |
| 20  | gpgUseBatchFlag                 | Using the --batch flag with gpg in a Dockerfile allows the command to run without user input, but it is important to carefully consider the implications of using the flag to ensure that it is appropriate for the task at hand.                                                |
| 21  | gpgUseHaPools                   | Using ha.pool._ instead of pool._ with gpg in a Dockerfile improves key server access reliability and efficiency.                                                                                                                                                                |
| 22  | aptGetInstallUseY               | Using the -y flag with apt-get install in a Dockerfile allows for fully automated package installation, but it is important to carefully consider the packages being installed to avoid potential issues or conflicts.                                                           |
| 23  | aptGetInstallUseNoRec           | Using the --no-install-recommends flag with apt-get install in a Dockerfile helps save layer space, improve build times, and reduce the size and attack surface of the final image, as well as prevent hidden dependencies.                                                      |
| 24  | aptGetUpdatePrecedesInstall     | Running apt-get update and apt-get install in a single layer in a Dockerfile improves efficiency, reliability, and readability.                                                                                                                                                  |
| 25  | aptGetInstallThenRemoveAptLists | Running rm -rf /var/lib/apt/lists/\* after apt-get install in a Dockerfile can improve efficiency and reduce the size of the image.                                                                                                                                              |
| 26  | apkAddUseNoCache                | Using the --no-cache flag with apk add in a Dockerfile can help prevent issues caused by installing outdated packages and ensure that the latest version of a package is installed, but it can increase build times.                                                             |
| 27  | DL3002                          | Switching to the root USER opens up certain security risks if an attacker gets access to the container. In order to mitigate this, switch back to a non privileged user after running the commands you need as root.                                                             |
| 28  | DL3004                          | Do not use sudo as it leads to unpredictable behavior. Use a tool like gosu to enforce root.                                                                                                                                                                                     |
| 29  | DL3020                          | Use COPY instead of ADD for files and folders.                                                                                                                                                                                                                                   |
| 30  | DL3027                          | apt is discouraged by the linux distributions as an unattended tool as its interface may suffer changes between versions. Better use the more stable apt-get and apt-cache                                                                                                       |
| 31  | DL3029                          | Specifying --platform= in the docker file FROM clause forces the Image to build only one target platform.                                                                                                                                                                        |
| 32  | DL3046                          | Without the -l or the --no-log-init flag, useradd will add the user to the lastlog and faillog databases.                                                                                                                                                                        |

