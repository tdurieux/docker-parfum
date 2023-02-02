import { parseDocker } from "@tdurieux/dinghy";
import { Matcher } from "../../lib/rule-matcher";
import DL3004 from "../../lib/rules/hadolint/DL3004";

describe("DL3004", () => {
  test("without sudo", async () => {
    const root = await parseDocker("RUN apt-get update");
    const matcher = new Matcher(root);

    const violations = matcher.match(DL3004);
    expect(violations).toHaveLength(0);
  });
  test("with sudo", async () => {
    const root = await parseDocker("RUN sudo apt-get update");
    const matcher = new Matcher(root);

    const violations = matcher.match(DL3004);
    expect(violations).toHaveLength(1);
    await violations[0].repair();
    expect(root.toString()).toBe("RUN apt-get update");
  });
  test("with sudo 2", async () => {
    const root = await parseDocker(
      "RUN sudo dpkg -i /tmp/firefox.deb || sudo apt-get -f install"
    );
    const matcher = new Matcher(root);

    const violations = matcher.match(DL3004);
    expect(violations).toHaveLength(2);
    await violations[1].repair();
    expect(root.toString()).toBe(
      "RUN sudo dpkg -i /tmp/firefox.deb || apt-get -f install"
    );
  });
});
