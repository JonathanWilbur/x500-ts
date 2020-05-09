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
 * `InitialContextToken ::= [APPLICATION 0] IMPLICIT SEQUENCE {
 *   thisMech           MechType,
 *   innerContextToken  SPKMInnerContextToken
 * } -- when thisMech is SPKM-1 or SPKM-2`
 */
export default
class InitialContextToken {
    constructor (

    ) {}

    public static fromElement (value: DERElement): InitialContextToken {
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
        return new InitialContextToken(
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([

        ]);
    }
}
