import { nodeType, parseDocker, parseShell } from "@tdurieux/dinghy";
import { enrich } from "../lib/enricher";

describe("Testing enrich", () => {
  describe("mv", () => {
    test("mv source1 source2 dest", async () => {
      const root = await parseShell("mv source1 source2 dest");
      const r = enrich(root);
      expect(r.find(nodeType.Q("SC-MV-PATH"))).toHaveLength(3);
      expect(r.find(nodeType.Q("SC-MV-DESTINATION"))).toHaveLength(1);
    });

    test("mv source dest", async () => {
      const root = await parseShell("mv source dest");
      const r = enrich(root);
      expect(r.find(nodeType.Q("SC-MV-PATH"))).toHaveLength(2);
      expect(r.find(nodeType.Q("SC-MV-DESTINATION"))).toHaveLength(1);
    });
  });
  describe("python", () => {
    test("python -m pip install -r requirements", async () => {
      const root = await parseShell("python -m pip install -r requirements");
      const r = enrich(root);
      expect(r.find(nodeType.Q("SC-PIP-INSTALL"))).toHaveLength(1);
    });
  });

  describe("CHMOD", () => {
    test("chmod 777 file", async () => {
      const root = await parseShell("chmod 777 file");
      const r = enrich(root);
      expect(r.find(nodeType.Q("SC-CHMOD-MODE"))).toHaveLength(1);
      expect(r.find(nodeType.Q("SC-CHMOD-PATH"))).toHaveLength(1);
      expect(r.find(nodeType.Q("SC-CHMOD"))).toHaveLength(1);
    });
  });
  describe("SC-DPHP-EXT-INSTALL", () => {
    test("docker-php-ext-install -j$(nproc) intl", async () => {
      const root = await parseShell("docker-php-ext-install -j$(nproc) intl");
      const r = enrich(root);
      expect(r.find(nodeType.Q("SC-DPHP-EXT-INSTALL"))).toHaveLength(1);
      expect(r.find(nodeType.Q("SC-DPHP-EXT-INSTALL-PACKAGE"))).toHaveLength(1);
      expect(r.find(nodeType.Q("SC-DPHP-EXT-INSTALL-J"))).toHaveLength(1);
    });
  });

  test("grep --", async () => {
    const root = await parseShell(
      "grep -nodeType.Q -- '-Xss256k' \"$CASSANDRA_CONFIG/cassandra-env.sh\""
    );
    const r = enrich(root);
    expect(
      r.getElement(nodeType.BashCommand)?.annotations.includes("SC-GREP")
    ).toBe(true);
    expect(r.getElements(nodeType.BashCommandArgs)[3]?.annotations).toEqual([
      "SC-GREP-PATH",
    ]);
  });

  describe("SC-APT-INSTALL", () => {
    test("apt-get ::", async () => {
      const root = await parseShell(
        "apt-get -o AcnodeType.Quire::GzipIndexes=false update;"
      );
      const r = enrich(root);
      expect(r.getElement(nodeType.BashCommand)?.annotations).toEqual([
        "SC-APT-UPDATE",
      ]);
    });

    test("apt", async () => {
      const root = await parseShell("apt install wget");
      const r = enrich(root);
      expect(r.getElement(nodeType.BashCommand)?.annotations).toEqual([
        "SC-APT-INSTALL",
      ]);

      expect(r.find(nodeType.Q("SC-APT-PACKAGE"))).toHaveLength(1);
    });
    test("apt quiet", async () => {
      const root = await parseShell("apt install -qq wget");
      const r = enrich(root);
      expect(r.getElement(nodeType.BashCommand)?.annotations).toEqual([
        "SC-APT-INSTALL",
      ]);

      expect(r.find(nodeType.Q("SC-APT-PACKAGE"))).toHaveLength(1);
    });
  });

  test("cd ~", async () => {
    const root = await parseShell("cd ~;");
    const r = enrich(root);
    expect(r.getElement(nodeType.BashCommand)?.annotations).toEqual(["SC-CD"]);
    expect(r.getElement(nodeType.BashCommandArgs)?.annotations).toContain(
      "SC-CD-PATH"
    );
    expect(r.getElement(nodeType.BashCommandArgs)?.annotations).toContain(
      "BASH-PATH"
    );
  });
  test("cd", async () => {
    const root = await parseShell("cd;");
    const r = enrich(root);
    expect(r.getElement(nodeType.BashCommand)?.annotations).toEqual(["SC-CD"]);
  });

  test("find", async () => {
    const root = await parseShell("find . -name 'FILE-TO-FIND' -exec rm {} ;");
    const r = enrich(root);
    expect(r.getElement(nodeType.BashCommand)?.annotations).toEqual([
      "SC-FIND",
    ]);
    expect(r.find(nodeType.Q("SC-RM"))).toHaveLength(1);
    expect(r.getElements(nodeType.BashCommand)).toHaveLength(2);
  });

  test("bash", async () => {
    const root = await parseShell("bash ./my_script;");
    const r = enrich(root);
    expect(r.getElement(nodeType.BashCommand)?.annotations).toEqual([
      "SC-BASH",
    ]);
    expect(r.getElements(nodeType.BashCommand)).toHaveLength(2);
  });

  test("sh", async () => {
    const root = await parseShell("sh ./my_script;");
    const r = enrich(root);
    expect(r.getElement(nodeType.BashCommand)?.annotations).toEqual(["SC-SH"]);
    expect(r.getElements(nodeType.BashCommand)).toHaveLength(2);
  });
  test("useradd", async () => {
    const root = await parseShell("useradd -G sudo -G test oddee;");
    const r = enrich(root);
    expect(r.getElement(nodeType.BashCommand)?.annotations).toEqual([
      "SC-USER-ADD",
    ]);
    expect(r.getElements(nodeType.BashCommand)).toHaveLength(1);
    expect(r.find(nodeType.Q("SC-USER-ADD-GROUPS"))).toHaveLength(4);
    expect(r.find(nodeType.Q("SC-USER-ADD-LOGIN"))).toHaveLength(1);
  });
  test("adduser", async () => {
    const root = await parseShell("adduser -G sudo -G test oddee;");
    const r = enrich(root);
    expect(r.getElement(nodeType.BashCommand)?.annotations).toEqual([
      "SC-ADD-USER",
    ]);
    expect(r.getElements(nodeType.BashCommand)).toHaveLength(1);
    expect(r.find(nodeType.Q("SC-ADD-USER-GROUPS"))).toHaveLength(4);
    expect(r.find(nodeType.Q("SC-ADD-USER-LOGIN"))).toHaveLength(1);
  });

  test("apk", async () => {
    const root = await parseShell("apk add libressl");
    const r = enrich(root);
    expect(r.getElement(nodeType.BashCommand)?.annotations).toEqual([
      "SC-APK-ADD",
    ]);
  });
  test("sudo", async () => {
    const root = await parseShell("sudo apt-get -f install;");
    const r = enrich(root);
    expect(r.toString()).toEqual("sudo apt-get -f install;");
  });
  test("/bin/sh -c", async () => {
    const root = await parseShell(
      "/bin/sh -c apt install --no-install-recommends -y nodejs"
    );
    enrich(root);
    expect(root.find(nodeType.Q("SC-APT-INSTALL"))).toHaveLength(1);
  });
});

describe("Real case", () => {
  test("enrich no changes", async () => {
    const root =
      await parseDocker(`RUN FIREFOX_URL="https://s3.amazonaws.com/circle-downloads/firefox-mozilla-build_47.0.1-0ubuntu1_amd64.deb" \\
    && curl --silent --show-error --location --fail --retry 3 --output /tmp/firefox.deb $FIREFOX_URL \\
    && echo 'ef016febe5ec4eaf7d455a34579834bcde7703cb0818c80044f4d148df8473bb  /tmp/firefox.deb' | sha256sum -c \\
    && sudo dpkg -i /tmp/firefox.deb || sudo apt-get -f install  \\
    && sudo apt-get install -y libgtk3.0-cil-dev libasound2 libasound2 libdbus-glib-1-2 libdbus-1-3 \\
    && rm -rf /tmp/firefox.deb \\
    && firefox --version`);
    const r = enrich(root);
    root.traverse((n) => {
      if (n.isChanged) {
        console.log(n.toString(), n.position.toString());
      }
      expect(n.isChanged).toBe(false);
    });
  });
  test("adduser", async () => {
    const root = await parseDocker(`RUN if [ -d .git ]; then \
  mkdir /src/_build/prod/rel/bors/.git && \
  git rev-parse --short HEAD > /src/_build/prod/rel/bors/.git/HEAD; \
elif [ -n \${SOURCE_COMMIT} ]; then \
  mkdir /src/_build/prod/rel/bors/.git && \
  echo \${SOURCE_COMMIT} > /src/_build/prod/rel/bors/.git/HEAD; \
fi`);
    const r = enrich(root);
    expect(r.find(nodeType.Q("SC-GIT-REV-PARSE-TARGET"))[0].isChanged).toBe(
      false
    );
  });

  test("make with invalid arguements", async () => {
    const root = await parseShell(
      "make -Wall -Wwrite-strings -Woverloaded-virtual -Wno-sign-compare"
    );
    const r = enrich(root);
    expect(r.find(nodeType.Q("SC-MAKE"))).toHaveLength(1);
  });

  test("infinite loop", async () => {
    const root = await parseDocker(
      "tests/data/b4cbd8978fc2bd702f82e53c46e7c5e015bb418f.Dockerfile"
    );
    const r = enrich(root);
    expect(r.find(nodeType.Q("SC-GIT-CLONE"))).toHaveLength(1);
  });
});
