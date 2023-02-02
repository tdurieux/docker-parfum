import { Argv } from "yargs";
declare const _default: {
    providerFor: string[];
    prefix: string;
    scenarios: {
        fixBadLongNames: string[];
        cmd: string;
        name: string;
        prefix: string;
        booleans: string[];
        argv: () => Argv<{
            sync: boolean;
        } & {
            "no-xshm": boolean;
        } & {
            "g-fatal-warnings": boolean;
        } & {
            h: boolean;
        } & {
            installer: boolean;
        } & {
            v: boolean;
        } & {
            ProfileWizard: boolean;
        } & {
            ProfileManager: boolean;
        } & {
            SelectProfile: boolean;
        } & {
            splash: boolean;
        } & {
            jsconsole: boolean;
        } & {
            "gdk-debug": string;
        } & {
            "gdk-no-debug": string;
        } & {
            "gtk-debug": string;
        } & {
            "gtk-no-debug": string;
        } & {
            "gtk-module": string;
        } & {
            display: string;
        } & {
            "xim-preedit": string;
        } & {
            "xim-status": string;
        } & {
            height: string;
        } & {
            width: string;
        } & {
            CreateProfile: string;
        } & {
            P: string;
        } & {
            lang: string;
        } & {
            remote: string;
        } & {
            chrome: string;
        }>;
    }[];
};
export default _default;
