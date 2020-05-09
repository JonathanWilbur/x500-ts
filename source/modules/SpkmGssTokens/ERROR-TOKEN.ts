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
 * `ERROR-TOKEN ::= SEQUENCE {
 *   tok-id      INTEGER(1024), -- shall contain 0400 (hex)
 *   context-id  Random-Integer
 * }`
 */
export default
class ERROR_TOKEN {
    constructor (

    ) {}

    public static fromElement (value: DERElement): ERROR_TOKEN {
        const specification: ConstructedElementSpecification[] = [
            // {
            //     name: "notThisTime",
            //     optional: true,
            //     tagClass: ASN1TagClass.universal,
            //     construction: ASN1Construction.primitive,
            //     tagNumber: ASN1UniversalType.boolean,
            //     callback: (el: ASN1Element): void => {
            //         notThisTime = el.boolean;
            //     },
            // },
        ];
        validateConstruction(value.sequence, specification);
        return new ERROR_TOKEN(
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([

        ]);
    }
}
