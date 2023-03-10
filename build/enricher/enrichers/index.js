"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.python = exports.printf = exports.pip = exports.php = exports.pecl = exports.nproc = exports.npm = exports.mv = exports.mktemp = exports.mkdir = exports.make = exports.ls = exports.locale_gen = exports.ln = exports.ldconfig = exports.jq = exports.groupadd = exports.grep = exports.gpg = exports.google_chrome = exports.go = exports.git = exports.gem = exports.firefox = exports.find = exports._export = exports.exit = exports.echo = exports.dpkg = exports.dpkg_architecture = exports.dotnet = exports.docker_php_ext_install = exports.dnf = exports.curl = exports.cp = exports.configure = exports.conda = exports.cmake = exports.chown = exports.chmod = exports.cd = exports.cat = exports.bundle = exports.bash = exports.apt = exports.apt_key = exports.apt_get = exports.apt_add_repository = exports.apk = exports.adduser = void 0;
exports.enrichers = exports.yum = exports.yarn = exports.xargs = exports.which = exports.wget = exports.useradd = exports.unzip = exports._true = exports.touch = exports.tee = exports.tar = exports.sudo = exports.sort = exports.sha512sum = exports.sha256sum = exports.sh = exports.set = exports.sed = exports.rpm = exports.rm = void 0;
var adduser_1 = __importDefault(require("./adduser"));
var adduser_2 = require("./adduser");
Object.defineProperty(exports, "adduser", { enumerable: true, get: function () { return __importDefault(adduser_2).default; } });
var apk_1 = __importDefault(require("./apk"));
var apk_2 = require("./apk");
Object.defineProperty(exports, "apk", { enumerable: true, get: function () { return __importDefault(apk_2).default; } });
var apt_add_repository_1 = __importDefault(require("./apt-add-repository"));
var apt_add_repository_2 = require("./apt-add-repository");
Object.defineProperty(exports, "apt_add_repository", { enumerable: true, get: function () { return __importDefault(apt_add_repository_2).default; } });
var apt_get_1 = __importDefault(require("./apt-get"));
var apt_get_2 = require("./apt-get");
Object.defineProperty(exports, "apt_get", { enumerable: true, get: function () { return __importDefault(apt_get_2).default; } });
var apt_key_1 = __importDefault(require("./apt-key"));
var apt_key_2 = require("./apt-key");
Object.defineProperty(exports, "apt_key", { enumerable: true, get: function () { return __importDefault(apt_key_2).default; } });
var apt_1 = __importDefault(require("./apt"));
var apt_2 = require("./apt");
Object.defineProperty(exports, "apt", { enumerable: true, get: function () { return __importDefault(apt_2).default; } });
var bash_1 = __importDefault(require("./bash"));
var bash_2 = require("./bash");
Object.defineProperty(exports, "bash", { enumerable: true, get: function () { return __importDefault(bash_2).default; } });
var bundle_1 = __importDefault(require("./bundle"));
var bundle_2 = require("./bundle");
Object.defineProperty(exports, "bundle", { enumerable: true, get: function () { return __importDefault(bundle_2).default; } });
var cat_1 = __importDefault(require("./cat"));
var cat_2 = require("./cat");
Object.defineProperty(exports, "cat", { enumerable: true, get: function () { return __importDefault(cat_2).default; } });
var cd_1 = __importDefault(require("./cd"));
var cd_2 = require("./cd");
Object.defineProperty(exports, "cd", { enumerable: true, get: function () { return __importDefault(cd_2).default; } });
var chmod_1 = __importDefault(require("./chmod"));
var chmod_2 = require("./chmod");
Object.defineProperty(exports, "chmod", { enumerable: true, get: function () { return __importDefault(chmod_2).default; } });
var chown_1 = __importDefault(require("./chown"));
var chown_2 = require("./chown");
Object.defineProperty(exports, "chown", { enumerable: true, get: function () { return __importDefault(chown_2).default; } });
var cmake_1 = __importDefault(require("./cmake"));
var cmake_2 = require("./cmake");
Object.defineProperty(exports, "cmake", { enumerable: true, get: function () { return __importDefault(cmake_2).default; } });
var conda_1 = __importDefault(require("./conda"));
var conda_2 = require("./conda");
Object.defineProperty(exports, "conda", { enumerable: true, get: function () { return __importDefault(conda_2).default; } });
var configure_1 = __importDefault(require("./configure"));
var configure_2 = require("./configure");
Object.defineProperty(exports, "configure", { enumerable: true, get: function () { return __importDefault(configure_2).default; } });
var cp_1 = __importDefault(require("./cp"));
var cp_2 = require("./cp");
Object.defineProperty(exports, "cp", { enumerable: true, get: function () { return __importDefault(cp_2).default; } });
var curl_1 = __importDefault(require("./curl"));
var curl_2 = require("./curl");
Object.defineProperty(exports, "curl", { enumerable: true, get: function () { return __importDefault(curl_2).default; } });
var dnf_1 = __importDefault(require("./dnf"));
var dnf_2 = require("./dnf");
Object.defineProperty(exports, "dnf", { enumerable: true, get: function () { return __importDefault(dnf_2).default; } });
var docker_php_ext_install_1 = __importDefault(require("./docker-php-ext-install"));
var docker_php_ext_install_2 = require("./docker-php-ext-install");
Object.defineProperty(exports, "docker_php_ext_install", { enumerable: true, get: function () { return __importDefault(docker_php_ext_install_2).default; } });
var dotnet_1 = __importDefault(require("./dotnet"));
var dotnet_2 = require("./dotnet");
Object.defineProperty(exports, "dotnet", { enumerable: true, get: function () { return __importDefault(dotnet_2).default; } });
var dpkg_architecture_1 = __importDefault(require("./dpkg-architecture"));
var dpkg_architecture_2 = require("./dpkg-architecture");
Object.defineProperty(exports, "dpkg_architecture", { enumerable: true, get: function () { return __importDefault(dpkg_architecture_2).default; } });
var dpkg_1 = __importDefault(require("./dpkg"));
var dpkg_2 = require("./dpkg");
Object.defineProperty(exports, "dpkg", { enumerable: true, get: function () { return __importDefault(dpkg_2).default; } });
var echo_1 = __importDefault(require("./echo"));
var echo_2 = require("./echo");
Object.defineProperty(exports, "echo", { enumerable: true, get: function () { return __importDefault(echo_2).default; } });
var exit_1 = __importDefault(require("./exit"));
var exit_2 = require("./exit");
Object.defineProperty(exports, "exit", { enumerable: true, get: function () { return __importDefault(exit_2).default; } });
var export_1 = __importDefault(require("./export"));
var export_2 = require("./export");
Object.defineProperty(exports, "_export", { enumerable: true, get: function () { return __importDefault(export_2).default; } });
var find_1 = __importDefault(require("./find"));
var find_2 = require("./find");
Object.defineProperty(exports, "find", { enumerable: true, get: function () { return __importDefault(find_2).default; } });
var firefox_1 = __importDefault(require("./firefox"));
var firefox_2 = require("./firefox");
Object.defineProperty(exports, "firefox", { enumerable: true, get: function () { return __importDefault(firefox_2).default; } });
var gem_1 = __importDefault(require("./gem"));
var gem_2 = require("./gem");
Object.defineProperty(exports, "gem", { enumerable: true, get: function () { return __importDefault(gem_2).default; } });
var git_1 = __importDefault(require("./git"));
var git_2 = require("./git");
Object.defineProperty(exports, "git", { enumerable: true, get: function () { return __importDefault(git_2).default; } });
var go_1 = __importDefault(require("./go"));
var go_2 = require("./go");
Object.defineProperty(exports, "go", { enumerable: true, get: function () { return __importDefault(go_2).default; } });
var google_chrome_1 = __importDefault(require("./google-chrome"));
var google_chrome_2 = require("./google-chrome");
Object.defineProperty(exports, "google_chrome", { enumerable: true, get: function () { return __importDefault(google_chrome_2).default; } });
var gpg_1 = __importDefault(require("./gpg"));
var gpg_2 = require("./gpg");
Object.defineProperty(exports, "gpg", { enumerable: true, get: function () { return __importDefault(gpg_2).default; } });
var grep_1 = __importDefault(require("./grep"));
var grep_2 = require("./grep");
Object.defineProperty(exports, "grep", { enumerable: true, get: function () { return __importDefault(grep_2).default; } });
var groupadd_1 = __importDefault(require("./groupadd"));
var groupadd_2 = require("./groupadd");
Object.defineProperty(exports, "groupadd", { enumerable: true, get: function () { return __importDefault(groupadd_2).default; } });
var jq_1 = __importDefault(require("./jq"));
var jq_2 = require("./jq");
Object.defineProperty(exports, "jq", { enumerable: true, get: function () { return __importDefault(jq_2).default; } });
var ldconfig_1 = __importDefault(require("./ldconfig"));
var ldconfig_2 = require("./ldconfig");
Object.defineProperty(exports, "ldconfig", { enumerable: true, get: function () { return __importDefault(ldconfig_2).default; } });
var ln_1 = __importDefault(require("./ln"));
var ln_2 = require("./ln");
Object.defineProperty(exports, "ln", { enumerable: true, get: function () { return __importDefault(ln_2).default; } });
var locale_gen_1 = __importDefault(require("./locale-gen"));
var locale_gen_2 = require("./locale-gen");
Object.defineProperty(exports, "locale_gen", { enumerable: true, get: function () { return __importDefault(locale_gen_2).default; } });
var ls_1 = __importDefault(require("./ls"));
var ls_2 = require("./ls");
Object.defineProperty(exports, "ls", { enumerable: true, get: function () { return __importDefault(ls_2).default; } });
var make_1 = __importDefault(require("./make"));
var make_2 = require("./make");
Object.defineProperty(exports, "make", { enumerable: true, get: function () { return __importDefault(make_2).default; } });
var mkdir_1 = __importDefault(require("./mkdir"));
var mkdir_2 = require("./mkdir");
Object.defineProperty(exports, "mkdir", { enumerable: true, get: function () { return __importDefault(mkdir_2).default; } });
var mktemp_1 = __importDefault(require("./mktemp"));
var mktemp_2 = require("./mktemp");
Object.defineProperty(exports, "mktemp", { enumerable: true, get: function () { return __importDefault(mktemp_2).default; } });
var mv_1 = __importDefault(require("./mv"));
var mv_2 = require("./mv");
Object.defineProperty(exports, "mv", { enumerable: true, get: function () { return __importDefault(mv_2).default; } });
var npm_1 = __importDefault(require("./npm"));
var npm_2 = require("./npm");
Object.defineProperty(exports, "npm", { enumerable: true, get: function () { return __importDefault(npm_2).default; } });
var nproc_1 = __importDefault(require("./nproc"));
var nproc_2 = require("./nproc");
Object.defineProperty(exports, "nproc", { enumerable: true, get: function () { return __importDefault(nproc_2).default; } });
var pecl_1 = __importDefault(require("./pecl"));
var pecl_2 = require("./pecl");
Object.defineProperty(exports, "pecl", { enumerable: true, get: function () { return __importDefault(pecl_2).default; } });
var php_1 = __importDefault(require("./php"));
var php_2 = require("./php");
Object.defineProperty(exports, "php", { enumerable: true, get: function () { return __importDefault(php_2).default; } });
var pip_1 = __importDefault(require("./pip"));
var pip_2 = require("./pip");
Object.defineProperty(exports, "pip", { enumerable: true, get: function () { return __importDefault(pip_2).default; } });
var printf_1 = __importDefault(require("./printf"));
var printf_2 = require("./printf");
Object.defineProperty(exports, "printf", { enumerable: true, get: function () { return __importDefault(printf_2).default; } });
var python_1 = __importDefault(require("./python"));
var python_2 = require("./python");
Object.defineProperty(exports, "python", { enumerable: true, get: function () { return __importDefault(python_2).default; } });
var rm_1 = __importDefault(require("./rm"));
var rm_2 = require("./rm");
Object.defineProperty(exports, "rm", { enumerable: true, get: function () { return __importDefault(rm_2).default; } });
var rpm_1 = __importDefault(require("./rpm"));
var rpm_2 = require("./rpm");
Object.defineProperty(exports, "rpm", { enumerable: true, get: function () { return __importDefault(rpm_2).default; } });
var sed_1 = __importDefault(require("./sed"));
var sed_2 = require("./sed");
Object.defineProperty(exports, "sed", { enumerable: true, get: function () { return __importDefault(sed_2).default; } });
var set_1 = __importDefault(require("./set"));
var set_2 = require("./set");
Object.defineProperty(exports, "set", { enumerable: true, get: function () { return __importDefault(set_2).default; } });
var sh_1 = __importDefault(require("./sh"));
var sh_2 = require("./sh");
Object.defineProperty(exports, "sh", { enumerable: true, get: function () { return __importDefault(sh_2).default; } });
var sha256sum_1 = __importDefault(require("./sha256sum"));
var sha256sum_2 = require("./sha256sum");
Object.defineProperty(exports, "sha256sum", { enumerable: true, get: function () { return __importDefault(sha256sum_2).default; } });
var sha512sum_1 = __importDefault(require("./sha512sum"));
var sha512sum_2 = require("./sha512sum");
Object.defineProperty(exports, "sha512sum", { enumerable: true, get: function () { return __importDefault(sha512sum_2).default; } });
var sort_1 = __importDefault(require("./sort"));
var sort_2 = require("./sort");
Object.defineProperty(exports, "sort", { enumerable: true, get: function () { return __importDefault(sort_2).default; } });
var sudo_1 = __importDefault(require("./sudo"));
var sudo_2 = require("./sudo");
Object.defineProperty(exports, "sudo", { enumerable: true, get: function () { return __importDefault(sudo_2).default; } });
var tar_1 = __importDefault(require("./tar"));
var tar_2 = require("./tar");
Object.defineProperty(exports, "tar", { enumerable: true, get: function () { return __importDefault(tar_2).default; } });
var tee_1 = __importDefault(require("./tee"));
var tee_2 = require("./tee");
Object.defineProperty(exports, "tee", { enumerable: true, get: function () { return __importDefault(tee_2).default; } });
var touch_1 = __importDefault(require("./touch"));
var touch_2 = require("./touch");
Object.defineProperty(exports, "touch", { enumerable: true, get: function () { return __importDefault(touch_2).default; } });
var true_1 = __importDefault(require("./true"));
var true_2 = require("./true");
Object.defineProperty(exports, "_true", { enumerable: true, get: function () { return __importDefault(true_2).default; } });
var unzip_1 = __importDefault(require("./unzip"));
var unzip_2 = require("./unzip");
Object.defineProperty(exports, "unzip", { enumerable: true, get: function () { return __importDefault(unzip_2).default; } });
var useradd_1 = __importDefault(require("./useradd"));
var useradd_2 = require("./useradd");
Object.defineProperty(exports, "useradd", { enumerable: true, get: function () { return __importDefault(useradd_2).default; } });
var wget_1 = __importDefault(require("./wget"));
var wget_2 = require("./wget");
Object.defineProperty(exports, "wget", { enumerable: true, get: function () { return __importDefault(wget_2).default; } });
var which_1 = __importDefault(require("./which"));
var which_2 = require("./which");
Object.defineProperty(exports, "which", { enumerable: true, get: function () { return __importDefault(which_2).default; } });
var xargs_1 = __importDefault(require("./xargs"));
var xargs_2 = require("./xargs");
Object.defineProperty(exports, "xargs", { enumerable: true, get: function () { return __importDefault(xargs_2).default; } });
var yarn_1 = __importDefault(require("./yarn"));
var yarn_2 = require("./yarn");
Object.defineProperty(exports, "yarn", { enumerable: true, get: function () { return __importDefault(yarn_2).default; } });
var yum_1 = __importDefault(require("./yum"));
var yum_2 = require("./yum");
Object.defineProperty(exports, "yum", { enumerable: true, get: function () { return __importDefault(yum_2).default; } });
exports.enrichers = [
    adduser_1.default, apk_1.default, apt_add_repository_1.default, apt_get_1.default, apt_key_1.default, apt_1.default, bash_1.default, bundle_1.default, cat_1.default, cd_1.default, chmod_1.default, chown_1.default, cmake_1.default, conda_1.default, configure_1.default, cp_1.default, curl_1.default, dnf_1.default, docker_php_ext_install_1.default, dotnet_1.default, dpkg_architecture_1.default, dpkg_1.default, echo_1.default, exit_1.default, export_1.default, find_1.default, firefox_1.default, gem_1.default, git_1.default, go_1.default, google_chrome_1.default, gpg_1.default, grep_1.default, groupadd_1.default, jq_1.default, ldconfig_1.default, ln_1.default, locale_gen_1.default, ls_1.default, make_1.default, mkdir_1.default, mktemp_1.default, mv_1.default, npm_1.default, nproc_1.default, pecl_1.default, php_1.default, pip_1.default, printf_1.default, python_1.default, rm_1.default, rpm_1.default, sed_1.default, set_1.default, sh_1.default, sha256sum_1.default, sha512sum_1.default, sort_1.default, sudo_1.default, tar_1.default, tee_1.default, touch_1.default, true_1.default, unzip_1.default, useradd_1.default, wget_1.default, which_1.default, xargs_1.default, yarn_1.default, yum_1.default,
];
//# sourceMappingURL=index.js.map