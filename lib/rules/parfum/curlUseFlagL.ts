import { BashCommandArgs, BashLiteral, BashWord, Q } from "@tdurieux/dinghy";
import { Rule } from "..";

/**
 * The \`-L\` option in \`curl\` stands for "follow redirects." When this option is used, curl will follow any redirects that it encounters when making an HTTP request. This can be useful in a Dockerfile if you want to download a file from a URL that may redirect to another URL.
 * @example
 * // bad
 * RUN curl -sS https://example.com/file.tar.gz | tar -xz -C /usr/src/myapp
 * // good
 * RUN curl -sS -L https://example.com/file.tar.gz | tar -xz -C /usr/src/myapp
 */
export default {
  scope: "INTRA-DIRECTIVE",
  name: "curlUseFlagL",
  description: `The \`-L\` option in \`curl\` stands for "follow redirects." When this option is used, curl will follow any redirects that it encounters when making an HTTP request. This can be useful in a Dockerfile if you want to download a file from a URL that may redirect to another URL.`,
  query: Q("SC-CURL"),
  consequent: {
    inNode: Q("SC-CURL-F-LOCATION"),
  },
  source: "Implicit",
  repair: async (violation) => {
    const node = violation;
    node.addChild(
      new BashCommandArgs()
        .setPosition(node.children[0].position)
        .addChild(new BashWord().addChild(new BashLiteral("-L")))
    );
  },
} as Rule;
