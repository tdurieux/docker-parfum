import { nodeType } from "@tdurieux/dinghy";

export const abtractionRegex = {
  "ABS-SINGLE-SPACE": new RegExp("^[^ ]* [^ ]*$"),
  "ABS-DOUBLE-SPACE": /  /,
  "ABS-NEW-LINE": /\n/,
  "ABS-TAB": /\t/,
  "ABS-URL-PROTOCOL-HTTP": /http:\/\//,
  "ABS-URL-PROTOCOL-HTTPS": /https:\/\//,
  "ABS-URL-PROTOCOL-FTP": /ftp:\/\//,
  "ABS-URL-PROTOCOL-GIT": /git:\/\//,
  "ABS-PROBABLY-URL": new RegExp(
    "((?:(?:https?|ftp):\\/\\/(?:[\\w\\-\\|=%~#\\/+*@\\.,;:\\?!']|&){0,2047}(?:[\\(\\)\\.\\w=\\/+#-]*)[^\\s()\\.<>,;\\[\\]`'\"])|(?:\\b(?:[a-z0-9](?:[-a-z0-9]{0,62}[a-z0-9])?\\.)+(?:AC|AD|AE|AERO|AF|AG|AI|AL|AM|AN|AO|AQ|AR|ARPA|AS|ASIA|AT|AU|AW|AX|AZ|BA|BB|BD|BE|BF|BG|BH|BI|BIZ|BJ|BM|BN|BO|BR|BS|BT|BV|BW|BY|BZ|CA|CAT|CC|CD|CF|CG|CH|CI|CK|CL|CM|CN|CO|COM|COOP|CR|CU|CV|CX|CY|CZ|DE|DJ|DK|DM|DO|DZ|EC|EDU|EE|EG|ER|ES|ET|EU|FI|FJ|FK|FM|FO|FR|GA|GB|GD|GE|GF|GG|GH|GI|GL|GM|GN|GOV|GP|GQ|GR|GS|GT|GU|GW|GY|HK|HM|HN|HR|HT|HU|ID|IE|IL|IM|IN|INFO|INT|IO|IQ|IR|IS|IT|JE|JM|JO|JOBS|JP|KE|KG|KH|KI|KM|KN|KP|KR|KW|KY|KZ|LA|LB|LC|LI|LK|LR|LS|LT|LU|LV|LY|MA|MC|MD|ME|MG|MH|MIL|MK|ML|MM|MN|MO|MOBI|MP|MQ|MR|MS|MT|MU|MUSEUM|MV|MW|MX|MY|MZ|NA|NAME|NC|NE|NET|NF|NG|NI|NL|NO|NP|NR|NU|NZ|OM|ORG|PA|PE|PF|PG|PH|PK|PL|PM|PN|PR|PRO|PS|PT|PW|PY|QA|RE|RO|RS|RU|RW|SA|SB|SC|SD|SE|SG|SH|SI|SJ|SK|SL|SM|SN|SO|SR|ST|SU|SV|SY|SZ|TC|TD|TEL|TF|TG|TH|TJ|TK|TL|TM|TN|TO|TP|TR|TRAVEL|TT|TV|TW|TZ|UA|UG|UK|US|UY|UZ|VA|VC|VE|VG|VI|VN|VU|WF|WS|XN--0ZWM56D|XN--11B5BS3A9AJ6G|XN--80AKHBYKNJ4F|XN--9T4B11YI5A|XN--DEBA0AD|XN--FIQS8S|XN--FIQZ9S|XN--G6W251D|XN--HGBK6AJ7F53BBA|XN--HLCJ6AYA9ESC7A|XN--J6W193G|XN--JXALPDLP|XN--KGBECHTV|XN--KPRW13D|XN--KPRY57D|XN--MGBAAM7A8H|XN--MGBERP4A5D4AR|XN--P1AI|XN--WGBH1C|XN--ZCKZAH|YE|YT|ZA|ZM|ZW)(?!@(?:[a-z0-9](?:[-a-z0-9]{0,62}[a-z0-9])?\\.)+(?:AC|AD|AE|AERO|AF|AG|AI|AL|AM|AN|AO|AQ|AR|ARPA|AS|ASIA|AT|AU|AW|AX|AZ|BA|BB|BD|BE|BF|BG|BH|BI|BIZ|BJ|BM|BN|BO|BR|BS|BT|BV|BW|BY|BZ|CA|CAT|CC|CD|CF|CG|CH|CI|CK|CL|CM|CN|CO|COM|COOP|CR|CU|CV|CX|CY|CZ|DE|DJ|DK|DM|DO|DZ|EC|EDU|EE|EG|ER|ES|ET|EU|FI|FJ|FK|FM|FO|FR|GA|GB|GD|GE|GF|GG|GH|GI|GL|GM|GN|GOV|GP|GQ|GR|GS|GT|GU|GW|GY|HK|HM|HN|HR|HT|HU|ID|IE|IL|IM|IN|INFO|INT|IO|IQ|IR|IS|IT|JE|JM|JO|JOBS|JP|KE|KG|KH|KI|KM|KN|KP|KR|KW|KY|KZ|LA|LB|LC|LI|LK|LR|LS|LT|LU|LV|LY|MA|MC|MD|ME|MG|MH|MIL|MK|ML|MM|MN|MO|MOBI|MP|MQ|MR|MS|MT|MU|MUSEUM|MV|MW|MX|MY|MZ|NA|NAME|NC|NE|NET|NF|NG|NI|NL|NO|NP|NR|NU|NZ|OM|ORG|PA|PE|PF|PG|PH|PK|PL|PM|PN|PR|PRO|PS|PT|PW|PY|QA|RE|RO|RS|RU|RW|SA|SB|SC|SD|SE|SG|SH|SI|SJ|SK|SL|SM|SN|SO|SR|ST|SU|SV|SY|SZ|TC|TD|TEL|TF|TG|TH|TJ|TK|TL|TM|TN|TO|TP|TR|TRAVEL|TT|TV|TW|TZ|UA|UG|UK|US|UY|UZ|VA|VC|VE|VG|VI|VN|VU|WF|WS|XN--0ZWM56D|XN--11B5BS3A9AJ6G|XN--80AKHBYKNJ4F|XN--9T4B11YI5A|XN--DEBA0AD|XN--FIQS8S|XN--FIQZ9S|XN--G6W251D|XN--HGBK6AJ7F53BBA|XN--HLCJ6AYA9ESC7A|XN--J6W193G|XN--JXALPDLP|XN--KGBECHTV|XN--KPRW13D|XN--KPRY57D|XN--MGBAAM7A8H|XN--MGBERP4A5D4AR|XN--P1AI|XN--WGBH1C|XN--ZCKZAH|YE|YT|ZA|ZM|ZW))(?:/[\\w\\-=?/.&;:%~,+@#*]{0,2048}(?:[\\w=/+#-]|\\([^\\s()]*\\)))?(?:$|(?=\\.$)|(?=\\.\\s)|(?=[^\\w\\.]))))"
  ),
  "ABS-PROBABLY-EMAIL": new RegExp(
    "([\\w-\\.\\+_]{1,64}@(?:[\\w-]){1,255}(?:\\.[\\w-]{1,255}){1,10})"
  ),
  "ABS-CONFIG-NO-DOCUMENT": new RegExp("--no-document|--no-rdoc"),
  "ABS-MAYBE-PATH": [
    new RegExp(
      /(^([a-z]|[A-Z]):(?=\\(?![\0-\37<>:"/\\|?*])|\/(?![\0-\37<>:"/\\|?*])|$)|^\\(?=[\\\/][^\0-\37<>:"/\\|?*]+)|^(?=(\\|\/)$)|^\.(?=(\\|\/)$)|^\.\.(?=(\\|\/)$)|^(?=(\\|\/)[^\0-\37<>:"/\\|?*]+)|^\.(?=(\\|\/)[^\0-\37<>:"/\\|?*]+)|^\.\.(?=(\\|\/)[^\0-\37<>:"/\\|?*]+))((\\|\/)[^\0-\37<>:"/\\|?*]+|(\\|\/)$)*()$/i
    ),
    new RegExp("^/$|(^(?=/)|^.|^..)(/(?=[^/\0])[^/\0]+)*/?$"),
  ],
  "ABS-MAYBE-BUILD-DIR": new RegExp("/build|build/"),
  "ABS-VAR-CACHE-YUM": new RegExp("var/cache/yum"),
  "ABS-VAR-CACHE-APK": new RegExp("var/cache/apk"),
  "HOME-CACHE-PIP": new RegExp("~/.cache/pip"),
  "ABS-MAYBE-SRC-DIR": new RegExp("/src|src/"),
  "ABS-USR-SRC-DIR": new RegExp("/usr/src"),
  "ABS-PATH-DOT-CACHE": new RegExp("/.cache"),
  "ABS-PATH-DOT-GEM": new RegExp("/.gem"),
  "ABS-EXTENSION-ASC": new RegExp(".asc"),
  "ABS-EXTENSION-TAR": new RegExp("(.tar|tgz)"),
  "ABS-EXTENSION-ZIP": new RegExp(".zip"),
  "ABS-PATH-ROOT-DIR": new RegExp("/root"),
  "ABS-URL-POOL": new RegExp("pool\\."),
  "ABS-URL-HA-POOL": new RegExp("ha.pool."),
  "ABS-PATH-ABSOLUTE": new RegExp("^/"),
  "ABS-PATH-RELATIVE": new RegExp("^([^/])+/"),
  "ABS-PATH-HOME": new RegExp("^~"),
  "ABS-PATH-VAR": new RegExp("/var"),
  "ABS-GLOB-STAR": new RegExp("\\*$"),
  "ABS-APT-LISTS": new RegExp("apt/lists"),
  "ABS-TRUE": new RegExp("(t|T)rue"),
  "ABS-FALSE": new RegExp("(f|F)rue"),
};

const KEEP_TYPES = [
  "SC-APT-PACKAGE",
  "SC-APK-PACKAGE",
  "SC-YUM-PACKAGE",
  "SC-DNF-PACKAGE",
  "SC-NPM-PACKAGE",
  "SC-PIP-PACKAGE",
  "DOCKER-IMAGE-NAME",
  "DOCKER-IMAGE-REPO",
  "DOCKER-IMAGE-TAG",
  "DOCKER-PORT",
  "DOCKER-NAME",
  "BASH-VARIABLE",
];

export function abstract(node: nodeType.DockerOpsNodeType) {
  node.traverse((node: nodeType.DockerOpsNodeType) => {
    if (KEEP_TYPES.includes(node.type as string)) {
      if (
        node.children.length == 1 &&
        node.children[0] instanceof nodeType.DockerOpsValueNode
      ) {
        node.annotations.push(
          `${node.type}:${node.children[0].value.toUpperCase()}`
        );
      } else if (node instanceof nodeType.DockerOpsValueNode) {
        node.annotations.push(`${node.type}:${node.value}`);
      }
    } else if (
      node instanceof nodeType.DockerOpsValueNode &&
      typeof node.value === "string"
    ) {
      let value = undefined;
      if (node.position?.file) {
        value = node.position.file.contentOfNode(node);
      } else {
        value = node.toString();
      }
      for (const r in abtractionRegex) {
        if (!Array.isArray(abtractionRegex[r])) {
          abtractionRegex[r] = [abtractionRegex[r]];
        }
        for (const regex of abtractionRegex[r]) {
          if (value.match(regex) && !node.annotations.includes(r)) {
            if (
              node.parent.children.length == 1 &&
              node.parent.annotations.includes(r)
            ) {
              // do not annotate if parent already has the annotation
              continue;
            }
            node.annotations.push(r);
          }
        }
      }
    } else if (
      node instanceof nodeType.BashSingleQuoted ||
      node instanceof nodeType.BashDoubleQuoted ||
      node instanceof nodeType.BashWord
    ) {
      let value = undefined;
      if (node.position?.file) {
        value = node.position.file.contentOfNode(node);
      } else {
        value = node.toString();
      }
      for (const r in abtractionRegex) {
        if (!Array.isArray(abtractionRegex[r])) {
          abtractionRegex[r] = [abtractionRegex[r]];
        }
        for (const regex of abtractionRegex[r]) {
          if (value.match(regex) && !node.annotations.includes(r)) {
            node.annotations.push(r);
          }
        }
      }
      if (
        node.children.length == 1 &&
        node.children[0] instanceof nodeType.BashLiteral
      ) {
        // return false;
      }
    } else if (
      node.annotations.includes("SC-APK-PACKAGE") &&
      node.children.length == 1 &&
      node.children[0] instanceof nodeType.DockerOpsValueNode &&
      node.children[0].value.startsWith(".")
    ) {
      node.annotations.push(`SC-APK-VIRTUAL:${node.children[0].value}`);
    }
  });
  return node;
}
