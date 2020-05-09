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
 * `SPKM-REP-IT ::= SEQUENCE {
 *   responseToken  REP-IT-TOKEN,
 *   algId          AlgorithmIdentifier{{SupportedAlgorithms}},
 *   rep-it-integ   Integrity -- "token" is REP-IT-TOKEN
 * }`
 */
export default
class SPKM_REP_IT {
    constructor (

    ) {}

    public static fromElement (value: DERElement): SPKM_REP_IT {
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
        return new SPKM_REP_IT(
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([

        ]);
    }
}
