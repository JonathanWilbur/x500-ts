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
 * `SPKM-ERROR ::= SEQUENCE {
 *   errorToken  ERROR-TOKEN,
 *   algId       AlgorithmIdentifier{{SupportedAlgorithms}},
 *   integrity   Integrity -- "token" is ERROR-TOKEN
 * }`
 */
export default
class SPKM_ERROR {
    constructor (

    ) {}

    public static fromElement (value: DERElement): SPKM_ERROR {
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
        return new SPKM_ERROR(
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([

        ]);
    }
}
