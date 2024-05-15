import { DockerFile } from "@tdurieux/dinghy";
import { BINNACLE_RULES, Matcher } from "../lib";
import {
  apkAddUseNoCache,
  configureShouldUseBuildFlag,
  curlUseFlagF,
  curlUseHttpsUrl,
  gemUpdateNoDocument,
  gemUpdateSystemRmRootGem,
  gpgUseBatchFlag,
  gpgUseHaPools,
  gpgVerifyAscRmAsc,
  npmCacheCleanAfterInstall,
  pipUseNoCacheDir,
  rmRecursiveAfterMktempD,
  aptGetInstallThenRemoveAptLists,
  aptGetInstallUseNoRec,
  aptGetInstallUseY,
  aptGetUpdatePrecedesInstall,
  sha256sumEchoOneSpaces,
  tarSomethingRmTheSomething,
  wgetUseHttpsUrl,
  yumInstallRmVarCacheYum,
} from "../lib/rules/binnacle";
import { praseFile } from "./test-utils";

describe("Testing the detecting of rule on real dockerfiles", () => {
  test("1c11182d763188889c00d8f44a91d0df09e0147b", () => {
    const dockerfile = praseFile("1c11182d763188889c00d8f44a91d0df09e0147b");
    expect(dockerfile).toBeInstanceOf(DockerFile);

    const matcher = new Matcher(dockerfile);

    expect(matcher.match(aptGetInstallThenRemoveAptLists)).toHaveLength(0);

    expect(matcher.match(aptGetUpdatePrecedesInstall)).toHaveLength(0);
  });
  test("bors-ng-bors-ng.Dockerfile", () => {
    const dockerfile = praseFile("bors-ng-bors-ng");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(1);
    matcher.match(curlUseFlagF)[0].repair();
    expect(dockerfile.toString(true)).toBe(`FROM elixir

RUN curl -f -q https://deb.nodesource.com/gpgkey/nodesource.gpg.key

RUN if [ -d .git ]; then \\
        mkdir /src/_build/prod/rel/bors/.git && \\
        git rev-parse --short HEAD > /src/_build/prod/rel/bors/.git/HEAD; \\
    elif [ -n \${SOURCE_COMMIT} ]; then \\
        mkdir /src/_build/prod/rel/bors/.git && \\
        echo \${SOURCE_COMMIT} > /src/_build/prod/rel/bors/.git/HEAD; \\
    fi`);
  });
  test("1d8c362e7043d7b78836f06256d0ae9b82561af8", () => {
    const dockerfile = praseFile("1d8c362e7043d7b78836f06256d0ae9b82561af8");
    expect(dockerfile).toBeInstanceOf(DockerFile);

    const matcher = new Matcher(dockerfile);

    expect(matcher.match(aptGetInstallThenRemoveAptLists)).toHaveLength(0);

    expect(matcher.match(aptGetUpdatePrecedesInstall)).toHaveLength(0);

    expect(matcher.match(aptGetInstallUseNoRec)).toHaveLength(1);
    matcher.match(aptGetInstallUseNoRec)[0].repair();
  });
  test("0aa1cd6a00cfe247f17e680d5e2c394b5f0d3edc", () => {
    const dockerfile = praseFile("0aa1cd6a00cfe247f17e680d5e2c394b5f0d3edc");
    expect(dockerfile).toBeInstanceOf(DockerFile);

    const violations = new Matcher(dockerfile).matchAll(BINNACLE_RULES);
    expect(violations).toHaveLength(0);
  });
  test("13ee04f6789083fb2df8c931cc0aaae45746261b", () => {
    const dockerfile = praseFile("13ee04f6789083fb2df8c931cc0aaae45746261b");
    expect(dockerfile).toBeInstanceOf(DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(npmCacheCleanAfterInstall)).toHaveLength(4);
    expect(matcher.match(rmRecursiveAfterMktempD)).toHaveLength(1);
    expect(matcher.match(pipUseNoCacheDir)).toHaveLength(1);
    expect(matcher.match(gpgUseBatchFlag)).toHaveLength(1);
    expect(matcher.match(aptGetInstallUseNoRec)).toHaveLength(1);
    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(8);
  });
  test("0f2e80905340ffc054e2d445a53c45c11069d30a", () => {
    const dockerfile = praseFile("0f2e80905340ffc054e2d445a53c45c11069d30a");
    expect(dockerfile).toBeInstanceOf(DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(rmRecursiveAfterMktempD)).toHaveLength(2);
    expect(matcher.match(aptGetInstallThenRemoveAptLists)).toHaveLength(1);
    expect(matcher.match(pipUseNoCacheDir)).toHaveLength(1);
    expect(matcher.match(curlUseHttpsUrl)).toHaveLength(1);
  });
  test("0ce06af56644fb21ee96178f60c2d57eb73c8226", () => {
    const dockerfile = praseFile("0ce06af56644fb21ee96178f60c2d57eb73c8226");
    expect(dockerfile).toBeInstanceOf(DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(wgetUseHttpsUrl)).toHaveLength(1);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(1);
    expect(matcher.match(aptGetInstallUseNoRec)).toHaveLength(1);
    expect(matcher.match(aptGetInstallThenRemoveAptLists)).toHaveLength(1);
    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(4);
  });
  test("0cfa5aeb451ed647696bf5b9f9cb5648fde8cbd8", () => {
    const dockerfile = praseFile("0cfa5aeb451ed647696bf5b9f9cb5648fde8cbd8");
    expect(dockerfile).toBeInstanceOf(DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(wgetUseHttpsUrl)).toHaveLength(4);
    expect(matcher.match(sha256sumEchoOneSpaces)).toHaveLength(0);
    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(4);
  });
  test("0bab414ad6285c04798e5f4480c10bf65da0e982", () => {
    const dockerfile = praseFile("0bab414ad6285c04798e5f4480c10bf65da0e982");
    expect(dockerfile).toBeInstanceOf(DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(wgetUseHttpsUrl)).toHaveLength(2);
    expect(matcher.match(configureShouldUseBuildFlag)).toHaveLength(3);
    expect(matcher.match(yumInstallRmVarCacheYum)).toHaveLength(1);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(3);
    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(9);
  });
  test("087ced569a2e70e178c18bcf18426fa8fbc4f098", () => {
    const dockerfile = praseFile("087ced569a2e70e178c18bcf18426fa8fbc4f098");
    expect(dockerfile).toBeInstanceOf(DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseHttpsUrl)).toHaveLength(2);
  });
  test("0b503585144e9b80d8d54fc435b4a2c933495a67", () => {
    const dockerfile = praseFile("0b503585144e9b80d8d54fc435b4a2c933495a67");
    expect(dockerfile).toBeInstanceOf(DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(2);
  });
  test("0b29126f397552a2b6f58cf8dae1e37b8a12fb3b", () => {
    const dockerfile = praseFile("0b29126f397552a2b6f58cf8dae1e37b8a12fb3b");
    expect(dockerfile).toBeInstanceOf(DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(2);
  });
  test("0aef9fd98e80212b5fd7ea8a3fe65aa7f4ec7979", () => {
    const dockerfile = praseFile("0aef9fd98e80212b5fd7ea8a3fe65aa7f4ec7979");
    expect(dockerfile).toBeInstanceOf(DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(2);
  });
  test("0b3ce67c849db8c2ad27831b735a65b1a4591623", () => {
    const dockerfile = praseFile("0b3ce67c849db8c2ad27831b735a65b1a4591623");
    expect(dockerfile).toBeInstanceOf(DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(7);
  });
  test("0b436d6fe9c18f20b76bf5bf396da14eb2f67629", () => {
    const dockerfile = praseFile("0b436d6fe9c18f20b76bf5bf396da14eb2f67629");
    expect(dockerfile).toBeInstanceOf(DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(3);
  });
  test("0b93847153592764c2a707bad4957683b56b4758", () => {
    const dockerfile = praseFile("0b93847153592764c2a707bad4957683b56b4758");
    expect(dockerfile).toBeInstanceOf(DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(3);
    expect(matcher.match(curlUseHttpsUrl)).toHaveLength(1);
    expect(matcher.match(yumInstallRmVarCacheYum)).toHaveLength(5);
  });
  test("082e02161baf2f48ed1d4292a19a3069ba7aac3c", () => {
    const dockerfile = praseFile("082e02161baf2f48ed1d4292a19a3069ba7aac3c");
    expect(dockerfile).toBeInstanceOf(DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(gpgVerifyAscRmAsc)).toHaveLength(1);
    expect(matcher.match(curlUseFlagF)).toHaveLength(1);
    expect(matcher.match(gpgUseHaPools)).toHaveLength(2);
  });
  test("0ecad13fe63526d9f1e8b05d7de1af90f002ed2f", () => {
    const dockerfile = praseFile("0ecad13fe63526d9f1e8b05d7de1af90f002ed2f");
    expect(dockerfile).toBeInstanceOf(DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(pipUseNoCacheDir)).toHaveLength(9);
    expect(matcher.match(aptGetInstallUseNoRec)).toHaveLength(10);
    expect(matcher.match(aptGetInstallThenRemoveAptLists)).toHaveLength(10);
  });
  test("0b15d39cebd7afc18eded9d4f41d932b00770eed", () => {
    const dockerfile = praseFile("0b15d39cebd7afc18eded9d4f41d932b00770eed");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(0);

    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(0);
  });
  test("0b687ec4b2f490051a53d114bf64242580c32f28", () => {
    const dockerfile = praseFile("0b687ec4b2f490051a53d114bf64242580c32f28");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(0);
    expect(matcher.match(apkAddUseNoCache)).toHaveLength(1);

    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(1);
  });
  test("0b1975d451426f9858f59b812411970f4e2ac49c", () => {
    const dockerfile = praseFile("0b1975d451426f9858f59b812411970f4e2ac49c");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(0);

    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(0);
  });
  test("0c1e517ccfa17cd28a2a1e54b6a017b6d7b94f0d", () => {
    const dockerfile = praseFile("0c1e517ccfa17cd28a2a1e54b6a017b6d7b94f0d");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(0);

    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(0);
  });
  test("0c2ab277bc1488c0fad85b02a5e5cd4ff967e9d9", () => {
    const dockerfile = praseFile("0c2ab277bc1488c0fad85b02a5e5cd4ff967e9d9");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(0);

    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(0);
  });
  test("1ae6fb60aa44225965af5580a60b7b11e92b0ae3", () => {
    const dockerfile = praseFile("1ae6fb60aa44225965af5580a60b7b11e92b0ae3");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(0);
    // TODO should not be the case, tmp folder is removed but the name is assigned to a variable
    expect(matcher.match(rmRecursiveAfterMktempD)).toHaveLength(2);
    expect(matcher.match(aptGetInstallUseNoRec)).toHaveLength(1);

    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(3);
  });
  test("1d1bb50eab9be0de526f64d25ee65a173d4b7bac", () => {
    const dockerfile = praseFile("1d1bb50eab9be0de526f64d25ee65a173d4b7bac");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(0);
    expect(matcher.match(sha256sumEchoOneSpaces)).toHaveLength(1);

    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(1);
  });
  test("fc3c55ae7e45976afdced595ba7947a19eba20f6", () => {
    const dockerfile = praseFile("fc3c55ae7e45976afdced595ba7947a19eba20f6");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(16);
    expect(matcher.match(configureShouldUseBuildFlag)).toHaveLength(1);

    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(17);
  });
  test("f7e951de0561fc59784dc65c4759d1440d299548", () => {
    const dockerfile = praseFile("f7e951de0561fc59784dc65c4759d1440d299548");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(wgetUseHttpsUrl)).toHaveLength(3);
    expect(matcher.match(configureShouldUseBuildFlag)).toHaveLength(3);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(3);
    expect(matcher.match(gpgUseBatchFlag)).toHaveLength(2);
    expect(matcher.match(apkAddUseNoCache)).toHaveLength(0);

    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(11);
  });
  test("edb81abfd45e16bcd51d6216b1b4ffcfeeb396fe", () => {
    const dockerfile = praseFile("edb81abfd45e16bcd51d6216b1b4ffcfeeb396fe");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(16);
    expect(matcher.match(configureShouldUseBuildFlag)).toHaveLength(1);

    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(17);
  });
  test("d68979a6b11bfd4c96d311a3ec96f6f856eb78fd", () => {
    const dockerfile = praseFile("d68979a6b11bfd4c96d311a3ec96f6f856eb78fd");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(16);
    expect(matcher.match(configureShouldUseBuildFlag)).toHaveLength(1);

    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(17);
  });
  test("cc8c73f5e92b615f02c288c113d9fdbe258f1234", () => {
    const dockerfile = praseFile("cc8c73f5e92b615f02c288c113d9fdbe258f1234");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(6);
    expect(matcher.match(curlUseHttpsUrl)).toHaveLength(3);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(6);
    expect(matcher.match(yumInstallRmVarCacheYum)).toHaveLength(1);
    expect(matcher.match(configureShouldUseBuildFlag)).toHaveLength(3);
    expect(matcher.match(wgetUseHttpsUrl)).toHaveLength(3);

    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(22);
  });
  test("9cae314c3410c74d2267c7c71eeb17a83b13f07f", () => {
    const dockerfile = praseFile("9cae314c3410c74d2267c7c71eeb17a83b13f07f");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(11);
  });
  test("5da2d6445d6786a7822a10a2932465a7e6fb2f66", () => {
    const dockerfile = praseFile("5da2d6445d6786a7822a10a2932465a7e6fb2f66");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(20);
    expect(matcher.match(npmCacheCleanAfterInstall)).toHaveLength(1);
    expect(matcher.match(wgetUseHttpsUrl)).toHaveLength(1);
    expect(matcher.match(aptGetInstallUseNoRec)).toHaveLength(1);
    expect(matcher.match(aptGetInstallThenRemoveAptLists)).toHaveLength(1);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(2);
    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(26);
  });
  test("6f5babadbdd0a15f4867eba1d2aa5a57983f59ee", () => {
    const dockerfile = praseFile("6f5babadbdd0a15f4867eba1d2aa5a57983f59ee");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(6);
    expect(matcher.match(curlUseHttpsUrl)).toHaveLength(1);
    expect(matcher.match(yumInstallRmVarCacheYum)).toHaveLength(3);
    expect(matcher.match(gemUpdateSystemRmRootGem)).toHaveLength(1);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(3);
    expect(matcher.match(gemUpdateNoDocument)).toHaveLength(1);
    expect(matcher.match(configureShouldUseBuildFlag)).toHaveLength(1);
    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(16);
  });
  test("75e40e8cd29890dd65115699529c2e88f7842e7b", () => {
    const dockerfile = praseFile("75e40e8cd29890dd65115699529c2e88f7842e7b");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(1);
    expect(matcher.match(curlUseHttpsUrl)).toHaveLength(1);
    expect(matcher.match(sha256sumEchoOneSpaces)).toHaveLength(0);
    expect(matcher.match(gpgUseBatchFlag)).toHaveLength(3);
    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(5);
  });
  test("a39b5f620df6ae20a6841cf748eb9023c2ea72b6", () => {
    const dockerfile = praseFile("a39b5f620df6ae20a6841cf748eb9023c2ea72b6");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(3);
    expect(matcher.match(gpgVerifyAscRmAsc)).toHaveLength(2);
    expect(matcher.match(gpgUseBatchFlag)).toHaveLength(4);
    expect(matcher.match(aptGetInstallUseNoRec)).toHaveLength(3);
    expect(matcher.match(aptGetInstallThenRemoveAptLists)).toHaveLength(3);
    expect(matcher.match(pipUseNoCacheDir)).toHaveLength(4);
    expect(matcher.match(curlUseFlagF)).toHaveLength(2);
    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(21);
  });
  test("01e787466b7c2248a7465f413e587932d4b5bc06", () => {
    const dockerfile = praseFile("01e787466b7c2248a7465f413e587932d4b5bc06");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(aptGetInstallThenRemoveAptLists)).toHaveLength(5);
    expect(matcher.match(aptGetInstallUseY)).toHaveLength(3);
    expect(matcher.match(aptGetInstallUseNoRec)).toHaveLength(3);
    expect(matcher.match(aptGetUpdatePrecedesInstall)).toHaveLength(2);
    expect(matcher.match(pipUseNoCacheDir)).toHaveLength(7);
    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(20);
  });
  test("8650876daf234124a6b7aec4c75d9ccf92ebe626", () => {
    const dockerfile = praseFile("8650876daf234124a6b7aec4c75d9ccf92ebe626");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(19);
  });
  test("7cb0093bfdd6688528619ff0af54cdf0f95243b3", () => {
    const dockerfile = praseFile("7cb0093bfdd6688528619ff0af54cdf0f95243b3");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(16);
  });
  test("613403030ca5b851255753a0c92254f985b561e4", () => {
    const dockerfile = praseFile("613403030ca5b851255753a0c92254f985b561e4");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(apkAddUseNoCache)).toHaveLength(3);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(10);
    expect(matcher.match(configureShouldUseBuildFlag)).toHaveLength(7);
    expect(matcher.match(npmCacheCleanAfterInstall)).toHaveLength(1);
    expect(matcher.match(curlUseFlagF)).toHaveLength(10);
    expect(matcher.match(curlUseHttpsUrl)).toHaveLength(6);

    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(37);
  });
  test("0001a177c159ca47f359c34cfdce78ecf80e7eb0", () => {
    const dockerfile = praseFile("0001a177c159ca47f359c34cfdce78ecf80e7eb0");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseHttpsUrl)).toHaveLength(2);
    expect(matcher.match(sha256sumEchoOneSpaces)).toHaveLength(0);
    expect(matcher.match(aptGetInstallUseNoRec)).toHaveLength(6);
    expect(matcher.match(aptGetInstallThenRemoveAptLists)).toHaveLength(6);
    expect(matcher.match(aptGetUpdatePrecedesInstall)).toHaveLength(5);
    expect(matcher.match(aptGetInstallUseY)).toHaveLength(2);
    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(21);
  });
  test("000938d73f02c45eeac641c817cf7146dac43cdf", () => {
    const dockerfile = praseFile("000938d73f02c45eeac641c817cf7146dac43cdf");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseHttpsUrl)).toHaveLength(2);
    expect(matcher.match(curlUseFlagF)).toHaveLength(2);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(1);
    expect(matcher.match(aptGetInstallUseNoRec)).toHaveLength(5);
    expect(matcher.match(aptGetInstallThenRemoveAptLists)).toHaveLength(5);
    expect(matcher.match(aptGetUpdatePrecedesInstall)).toHaveLength(2);
    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(17);
  });
  test("845801df7b9c5ed80c8a27750129562f0439bfc4", () => {
    const dockerfile = praseFile("845801df7b9c5ed80c8a27750129562f0439bfc4");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(npmCacheCleanAfterInstall)).toHaveLength(2);
    expect(matcher.match(aptGetInstallUseNoRec)).toHaveLength(6);
    expect(matcher.match(aptGetInstallThenRemoveAptLists)).toHaveLength(6);
    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(14);
  });
  test("1fd3f7693e00a8689ba6fa2d34a6d1803166bae6", () => {
    const dockerfile = praseFile("1fd3f7693e00a8689ba6fa2d34a6d1803166bae6");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseHttpsUrl)).toHaveLength(2);
    expect(matcher.match(curlUseFlagF)).toHaveLength(2);
    expect(matcher.match(aptGetUpdatePrecedesInstall)).toHaveLength(2);
    expect(matcher.match(aptGetInstallUseNoRec)).toHaveLength(5);
    expect(matcher.match(aptGetInstallThenRemoveAptLists)).toHaveLength(5);
    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(17);
  });
  test("46ae47ac608f1b0bb5c1e66d0fd307542f1cd86c", () => {
    const dockerfile = praseFile("46ae47ac608f1b0bb5c1e66d0fd307542f1cd86c");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(aptGetUpdatePrecedesInstall)).toHaveLength(1);
    expect(matcher.match(aptGetInstallUseNoRec)).toHaveLength(1);
    expect(matcher.match(aptGetInstallThenRemoveAptLists)).toHaveLength(1);
    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(3);
  });
  test("11150fc5dca650964185584bd9ec1bbd92669143", () => {
    const dockerfile = praseFile("11150fc5dca650964185584bd9ec1bbd92669143");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(apkAddUseNoCache)).toHaveLength(1);
    expect(matcher.match(configureShouldUseBuildFlag)).toHaveLength(12);
    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(13);
  });
  test("b83aa4efc825ca9f0916d68b69361972e694a9fb", () => {
    const dockerfile = praseFile("b83aa4efc825ca9f0916d68b69361972e694a9fb");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(13);
    expect(matcher.match(pipUseNoCacheDir)).toHaveLength(1);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(2);
    expect(matcher.match(aptGetUpdatePrecedesInstall)).toHaveLength(2);
    expect(matcher.match(aptGetInstallUseNoRec)).toHaveLength(3);
    expect(matcher.match(aptGetInstallThenRemoveAptLists)).toHaveLength(6);
    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(27);
  });
  test("c072531d6d374ef808eef795f6d54e48821de888", () => {
    const dockerfile = praseFile("c072531d6d374ef808eef795f6d54e48821de888");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(7);
    expect(matcher.match(wgetUseHttpsUrl)).toHaveLength(1);
    expect(matcher.match(pipUseNoCacheDir)).toHaveLength(2);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(3);
    expect(matcher.match(aptGetInstallUseNoRec)).toHaveLength(7);
    expect(matcher.match(aptGetInstallThenRemoveAptLists)).toHaveLength(8);
    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(28);
  });
  test("fa8464148f8735f7c24b1d3e41fe88f36e09f8bd", () => {
    const dockerfile = praseFile("fa8464148f8735f7c24b1d3e41fe88f36e09f8bd");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(apkAddUseNoCache)).toHaveLength(1);
    expect(matcher.match(configureShouldUseBuildFlag)).toHaveLength(12);
    expect(
      matcher.matchAll(BINNACLE_RULES).map((i) => i.rule.name)
    ).toHaveLength(13);
  });
  test("unknow-type", () => {
    const dockerfile = praseFile("unknow-type");
    expect(dockerfile).toBeInstanceOf(DockerFile);
    expect(dockerfile.toString(true)).toBe(dockerfile.position.file?.content);
    //matcher.matchAll(BINNACLE_RULES).forEach((v) => v.repair());
  });
});

// powsershell is not supported
// describe("Testing docker parser with powershell", () => {
//   test("0b90753a7f0376a82b40f6c9e9da67cd38d76f1e",  () => {
//     const dockerfile = praseFile("0b90753a7f0376a82b40f6c9e9da67cd38d76f1e");
//     expect(dockerfile).toBeInstanceOf(DockerFile);
//   });
//   test("0cee79e6174a0509d5a6f036676d5b86ec0be087",  () => {
//     const dockerfile = praseFile("0cee79e6174a0509d5a6f036676d5b86ec0be087");
//     expect(dockerfile).toBeInstanceOf(DockerFile);
//   });
//   test("0ee0b0080979a7fae89525da9115076a184a0393",  () => {
//     const dockerfile = praseFile("0ee0b0080979a7fae89525da9115076a184a0393");
//     expect(dockerfile).toBeInstanceOf(DockerFile);
//   });
//   test("0f119a2e24c747cd31f8d6da19c93fbcd5ace6bf",  () => {
//     const dockerfile = praseFile("0f119a2e24c747cd31f8d6da19c93fbcd5ace6bf");
//     expect(dockerfile).toBeInstanceOf(DockerFile);
//   });
// });
