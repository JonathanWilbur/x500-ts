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
 * `REP-IT-TOKEN ::= SEQUENCE {
 *   tok-id        INTEGER(768), -- shall contain 0300 (hex)
 *   context-id    Random-Integer,
 *   randSrc       Random-Integer,
 *   randTarg      Random-Integer,
 *   targ-name     Name,
 *   src-name      Name OPTIONAL,
 *   key-estb-rep  BIT STRING OPTIONAL
 * }`
 */
export default
class REP_IT_TOKEN {
    constructor (

    ) {}

    public static fromElement (value: DERElement): REP_IT_TOKEN {
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
        return new REP_IT_TOKEN(
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([

        ]);
    }
}
