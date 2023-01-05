import { nodeType, parseDocker, parseShell } from "@tdurieux/dinghy";
import enrich from "dinghy-enricher";

export interface Rule {
  scope: "INTRA-DIRECTIVE" | "INTER-DIRECTIVE";
  name: string;
  description: string;
  notes?: string;
  source: string;
  query: nodeType.QueryI;
  consequent: {
    inNode?: nodeType.QueryI;
    beforeNode?: nodeType.QueryI;
    afterNode?: nodeType.QueryI;
  };
  repair: (node: nodeType.DockerOpsNodeType) => Promise<void>;
}

async function postFixWith(
  node: nodeType.DockerOpsNodeType,
  toInsert: nodeType.DockerOpsNodeType
) {
  if (!toInsert) {
    console.error("[REPAIR] toInsert is null");
    return;
  }
  if (toInsert instanceof nodeType.BashScript) {
    toInsert = toInsert.children[0];
  }
  enrich(toInsert);
  const script = node.getParent(nodeType.BashIfThen)
    ? node.getParent(nodeType.BashIfThen)
    : node.getParent(nodeType.BashScript);

  let child = script.children[0];
  for (const c of script.children) {
    if (c === node || c.hasChild(node)) {
      child = c;
      break;
    }
  }
  const position = child.position.clone();
  // position.lineStart = (child.position.lineEnd || 0) + 1;
  toInsert.traverse(
    (n) => {
      n.setPosition(position);
    },
    { includeSelf: true }
  );

  if (child instanceof nodeType.BashStatement && child.semicolon) {
    script.addChild(toInsert);
  } else {
    // add at the end of the command
    const binary = new nodeType.BashConditionBinary();
    binary.parent = child.parent;
    child.replace(binary);

    binary
      .addChild(
        new nodeType.BashConditionBinaryLhs()
          .setPosition(child.position)
          .addChild(child)
      )
      .addChild(
        new nodeType.BashConditionBinaryOp()
          .setPosition(position)
          .addChild(new nodeType.BashOp("10").setPosition(position))
      )
      .addChild(
        new nodeType.BashConditionBinaryRhs()
          .setPosition(position)
          .addChild(toInsert.setPosition(position))
      );
    enrich(binary);
  }
}

export const curlUseFlagF: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "curlUseFlagF",
  description: `The \`-f\` option in curl stands for "fail silently." When this option is used, \`curl\` will return an exit code of \`22\` if the HTTP request returns an error code that is >= 400. This can be useful in a Dockerfile if you want to run a curl command to download a file from the internet, but you don't want the build to fail if the download fails. Instead, you can check the exit code of the curl command and handle the error in your script.

For example:

Copy code:
\`\`\`dockerfile
RUN curl -f -o file.tar.gz https://example.com/file.tar.gz || \
  { echo "Download failed" && exit 1; }
\`\`\``,
  query: nodeType.Q("SC-CURL"),
  consequent: {
    inNode: nodeType.Q("SC-CURL-F-FAIL"),
  },
  source:
    "https://github.com/docker-library/python/pull/73/commits/033320b278e78732e5739f19bca5f8f29573b553",
  repair: async (violation) => {
    const node = violation;
    node.addChild(
      new nodeType.BashCommandArgs()
        .setPosition(node.children[0].position)
        .addChild(
          new nodeType.BashWord().addChild(new nodeType.BashLiteral("-f"))
        )
    );
  },
};

export const curlUseFlagL: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "curlUseFlagF",
  description: `The \`-L\` option in \`curl\` stands for "follow redirects." When this option is used, curl will follow any redirects that it encounters when making an HTTP request. This can be useful in a Dockerfile if you want to download a file from a URL that may redirect to another URL.`,
  query: nodeType.Q("SC-CURL"),
  consequent: {
    inNode: nodeType.Q("SC-CURL-F-LOCATION"),
  },
  source: "Implicit",
  repair: async (violation) => {
    const node = violation;
    node.addChild(
      new nodeType.BashCommandArgs()
        .setPosition(node.children[0].position)
        .addChild(
          new nodeType.BashWord().addChild(new nodeType.BashLiteral("-L"))
        )
    );
  },
};

export const npmCacheCleanAfterInstall: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "npmCacheCleanAfterInstall",
  description: `Running npm cache clean after npm install in a Dockerfile can help to reduce the size of the image and ensure that the latest version of packages are installed.`,
  query: nodeType.Q("SC-NPM-INSTALL"),
  consequent: {
    afterNode: nodeType.Q("SC-NPM-CACHE-CLEAN"),
  },
  source:
    "https://github.com/docker-library/ghost/pull/186/commits/c3bac502046ed5bea16fee67cc48ba993baeaea8",
  repair: async (violation) => {
    postFixWith(violation, await parseShell("npm cache clean --force;"));
  },
};

export const npmCacheCleanUseForce: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "npmCacheCleanUseForce",
  description: `Using the --force flag with npm cache clean can override the default behavior of npm and force the cache to be cleaned, even if it is not more than 3 days old or if npm is in a "read-only" state.`,
  query: nodeType.Q("SC-NPM-CACHE-CLEAN"),
  consequent: {
    inNode: nodeType.Q("SC-NPM-F-FORCE"),
  },
  source:
    "https://github.com/docker-library/ghost/pull/186/commits/c3bac502046ed5bea16fee67cc48ba993baeaea8",
  notes:
    "Had to split into two rules to describe both adding npm cache clean and using the --force flag",
  repair: async (violation) => {
    const node = violation;
    node.addChild(
      new nodeType.BashCommandArgs()
        .setPosition(node.children[2].position)
        .addChild(
          new nodeType.BashWord().addChild(new nodeType.BashLiteral("--force"))
        )
    );
  },
};

export const rmRecursiveAfterMktempD: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "rmRecursiveAfterMktempD",
  description: `Using mktemp -d followed by rm -r in a Dockerfile can create and delete a temporary directory, helping to keep the image small and clean up sensitive data.`,
  query: nodeType.Q("SC-MKTEMP", nodeType.Q("SC-MKTEMP-F-DIRECTORY")),
  consequent: {
    afterNode: nodeType.Q("SC-RM", nodeType.Q("SC-RM-F-FORCE")),
  },
  source: "IMPLICIT --- you should remove temporary dirs in docker images",
  repair: async (violation) => {
    const node = violation;

    postFixWith(
      node,
      await parseShell("rm -rf " + node.children.at(-1)?.toString(true))
    );
  },
};

export const curlUseHttpsUrl: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "curlUseHttpsUrl",
  description: `Using https instead of http with curl in a Dockerfile can provide an encrypted connection for transferring data and ensure that curl can access resources that may require https.`,
  query: nodeType.Q(
    "SC-CURL",
    nodeType.Q(
      "SC-CURL-URL",
      nodeType.Q("ALL", nodeType.Q("ABS-URL-PROTOCOL-HTTP"))
    )
  ),
  consequent: {
    inNode: nodeType.Q("ABS-URL-PROTOCOL-HTTPS"),
  },
  source:
    "https://github.com/docker-library/php/pull/293/commits/2f96a00aaa90ee1c503140724936ca7005273df5",
  repair: async (violation) => {
    const node = violation;
    node.traverse((x) => {
      if (
        x instanceof nodeType.DockerOpsValueNode &&
        x.value &&
        x.value.includes("http:")
      ) {
        x.value = x.value.replace("http", "https");
      }
    });
  },
};

export const wgetUseHttpsUrl: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "wgetUseHttpsUrl",
  description: `Using https instead of http with wget in a Dockerfile can provide an encrypted connection for transferring data and ensure that wget can access resources that may require https.`,
  query: nodeType.Q(
    "SC-WGET",
    nodeType.Q(
      "ALL",
      nodeType.Q(
        "SC-WGET-URL",
        nodeType.Q("ALL", nodeType.Q("ABS-URL-PROTOCOL-HTTP"))
      )
    )
  ),
  consequent: {
    inNode: nodeType.Q("ABS-URL-PROTOCOL-HTTPS"),
  },
  source:
    "https://github.com/docker-library/php/pull/293/commits/2f96a00aaa90ee1c503140724936ca7005273df5",
  repair: async (violation) => {
    const node = violation;
    node.traverse((x) => {
      if (
        x instanceof nodeType.DockerOpsValueNode &&
        x.value &&
        x.value.includes("http:")
      ) {
        x.value = x.value.replace("http", "https");
      }
    });
  },
};

export const pipUseNoCacheDir: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "pipUseNoCacheDir",
  description: `Using the --no-cache-dir flag with pip in a Dockerfile can disable the package cache, ensuring that the latest version of a package and its dependencies are installed.`,
  query: nodeType.Q("SC-PIP-INSTALL"),
  consequent: {
    inNode: nodeType.Q("SC-PIP-F-NO-CACHE-DIR"),
  },
  source:
    "https://github.com/docker-library/python/pull/50/commits/7663560df7547e69d13b1b548675502f4e0917d1",
  repair: async (violation) => {
    const node = violation;
    node.addChild(
      new nodeType.BashCommandArgs()
        .setPosition(node.children[1].position)
        .addChild(
          new nodeType.BashWord().addChild(
            new nodeType.BashLiteral("--no-cache-dir")
          )
        )
    );
  },
};

export const mkdirUsrSrcThenRemove: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "mkdirUsrSrcThenRemove",
  description:
    "Running rm -rf /usr/src* after creating the /usr/src directory in a Dockerfile helps keep the file system organized, reduce clutter, and free up space, but it is important to be cautious when using the rm -rf command.",
  query: nodeType.Q(
    "SC-MKDIR",
    nodeType.Q(
      "SC-MKDIR-PATH",
      nodeType.Q("ALL", nodeType.Q("ABS-USR-SRC-DIR"))
    )
  ),
  consequent: {
    afterNode: nodeType.Q(
      "SC-RM",
      nodeType.Q("SC-RM-PATH", nodeType.Q("ALL", nodeType.Q("ABS-USR-SRC-DIR")))
    ),
  },
  source:
    "https://github.com/docker-library/python/pull/20/commits/ce7da0b874784e6b69e3966b5d7ba995e873163e",
  repair: async (violation) => {
    postFixWith(
      violation,
      await parseShell(
        "rm -rf " +
          violation
            .find(nodeType.Q("SC-MKDIR-PATH"))[0]
            .getElement(nodeType.BashLiteral)
            ?.toString(true)
      )
    );
  },
};

export const configureShouldUseBuildFlag: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "configureShouldUseBuildFlag",
  description: `Passing the --build flag to ./configure in a Dockerfile can help to ensure that the configure script correctly detects the current build environment and generates the correct Makefiles.`,
  query: nodeType.Q("SC-CONFIGURE"),
  consequent: {
    inNode: nodeType.Q("SC-CONFIGURE-BUILD"),
  },
  source:
    "https://github.com/docker-library/ruby/pull/127/commits/be55938d970a392e7d41f17131a091b0a9f4bebc",
  repair: async (violation) => {
    const node = violation;
    node.addChild(
      new nodeType.BashCommandArgs()
        .setPosition(node.children[0].position.clone())
        .addChild(
          new nodeType.BashWord().addChild(
            new nodeType.BashLiteral(
              '--build="$(dpkg-architecture --query DEB_BUILD_GNU_TYPE)"'
            )
          )
        )
    );
  },
};

export const gemUpdateSystemRmRootGem: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "gemUpdateSystemRmRootGem",
  description:
    "Removing the /root/.gem directory after running gem update --system can ensure that all of the installed gems are compatible with the new version of gem and that the image starts with a clean slate.",
  query: nodeType.Q("SC-GEM-UPDATE"),
  consequent: {
    afterNode: nodeType.Q(
      "SC-RM",
      nodeType.Q(
        "SC-RM-PATH",
        nodeType.Q("ABS-PATH-ABSOLUTE"),
        nodeType.Q("ABS-PATH-DOT-GEM"),
        nodeType.Q("ABS-PATH-ROOT-DIR")
      )
    ),
  },
  source:
    "https://github.com/docker-library/ruby/pull/185/commits/c9a4472a019d18aba1fdab6a63b96474b40ca191",
  repair: async (violation) => {
    postFixWith(violation, await parseShell("rm -rf /root/.gem;"));
  },
};

export const sha256sumEchoOneSpaces: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "sha256sumEchoOneSpaces",
  description:
    "The sha256sum command reads input from stdin with one space as a separator in order to distinguish the input from a filename.",
  // query: nodeType.Q("SC-SHA-256-SUM", nodeType.Q("SC-SHA-256-SUM-F-CHECK")),
  query: nodeType.Q(
    nodeType.BashConditionBinary,
    nodeType.Q(
      nodeType.BashConditionBinaryLhs,
      nodeType.Q(
        "ALL",
        nodeType.Q("SC-ECHO", nodeType.Q("ALL", nodeType.Q("ABS-DOUBLE-SPACE")))
      )
    ),
    nodeType.Q(
      nodeType.BashConditionBinaryRhs,
      nodeType.Q(
        "ALL",
        nodeType.Q("SC-SHA-256-SUM", nodeType.Q("SC-SHA-256-SUM-F-CHECK"))
      )
    )
  ),
  consequent: {
    inNode: nodeType.Q(
      "SC-ECHO",
      nodeType.Q("ALL", nodeType.Q("ABS-SINGLE-SPACE"))
    ),
  },
  source:
    "https://github.com/docker-library/memcached/pull/6/commits/a8c4206768821aa47579c6413be85be914875caa",
  notes:
    "sha1sum is old --- transliterated to use more modern sha256sum which most images are using",
  async repair(violation) {
    const node = violation;
    const echoWithDoubleSpace = node.find(
      nodeType.Q("SC-ECHO", nodeType.Q("ALL", nodeType.Q("ABS-DOUBLE-SPACE")))
    );
    if (echoWithDoubleSpace) {
      echoWithDoubleSpace.forEach((n) =>
        n
          .find(nodeType.Q("ABS-DOUBLE-SPACE"))
          .filter((n) => n instanceof nodeType.DockerOpsValueNode)
          .forEach((doubleSpace) => {
            (doubleSpace as nodeType.DockerOpsValueNode).value = (
              doubleSpace as nodeType.DockerOpsValueNode
            ).value.replace(/  /g, " ");
          })
      );
    }
  },
};

export const gemUpdateNoDocument: Rule = {
  scope: "INTER-DIRECTIVE",
  name: "gemUpdateNoDocument",
  description:
    "Adding the --no-document flag to the .gemrc config file or using it with gem update can speed up the update process by skipping the installation of documentation for updated gems.",
  query: nodeType.Q("SC-GEM-UPDATE"),
  consequent: {
    beforeNode: nodeType.Q(
      "SC-ECHO",
      nodeType.Q(
        "SC-ECHO-ITEM",
        nodeType.Q("ALL", nodeType.Q("ABS-CONFIG-NO-DOCUMENT"))
      )
    ),
  },
  source: "https://github.com/docker-library/ruby/pull/49/files",
  notes:
    "Either gem update or gem install leads us to wanting the --no-document/--no-rdoc flag to be set.",
  repair: async (violation) => {
    const node = violation;
    const dFile = node.getParent(nodeType.DockerFile);
    const dRun = node.getParent(nodeType.DockerRun);
    if (dFile == null || dRun == null) return;

    const setup = (
      await parseDocker(
        `RUN mkdir -p /usr/local/etc \\
  && { \\
    echo 'install: --no-document'; \\
    echo 'update: --no-document'; \\
  } >> /usr/local/etc/gemrc;\n`
      )
    ).getElement(nodeType.DockerRun);
    // move the setup before the gem update
    if (setup) {
      setup.position.lineStart = dRun.position.lineStart - 1;
      dFile.addChild(setup);
    }
  },
};

export const gpgVerifyAscRmAsc: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "gpgVerifyAscRmAsc",
  description: `It is generally good practice to remove the .asc file after verifying its signature because the .asc file serves no further purpose once the signature has been verified.`,
  query: nodeType.Q(
    "SC-GPG",
    nodeType.Q(
      "SC-GPG-VERIFY",
      nodeType.Q("ALL", nodeType.Q("ABS-EXTENSION-ASC"))
    )
  ),
  consequent: {
    afterNode: nodeType.Q("SC-RM", nodeType.Q("SC-RM-PATH")),
  },
  source:
    "https://github.com/docker-library/php/pull/196/commits/8943e1e6a930768994fbc29f4df89d0a3fd65e12",
  repair: async (violation) => {
    postFixWith(
      violation,
      await parseShell(
        "rm " + violation.find(nodeType.Q("ABS-EXTENSION-ASC"))[0].toString()
      )
    );
  },
};

export const yumInstallForceYes: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "yumInstallForceYes",
  description:
    "Using the -y flag with yum install in a Dockerfile allows for fully automated package installation, but it is important to carefully consider the packages being installed to avoid potential issues or conflicts.",
  query: nodeType.Q("SC-YUM-INSTALL"),
  consequent: {
    inNode: nodeType.Q("SC-YUM-F-ASSUMEYES"),
  },
  source: "IMPLICIT -- based on apt-get install -y rule",
  repair: async (violation) => {
    const node = violation;
    node.addChild(
      new nodeType.BashCommandArgs()
        .setPosition(node.children[1].position)
        .addChild(
          new nodeType.BashWord().addChild(new nodeType.BashLiteral("-y"))
        )
    );
  },
};

export const yumInstallRmVarCacheYum: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "yumInstallRmVarCacheYum",
  description:
    "Removing the /var/cache/yum directory after running yum install in a Dockerfile helps reduce the size of the final image and can improve build times, as well as prevent issues caused by outdated or inconsistent cache data.",
  query: nodeType.Q("SC-YUM-INSTALL"),
  consequent: {
    afterNode: nodeType.Q(
      "SC-RM",
      nodeType.Q("SC-RM-F-RECURSIVE"),
      nodeType.Q(
        "SC-RM-PATH",
        nodeType.Q("ALL", nodeType.Q("ABS-VAR-CACHE-YUM"))
      )
    ),
  },
  source:
    "https://github.com/docker-library/ruby/pull/7/commits/950a673e59df846608f624ee55321d36ba1f89ba",
  notes:
    "The source here is for apt-get. This rule is the natural translation to yum.",
  repair: async (violation) => {
    postFixWith(violation, await parseShell("rm -rf /var/cache/yum"));
  },
};

export const tarSomethingRmTheSomething: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "tarSomethingRmTheSomething",
  description:
    "Removing the .tar file after extracting its contents in a Dockerfile helps reduce the size of the final image and can improve build times, as well as keep the file system organized and reduce clutter.",
  query: nodeType.Q(
    "SC-TAR",
    nodeType.Q(
      "SC-TAR-FILE",
      nodeType.Q("ALL", nodeType.Q("ABS-EXTENSION-TAR"))
    )
  ),
  consequent: {
    afterNode: nodeType.Q(
      "SC-RM",
      nodeType.Q(
        "SC-RM-PATH",
        nodeType.Q("ALL", nodeType.Q("ABS-EXTENSION-TAR"))
      )
    ),
  },
  source:
    "IMPLICIT --- no reason to keep around duplicates (the compressed version and the uncompressed version)",
  repair: async (violation) => {
    let file = violation.find(nodeType.Q("ABS-EXTENSION-TAR"))[0]?.toString();
    if (file.startsWith("-") && file.includes("=")) {
      file = file.split("=")[1];
    } else if (file.startsWith("-f")) {
      file = file.substring(2);
    }

    postFixWith(violation, await parseShell("rm " + file));
  },
};

export const gpgUseBatchFlag: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "gpgUseBatchFlag",
  description:
    "Using the --batch flag with gpg in a Dockerfile allows the command to run without user input, but it is important to carefully consider the implications of using the flag to ensure that it is appropriate for the task at hand.",
  query: nodeType.Q("SC-GPG"),
  consequent: {
    inNode: nodeType.Q("SC-GPG-F-BATCH"),
  },
  source:
    "https://github.com/docker-library/php/pull/747/commits/b99209cc078ebb7bf4614e870c2d69e0b3bed399",
  repair: async (violation) => {
    const node = violation;
    node.addChild(
      new nodeType.BashCommandArgs()
        .setPosition(node.children[0].position)
        .addChild(
          new nodeType.BashWord().addChild(new nodeType.BashLiteral("--batch"))
        )
    );
  },
};

export const gpgUseHaPools: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "gpgUseHaPools",
  description:
    "Using ha.pool.* instead of pool.* with gpg in a Dockerfile improves key server access reliability and efficiency.",
  query: nodeType.Q(
    "SC-GPG",
    nodeType.Q(
      "SC-GPG-KEYSERVER",
      nodeType.Q("ALL", nodeType.Q("ABS-URL-POOL"))
    )
  ),
  consequent: {
    inNode: nodeType.Q("ABS-URL-HA-POOL"),
  },
  source:
    "https://github.com/docker-library/httpd/pull/5/commits/63cd0ad57a12c76ff70d0f501f6c2f1580fa40f5",
  repair: async (violation) => {
    const node = violation;
    node
      .getElements(nodeType.BashLiteral)
      .filter((e) => e.value.includes("pool."))
      .forEach((e) => (e.value = e.value.replace("pool.", "ha.pool.")));
  },
};

export const aptGetInstallUseY: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "aptGetInstallUseY",
  description:
    "Using the -y flag with apt-get install in a Dockerfile allows for fully automated package installation, but it is important to carefully consider the packages being installed to avoid potential issues or conflicts.",
  query: nodeType.Q("SC-APT-INSTALL"),
  consequent: {
    inNode: nodeType.Q("SC-APT-F-YES"),
  },
  source:
    "IMPLICIT --- need to use non-interactive mode during image build except for very rare exceptions.",
  repair: async (violation) => {
    const node = violation;
    node.addChild(
      new nodeType.BashCommandArgs()
        .setPosition(node.children[1].position)
        .addChild(
          new nodeType.BashWord().addChild(new nodeType.BashLiteral("-y"))
        )
    );
  },
};

export const moreThanOneInstall: Rule = {
  scope: "INTER-DIRECTIVE",
  name: "ruleMoreThanOneInstall",
  description: "all apt-get install should group into one.",
  source: "IMPLICIT --- slow down the build",
  query: nodeType.Q(
    "ANY",
    nodeType.Q("SC-APT-INSTALL"),
    nodeType.Q("SC-APT-INSTALL")
  ),
  consequent: {},
  repair: async (violation) => {
    throw new Error("Not implemented");
  },
};

export const aptGetUpdatePrecedesInstall: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "aptGetUpdatePrecedesInstall",
  description:
    "Running apt-get update and apt-get install in a single layer in a Dockerfile improves efficiency, reliability, and readability.",
  query: nodeType.Q("SC-APT-INSTALL"),
  consequent: {
    beforeNode: nodeType.Q("SC-APT-UPDATE"),
  },
  source:
    "IMPLICIT --- one of Hadolint's recommendations and a docker best practice.",
  repair: async (violation) => {
    const root = violation.getParent(nodeType.DockerFile);
    const installs = root.find(nodeType.Q("SC-APT-INSTALL"));
    if (installs.length !== 1) {
      // do not support more than one install
      return;
    }
    const updates = root.find(nodeType.Q("SC-APT-UPDATE"));
    if (updates.length !== 1) {
      // do not support more than one update
      return;
    }
    const install = installs[0];
    const update = updates[0];
    if (update.parent instanceof nodeType.BashScript) {
      update.getParent(nodeType.DockerRun).remove();
      update.setPosition(null);

      const script = install.getParent(nodeType.BashScript);
      const child = script.children[0];

      // add at the end of the command
      const binary = new nodeType.BashConditionBinary()
        .addChild(
          new nodeType.BashConditionBinaryOp().addChild(
            new nodeType.BashOp("10")
          )
        )
        .addChild(new nodeType.BashConditionBinaryRhs().addChild(child.clone()))
        .addChild(new nodeType.BashConditionBinaryLhs().addChild(update));
      child.replace(binary);
    }
  },
};

export const aptGetInstallUseNoRec: Rule = {
  name: "aptGetInstallUseNoRec",
  scope: "INTRA-DIRECTIVE",
  description:
    "Using the --no-install-recommends flag with apt-get install in a Dockerfile helps save layer space, improve build times, and reduce the size and attack surface of the final image, as well as prevent hidden dependencies.",
  query: nodeType.Q("SC-APT-INSTALL"),
  consequent: {
    inNode: nodeType.Q("SC-APT-F-NO-INSTALL-RECOMMENDS"),
  },
  source:
    "https://github.com/docker-library/openjdk/pull/193/commits/1d6fa42735002d61625d18378f1ca2df39cb26a0",
  repair: async (violation) => {
    const node = violation;
    node.addChild(
      new nodeType.BashCommandArgs()
        .setPosition(node.children[1].position)
        .addChild(
          new nodeType.BashWord().addChild(
            new nodeType.BashLiteral("--no-install-recommends")
          )
        )
    );
  },
};

export const aptGetInstallThenRemoveAptLists: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "ruleAptGetInstallThenRemoveAptLists",
  description:
    "Running rm -rf /var/lib/apt/lists/* after apt-get install in a Dockerfile can improve efficiency and reduce the size of the image.",
  query: nodeType.Q("SC-APT-INSTALL"),
  consequent: {
    afterNode: nodeType.Q(
      "SC-RM",
      nodeType.Q(
        "SC-RM-PATH",
        nodeType.Q("ABS-GLOB-STAR"),
        nodeType.Q("ABS-APT-LISTS"),
        nodeType.Q("ABS-PATH-VAR")
      )
    ),
  },
  source:
    "https://github.com/docker-library/ruby/pull/7/commits/950a673e59df846608f624ee55321d36ba1f89ba",
  repair: async (violation) => {
    postFixWith(violation, await parseShell("rm -rf /var/lib/apt/lists/*;"));
  },
};

export const apkAddUseNoCache: Rule = {
  scope: "INTRA-DIRECTIVE",
  name: "apkAddUseNoCache",
  description:
    "Using the --no-cache flag with apk add in a Dockerfile can help prevent issues caused by installing outdated packages and ensure that the latest version of a package is installed, but it can increase build times.",
  query: nodeType.Q("SC-APK-ADD"),
  consequent: {
    inNode: nodeType.Q("SC-APK-F-NO-CACHE"),
    afterNode: nodeType.Q(
      "SC-RM",
      nodeType.Q("SC-RM-PATH", nodeType.Q("ABS-VAR-CACHE-APK"))
    ),
  },
  source:
    "https://github.com/docker-library/php/pull/228/commits/85d48c88b3e3dae303118275202327f14a8106f4",
  repair: async (violation) => {
    const node = violation;
    node.addChild(
      new nodeType.BashCommandArgs()
        .setPosition(node.children[1].position)
        .addChild(
          new nodeType.BashWord().addChild(
            new nodeType.BashLiteral("--no-cache")
          )
        )
    );
  },
};

export const RULES: Rule[] = [
  curlUseFlagF,
  curlUseFlagL,
  npmCacheCleanAfterInstall,
  npmCacheCleanUseForce,
  rmRecursiveAfterMktempD,
  curlUseHttpsUrl,
  wgetUseHttpsUrl,
  pipUseNoCacheDir,
  mkdirUsrSrcThenRemove,
  configureShouldUseBuildFlag,
  gemUpdateSystemRmRootGem,
  sha256sumEchoOneSpaces,
  gemUpdateNoDocument,
  gpgVerifyAscRmAsc,
  yumInstallForceYes,
  yumInstallRmVarCacheYum,
  tarSomethingRmTheSomething,
  gpgUseBatchFlag,
  gpgUseHaPools,
  aptGetInstallUseY,
  aptGetInstallUseNoRec,
  aptGetUpdatePrecedesInstall,
  aptGetInstallThenRemoveAptLists,
  // ruleMoreThanOneInstall,
  apkAddUseNoCache,
];
