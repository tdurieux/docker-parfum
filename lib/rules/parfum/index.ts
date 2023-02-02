import { Rule } from "..";
import curlUseFlagL from "./curlUseFlagL";
import moreThanOneInstall from "./moreThanOneInstall";
import yarnCacheCleanAfterInstall from "./yarnCacheCleanAfterInstall";

export { default as curlUseFlagL } from "./curlUseFlagL";
export { default as moreThanOneInstall } from "./moreThanOneInstall";
export { default as yarnCacheCleanAfterInstall } from "./yarnCacheCleanAfterInstall";

export const rules: Rule[] = [
  curlUseFlagL,
  moreThanOneInstall,
  yarnCacheCleanAfterInstall,
];
