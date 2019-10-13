import { DERElement, ASN1TagClass, ASN1Construction } from "asn1-ts";
import * as errors from "./errors";

// eslint-disable-next-line max-params
export default function validateTag (
    element: DERElement,
    name: string,
    acceptableTagClasses: ASN1TagClass[],
    acceptableConstructions: ASN1Construction[],
    acceptableTagNumbers: number[],
): void {
    switch (element.validateTag(acceptableTagClasses, acceptableConstructions, acceptableTagNumbers)) {
    case 0: break;
    case -1: {
        const tagClassName: string = ({
            0: "UNIVERSAL",
            1: "APPLICATION",
            2: "CONTEXT-SPECIFIC",
            3: "PRIVATE",
        })[element.tagClass];
        throw new errors.X500Error(`Invalid tag class on ${name}. Actual class: ${tagClassName}. Element bytes: ${element.toBytes()}.`);
    }
    case -2: throw new errors.X500Error(`Invalid construction on ${name}. Element bytes: ${element.toBytes()}.`);
    case -3: throw new errors.X500Error(
        `Invalid tag number on ${name}. Actual number was ${element.tagNumber}. Element bytes: ${element.toBytes()}.`,
    );
    default: throw new errors.X500Error(`Undefined error when validating ${name} tag. Element bytes: ${element.toBytes()}.`);
    }
}
