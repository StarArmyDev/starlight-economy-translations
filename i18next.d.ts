import ResourceEnFiles from "./en-US";
import "i18next";

declare module "i18next" {
    interface CustomTypeOptions {
        defaultNS: "core";
        nsSeparator: ":";
        keySeparator: ".";

        returnEmptyString: true;
        returnNull: false;
        returnObjects: true;
        interpolation: {
            escapeValue: false;
        };
        resources: typeof ResourceEnFiles;
    }
}
