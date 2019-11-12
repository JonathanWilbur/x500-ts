import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";

/**
 * `NumberRange ::= SEQUENCE {
 *   startingNumber  [0]  INTEGER OPTIONAL,
 *   endingNumber    [1]  INTEGER OPTIONAL,
 *   modulus         INTEGER OPTIONAL,
 *   ... }`
 */
export default
class NumberRange {
    constructor (
        readonly startingNumber: Uint8Array | undefined,
        readonly endingNumber: Uint8Array | undefined,
        readonly modulus: Uint8Array | undefined,
    ) {}

    public static fromElement (value: ASN1Element): NumberRange {
        let startingNumber: Uint8Array | undefined = undefined;
        let endingNumber: Uint8Array | undefined = undefined;
        let modulus: Uint8Array | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "startingNumber",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    startingNumber = el.octetString;
                },
            },
            {
                name: "endingNumber",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    endingNumber = el.octetString;
                },
            },
            {
                name: "modulus",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    modulus = el.octetString;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new NumberRange(startingNumber, endingNumber, modulus);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.startingNumber
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    0,
                    this.startingNumber,
                )
                : undefined,
            this.endingNumber
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    1,
                    this.endingNumber,
                )
                : undefined,
            this.modulus
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.modulus,
                )
                : undefined,
        ]);
    }
}
