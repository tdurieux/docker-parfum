import { nodeType } from "@tdurieux/dinghy";
import { Matcher } from "../lib/rule-matcher";
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
  ruleAptGetInstallThenRemoveAptLists,
  ruleAptGetInstallUseNoRec,
  ruleAptGetInstallUseY,
  ruleAptGetUpdatePrecedesInstall,
  sha256sumEchoOneSpaces,
  tarSomethingRmTheSomething,
  wgetUseHttpsUrl,
  yumInstallRmVarCacheYum,
} from "../lib/rules";
import { praseFile } from "./test-utils";

describe("Testing the detecting of rule on real dockerfiles", () => {
  test("1c11182d763188889c00d8f44a91d0df09e0147b", async () => {
    const dockerfile = await praseFile(
      "1c11182d763188889c00d8f44a91d0df09e0147b"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);

    const matcher = new Matcher(dockerfile);

    expect(matcher.match(ruleAptGetInstallThenRemoveAptLists)).toHaveLength(0);

    expect(matcher.match(ruleAptGetUpdatePrecedesInstall)).toHaveLength(0);
  });
  test("1d8c362e7043d7b78836f06256d0ae9b82561af8", async () => {
    const dockerfile = await praseFile(
      "1d8c362e7043d7b78836f06256d0ae9b82561af8"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);

    const matcher = new Matcher(dockerfile);

    expect(matcher.match(ruleAptGetInstallThenRemoveAptLists)).toHaveLength(0);

    expect(matcher.match(ruleAptGetUpdatePrecedesInstall)).toHaveLength(0);

    expect(matcher.match(ruleAptGetInstallUseNoRec)).toHaveLength(1);
    matcher.match(ruleAptGetInstallUseNoRec)[0].repair();
  });
  test("0aa1cd6a00cfe247f17e680d5e2c394b5f0d3edc", async () => {
    const dockerfile = await praseFile(
      "0aa1cd6a00cfe247f17e680d5e2c394b5f0d3edc"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);

    const violations = new Matcher(dockerfile).matchAll();
    expect(violations).toHaveLength(0);
  });
  test("13ee04f6789083fb2df8c931cc0aaae45746261b", async () => {
    const dockerfile = await praseFile(
      "13ee04f6789083fb2df8c931cc0aaae45746261b"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(npmCacheCleanAfterInstall)).toHaveLength(4);
    expect(matcher.match(rmRecursiveAfterMktempD)).toHaveLength(1);
    expect(matcher.match(pipUseNoCacheDir)).toHaveLength(1);
    expect(matcher.match(gpgUseBatchFlag)).toHaveLength(1);
    expect(matcher.match(ruleAptGetInstallUseNoRec)).toHaveLength(1);
    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(8);
  });
  test("0f2e80905340ffc054e2d445a53c45c11069d30a", async () => {
    const dockerfile = await praseFile(
      "0f2e80905340ffc054e2d445a53c45c11069d30a"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(rmRecursiveAfterMktempD)).toHaveLength(2);
    expect(matcher.match(ruleAptGetInstallThenRemoveAptLists)).toHaveLength(1);
    expect(matcher.match(pipUseNoCacheDir)).toHaveLength(1);
    expect(matcher.match(curlUseHttpsUrl)).toHaveLength(1);
  });
  test("0ce06af56644fb21ee96178f60c2d57eb73c8226", async () => {
    const dockerfile = await praseFile(
      "0ce06af56644fb21ee96178f60c2d57eb73c8226"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(wgetUseHttpsUrl)).toHaveLength(1);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(1);
    expect(matcher.match(ruleAptGetInstallUseNoRec)).toHaveLength(1);
    expect(matcher.match(ruleAptGetInstallThenRemoveAptLists)).toHaveLength(1);
    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(4);
  });
  test("0cfa5aeb451ed647696bf5b9f9cb5648fde8cbd8", async () => {
    const dockerfile = await praseFile(
      "0cfa5aeb451ed647696bf5b9f9cb5648fde8cbd8"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(wgetUseHttpsUrl)).toHaveLength(4);
    expect(matcher.match(sha256sumEchoOneSpaces)).toHaveLength(0);
    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(4);
  });
  test("0bab414ad6285c04798e5f4480c10bf65da0e982", async () => {
    const dockerfile = await praseFile(
      "0bab414ad6285c04798e5f4480c10bf65da0e982"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(wgetUseHttpsUrl)).toHaveLength(2);
    expect(matcher.match(configureShouldUseBuildFlag)).toHaveLength(3);
    expect(matcher.match(yumInstallRmVarCacheYum)).toHaveLength(1);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(3);
    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(9);
  });
  test("087ced569a2e70e178c18bcf18426fa8fbc4f098", async () => {
    const dockerfile = await praseFile(
      "087ced569a2e70e178c18bcf18426fa8fbc4f098"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseHttpsUrl)).toHaveLength(2);
  });
  test("0b503585144e9b80d8d54fc435b4a2c933495a67", async () => {
    const dockerfile = await praseFile(
      "0b503585144e9b80d8d54fc435b4a2c933495a67"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(2);
  });
  test("0b29126f397552a2b6f58cf8dae1e37b8a12fb3b", async () => {
    const dockerfile = await praseFile(
      "0b29126f397552a2b6f58cf8dae1e37b8a12fb3b"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(2);
  });
  test("0aef9fd98e80212b5fd7ea8a3fe65aa7f4ec7979", async () => {
    const dockerfile = await praseFile(
      "0aef9fd98e80212b5fd7ea8a3fe65aa7f4ec7979"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(2);
  });
  test("0b3ce67c849db8c2ad27831b735a65b1a4591623", async () => {
    const dockerfile = await praseFile(
      "0b3ce67c849db8c2ad27831b735a65b1a4591623"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(7);
  });
  test("0b436d6fe9c18f20b76bf5bf396da14eb2f67629", async () => {
    const dockerfile = await praseFile(
      "0b436d6fe9c18f20b76bf5bf396da14eb2f67629"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(3);
  });
  test("0b93847153592764c2a707bad4957683b56b4758", async () => {
    const dockerfile = await praseFile(
      "0b93847153592764c2a707bad4957683b56b4758"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(3);
    expect(matcher.match(curlUseHttpsUrl)).toHaveLength(1);
    expect(matcher.match(yumInstallRmVarCacheYum)).toHaveLength(5);
  });
  test("082e02161baf2f48ed1d4292a19a3069ba7aac3c", async () => {
    const dockerfile = await praseFile(
      "082e02161baf2f48ed1d4292a19a3069ba7aac3c"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(gpgVerifyAscRmAsc)).toHaveLength(1);
    expect(matcher.match(curlUseFlagF)).toHaveLength(1);
    expect(matcher.match(gpgUseHaPools)).toHaveLength(2);
  });
  test("0ecad13fe63526d9f1e8b05d7de1af90f002ed2f", async () => {
    const dockerfile = await praseFile(
      "0ecad13fe63526d9f1e8b05d7de1af90f002ed2f"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);

    const matcher = new Matcher(dockerfile);
    expect(matcher.match(pipUseNoCacheDir)).toHaveLength(9);
    expect(matcher.match(ruleAptGetInstallUseNoRec)).toHaveLength(10);
    expect(matcher.match(ruleAptGetInstallThenRemoveAptLists)).toHaveLength(10);
  });
  test("0b15d39cebd7afc18eded9d4f41d932b00770eed", async () => {
    const dockerfile = await praseFile(
      "0b15d39cebd7afc18eded9d4f41d932b00770eed"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(0);

    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(0);
  });
  test("0b687ec4b2f490051a53d114bf64242580c32f28", async () => {
    const dockerfile = await praseFile(
      "0b687ec4b2f490051a53d114bf64242580c32f28"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(0);
    expect(matcher.match(apkAddUseNoCache)).toHaveLength(1);

    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(1);
  });
  test("0b1975d451426f9858f59b812411970f4e2ac49c", async () => {
    const dockerfile = await praseFile(
      "0b1975d451426f9858f59b812411970f4e2ac49c"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(0);

    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(0);
  });
  test("0c1e517ccfa17cd28a2a1e54b6a017b6d7b94f0d", async () => {
    const dockerfile = await praseFile(
      "0c1e517ccfa17cd28a2a1e54b6a017b6d7b94f0d"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(0);

    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(0);
  });
  test("0c2ab277bc1488c0fad85b02a5e5cd4ff967e9d9", async () => {
    const dockerfile = await praseFile(
      "0c2ab277bc1488c0fad85b02a5e5cd4ff967e9d9"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(0);

    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(0);
  });
  test("1ae6fb60aa44225965af5580a60b7b11e92b0ae3", async () => {
    const dockerfile = await praseFile(
      "1ae6fb60aa44225965af5580a60b7b11e92b0ae3"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(0);
    // TODO should not be the case, tmp folder is removed but the name is assigned to a variable
    expect(matcher.match(rmRecursiveAfterMktempD)).toHaveLength(2);
    expect(matcher.match(ruleAptGetInstallUseNoRec)).toHaveLength(1);

    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(3);
  });
  test("1d1bb50eab9be0de526f64d25ee65a173d4b7bac", async () => {
    const dockerfile = await praseFile(
      "1d1bb50eab9be0de526f64d25ee65a173d4b7bac"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(0);

    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(0);
  });
  test("fc3c55ae7e45976afdced595ba7947a19eba20f6", async () => {
    const dockerfile = await praseFile(
      "fc3c55ae7e45976afdced595ba7947a19eba20f6"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(16);
    expect(matcher.match(configureShouldUseBuildFlag)).toHaveLength(1);

    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(17);
  });
  test("f7e951de0561fc59784dc65c4759d1440d299548", async () => {
    const dockerfile = await praseFile(
      "f7e951de0561fc59784dc65c4759d1440d299548"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(wgetUseHttpsUrl)).toHaveLength(3);
    expect(matcher.match(configureShouldUseBuildFlag)).toHaveLength(3);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(3);
    expect(matcher.match(gpgUseBatchFlag)).toHaveLength(2);
    expect(matcher.match(apkAddUseNoCache)).toHaveLength(2);

    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(13);
  });
  test("edb81abfd45e16bcd51d6216b1b4ffcfeeb396fe", async () => {
    const dockerfile = await praseFile(
      "edb81abfd45e16bcd51d6216b1b4ffcfeeb396fe"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(16);
    expect(matcher.match(configureShouldUseBuildFlag)).toHaveLength(1);

    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(17);
  });
  test("d68979a6b11bfd4c96d311a3ec96f6f856eb78fd", async () => {
    const dockerfile = await praseFile(
      "d68979a6b11bfd4c96d311a3ec96f6f856eb78fd"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(16);
    expect(matcher.match(configureShouldUseBuildFlag)).toHaveLength(1);

    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(17);
  });
  test("cc8c73f5e92b615f02c288c113d9fdbe258f1234", async () => {
    const dockerfile = await praseFile(
      "cc8c73f5e92b615f02c288c113d9fdbe258f1234"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(curlUseFlagF)).toHaveLength(6);
    expect(matcher.match(curlUseHttpsUrl)).toHaveLength(3);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(6);
    expect(matcher.match(yumInstallRmVarCacheYum)).toHaveLength(1);
    expect(matcher.match(configureShouldUseBuildFlag)).toHaveLength(3);
    expect(matcher.match(wgetUseHttpsUrl)).toHaveLength(3);

    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(22);
  });
  test("9cae314c3410c74d2267c7c71eeb17a83b13f07f", async () => {
    const dockerfile = await praseFile(
      "9cae314c3410c74d2267c7c71eeb17a83b13f07f"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(11);
  });
  test("5da2d6445d6786a7822a10a2932465a7e6fb2f66", async () => {
    const dockerfile = await praseFile(
      "5da2d6445d6786a7822a10a2932465a7e6fb2f66"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(20);
    expect(matcher.match(npmCacheCleanAfterInstall)).toHaveLength(1);
    expect(matcher.match(wgetUseHttpsUrl)).toHaveLength(1);
    expect(matcher.match(ruleAptGetInstallUseNoRec)).toHaveLength(1);
    expect(matcher.match(ruleAptGetInstallThenRemoveAptLists)).toHaveLength(1);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(2);
    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(26);
  });
  test("6f5babadbdd0a15f4867eba1d2aa5a57983f59ee", async () => {
    const dockerfile = await praseFile(
      "6f5babadbdd0a15f4867eba1d2aa5a57983f59ee"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(6);
    expect(matcher.match(curlUseHttpsUrl)).toHaveLength(1);
    expect(matcher.match(yumInstallRmVarCacheYum)).toHaveLength(3);
    expect(matcher.match(gemUpdateSystemRmRootGem)).toHaveLength(1);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(3);
    expect(matcher.match(gemUpdateNoDocument)).toHaveLength(1);
    expect(matcher.match(configureShouldUseBuildFlag)).toHaveLength(1);
    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(16);
  });
  test("75e40e8cd29890dd65115699529c2e88f7842e7b", async () => {
    const dockerfile = await praseFile(
      "75e40e8cd29890dd65115699529c2e88f7842e7b"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(1);
    expect(matcher.match(sha256sumEchoOneSpaces)).toHaveLength(1);
    expect(matcher.match(gpgUseBatchFlag)).toHaveLength(3);
    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(5);
  });
  test("a39b5f620df6ae20a6841cf748eb9023c2ea72b6", async () => {
    const dockerfile = await praseFile(
      "a39b5f620df6ae20a6841cf748eb9023c2ea72b6"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(3);
    expect(matcher.match(gpgVerifyAscRmAsc)).toHaveLength(2);
    expect(matcher.match(gpgUseBatchFlag)).toHaveLength(4);
    expect(matcher.match(ruleAptGetInstallUseNoRec)).toHaveLength(3);
    expect(matcher.match(ruleAptGetInstallThenRemoveAptLists)).toHaveLength(3);
    expect(matcher.match(pipUseNoCacheDir)).toHaveLength(4);
    expect(matcher.match(curlUseFlagF)).toHaveLength(2);
    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(21);
  });
  test("01e787466b7c2248a7465f413e587932d4b5bc06", async () => {
    const dockerfile = await praseFile(
      "01e787466b7c2248a7465f413e587932d4b5bc06"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(ruleAptGetInstallThenRemoveAptLists)).toHaveLength(5);
    expect(matcher.match(ruleAptGetInstallUseY)).toHaveLength(3);
    expect(matcher.match(ruleAptGetInstallUseNoRec)).toHaveLength(3);
    expect(matcher.match(ruleAptGetUpdatePrecedesInstall)).toHaveLength(2);
    expect(matcher.match(pipUseNoCacheDir)).toHaveLength(7);
    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(20);
  });
  test("8650876daf234124a6b7aec4c75d9ccf92ebe626", async () => {
    const dockerfile = await praseFile(
      "8650876daf234124a6b7aec4c75d9ccf92ebe626"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(19);
  });
  test("7cb0093bfdd6688528619ff0af54cdf0f95243b3", async () => {
    const dockerfile = await praseFile(
      "7cb0093bfdd6688528619ff0af54cdf0f95243b3"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(16);
  });
  test("613403030ca5b851255753a0c92254f985b561e4", async () => {
    const dockerfile = await praseFile(
      "613403030ca5b851255753a0c92254f985b561e4"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);

    expect(matcher.match(apkAddUseNoCache)).toHaveLength(3);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(10);
    expect(matcher.match(configureShouldUseBuildFlag)).toHaveLength(7);
    expect(matcher.match(npmCacheCleanAfterInstall)).toHaveLength(1);
    expect(matcher.match(curlUseFlagF)).toHaveLength(10);

    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(31);
  });
  test("0001a177c159ca47f359c34cfdce78ecf80e7eb0", async () => {
    const dockerfile = await praseFile(
      "0001a177c159ca47f359c34cfdce78ecf80e7eb0"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseHttpsUrl)).toHaveLength(2);
    expect(matcher.match(sha256sumEchoOneSpaces)).toHaveLength(1);
    expect(matcher.match(ruleAptGetInstallUseNoRec)).toHaveLength(8);
    expect(matcher.match(ruleAptGetInstallThenRemoveAptLists)).toHaveLength(8);
    expect(matcher.match(ruleAptGetUpdatePrecedesInstall)).toHaveLength(5);
    expect(matcher.match(ruleAptGetInstallUseY)).toHaveLength(2);
    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(26);
  });
  test("000938d73f02c45eeac641c817cf7146dac43cdf", async () => {
    const dockerfile = await praseFile(
      "000938d73f02c45eeac641c817cf7146dac43cdf"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseHttpsUrl)).toHaveLength(2);
    expect(matcher.match(curlUseFlagF)).toHaveLength(2);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(1);
    expect(matcher.match(ruleAptGetInstallUseNoRec)).toHaveLength(6);
    expect(matcher.match(ruleAptGetInstallThenRemoveAptLists)).toHaveLength(6);
    expect(matcher.match(ruleAptGetUpdatePrecedesInstall)).toHaveLength(2);
    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(19);
  });
  test("845801df7b9c5ed80c8a27750129562f0439bfc4", async () => {
    const dockerfile = await praseFile(
      "845801df7b9c5ed80c8a27750129562f0439bfc4"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(npmCacheCleanAfterInstall)).toHaveLength(2);
    expect(matcher.match(ruleAptGetInstallUseNoRec)).toHaveLength(6);
    expect(matcher.match(ruleAptGetInstallThenRemoveAptLists)).toHaveLength(6);
    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(14);
  });
  test("1fd3f7693e00a8689ba6fa2d34a6d1803166bae6", async () => {
    const dockerfile = await praseFile(
      "1fd3f7693e00a8689ba6fa2d34a6d1803166bae6"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseHttpsUrl)).toHaveLength(2);
    expect(matcher.match(curlUseFlagF)).toHaveLength(2);
    expect(matcher.match(ruleAptGetUpdatePrecedesInstall)).toHaveLength(2);
    expect(matcher.match(ruleAptGetInstallUseNoRec)).toHaveLength(6);
    expect(matcher.match(ruleAptGetInstallThenRemoveAptLists)).toHaveLength(6);
    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(19);
  });
  test("46ae47ac608f1b0bb5c1e66d0fd307542f1cd86c", async () => {
    const dockerfile = await praseFile(
      "46ae47ac608f1b0bb5c1e66d0fd307542f1cd86c"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(ruleAptGetUpdatePrecedesInstall)).toHaveLength(1);
    expect(matcher.match(ruleAptGetInstallUseNoRec)).toHaveLength(1);
    expect(matcher.match(ruleAptGetInstallThenRemoveAptLists)).toHaveLength(1);
    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(3);
  });
  test("11150fc5dca650964185584bd9ec1bbd92669143", async () => {
    const dockerfile = await praseFile(
      "11150fc5dca650964185584bd9ec1bbd92669143"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(apkAddUseNoCache)).toHaveLength(13);
    expect(matcher.match(configureShouldUseBuildFlag)).toHaveLength(12);
    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(25);
  });
  test("b83aa4efc825ca9f0916d68b69361972e694a9fb", async () => {
    const dockerfile = await praseFile(
      "b83aa4efc825ca9f0916d68b69361972e694a9fb"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(13);
    expect(matcher.match(pipUseNoCacheDir)).toHaveLength(1);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(2);
    expect(matcher.match(ruleAptGetUpdatePrecedesInstall)).toHaveLength(2);
    expect(matcher.match(ruleAptGetInstallUseNoRec)).toHaveLength(3);
    expect(matcher.match(ruleAptGetInstallThenRemoveAptLists)).toHaveLength(6);
    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(27);
  });
  test("c072531d6d374ef808eef795f6d54e48821de888", async () => {
    const dockerfile = await praseFile(
      "c072531d6d374ef808eef795f6d54e48821de888"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(curlUseFlagF)).toHaveLength(7);
    expect(matcher.match(wgetUseHttpsUrl)).toHaveLength(1);
    expect(matcher.match(pipUseNoCacheDir)).toHaveLength(2);
    expect(matcher.match(tarSomethingRmTheSomething)).toHaveLength(3);
    expect(matcher.match(ruleAptGetInstallUseNoRec)).toHaveLength(7);
    expect(matcher.match(ruleAptGetInstallThenRemoveAptLists)).toHaveLength(8);
    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(28);
  });
  test("fa8464148f8735f7c24b1d3e41fe88f36e09f8bd", async () => {
    const dockerfile = await praseFile(
      "fa8464148f8735f7c24b1d3e41fe88f36e09f8bd"
    );
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    const matcher = new Matcher(dockerfile);
    expect(matcher.match(apkAddUseNoCache)).toHaveLength(13);
    expect(matcher.match(configureShouldUseBuildFlag)).toHaveLength(12);
    expect(matcher.matchAll().map((i) => i.rule.name)).toHaveLength(25);
  });
  test("unknow-type", async () => {
    const dockerfile = await praseFile("unknow-type");
    expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
    expect(dockerfile.toString(true)).toBe(dockerfile.position.file.content);
    //matcher.matchAll().forEach((v) => v.repair());
  });
});

// powsershell is not supported
// describe("Testing docker parser with powershell", () => {
//   test("0b90753a7f0376a82b40f6c9e9da67cd38d76f1e", async () => {
//     const dockerfile = await praseFile("0b90753a7f0376a82b40f6c9e9da67cd38d76f1e");
//     expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
//   });
//   test("0cee79e6174a0509d5a6f036676d5b86ec0be087", async () => {
//     const dockerfile = await praseFile("0cee79e6174a0509d5a6f036676d5b86ec0be087");
//     expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
//   });
//   test("0ee0b0080979a7fae89525da9115076a184a0393", async () => {
//     const dockerfile = await praseFile("0ee0b0080979a7fae89525da9115076a184a0393");
//     expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
//   });
//   test("0f119a2e24c747cd31f8d6da19c93fbcd5ace6bf", async () => {
//     const dockerfile = await praseFile("0f119a2e24c747cd31f8d6da19c93fbcd5ace6bf");
//     expect(dockerfile).toBeInstanceOf(nodeType.DockerFile);
//   });
// });
