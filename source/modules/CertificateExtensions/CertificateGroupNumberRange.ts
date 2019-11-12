import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";

/**
 * `CertificateGroupNumberRange ::= SEQUENCE {
 *   startingNumber  [0]  INTEGER,
 *   endingNumber    [1]  INTEGER,
 *   ... }`
 */
export default
class CertificateGroupNumberRange {
    constructor (
        readonly startingNumber: Uint8Array,
        readonly endingNumber: Uint8Array,
    ) {}

    public static fromElement (value: ASN1Element): CertificateGroupNumberRange {
        let startingNumber!: Uint8Array;
        let endingNumber!: Uint8Array;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "startingNumber",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    startingNumber = el.octetString;
                },
            },
            {
                name: "endingNumber",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    endingNumber = el.octetString;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new CertificateGroupNumberRange(startingNumber, endingNumber);
    }

    public toElement (): DERElement {
        const startingNumberElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.primitive,
            0,
        );
        startingNumberElement.octetString = this.startingNumber;

        const endingNumberElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.primitive,
            1,
        );
        endingNumberElement.octetString = this.endingNumber;

        return DERElement.fromSequence([
            startingNumberElement,
            endingNumberElement,
        ]);
    }
}
