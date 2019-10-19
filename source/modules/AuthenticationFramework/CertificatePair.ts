import Certificate from "./Certificate";
import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
} from "asn1-ts";
import * as errors from "../../errors";

/**
 * `CertificatePair ::= SEQUENCE {
 *   issuedToThisCA  [0]  Certificate OPTIONAL,
 *   issuedByThisCA  [1]  Certificate OPTIONAL,
 *   ... }
 *   (WITH COMPONENTS { ..., issuedToThisCA PRESENT} |
 *    WITH COMPONENTS { ..., issuedByThisCA PRESENT})`
 */
export default
class CertificatePair {
    constructor (
        readonly issuedToThisCA: Certificate | undefined,
        readonly issuedByThisCA: Certificate | undefined,
    ) {
        if (!issuedToThisCA && !issuedByThisCA) {
            throw new errors.X500Error("CertificatePair had issuedToThisCA nor issuedByThisCA defined.");
        }
    }

    public static fromElement (value: DERElement): CertificatePair {
        let issuedToThisCA: Certificate | undefined = undefined;
        let issuedByThisCA: Certificate | undefined = undefined;
        const specification = [
            {
                name: "issuedToThisCA",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    issuedToThisCA = Certificate.fromElement(el as DERElement);
                },
            },
            {
                name: "issuedByThisCA",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    issuedByThisCA = Certificate.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);

        if (!issuedToThisCA && !issuedByThisCA) {
            throw new errors.X500Error("CertificatePair had issuedToThisCA nor issuedByThisCA defined.");
        }

        return new CertificatePair(
            issuedToThisCA,
            issuedByThisCA,
        );
    }

    public toElement (): DERElement {
        const elements: (DERElement | undefined)[] = [
            undefined,
            undefined,
        ];
        if (this.issuedToThisCA) {
            const issuedToThisCAElement: DERElement = this.issuedToThisCA.toElement();
            issuedToThisCAElement.tagClass = ASN1TagClass.context;
            issuedToThisCAElement.construction = ASN1Construction.constructed;
            issuedToThisCAElement.tagNumber = 0;
            elements[0] = issuedToThisCAElement;
        }
        if (this.issuedByThisCA) {
            const issuedByThisCAElement: DERElement = this.issuedByThisCA.toElement();
            issuedByThisCAElement.tagClass = ASN1TagClass.context;
            issuedByThisCAElement.construction = ASN1Construction.constructed;
            issuedByThisCAElement.tagNumber = 0;
            elements[1] = issuedByThisCAElement;
        }
        return DERElement.fromSequence(elements);
    }

    public fromBytes (value: Uint8Array): CertificatePair {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return CertificatePair.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
