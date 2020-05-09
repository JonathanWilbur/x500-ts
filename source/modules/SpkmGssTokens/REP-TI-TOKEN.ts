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
 * `REP-TI-TOKEN ::= SEQUENCE {
 *   rep-ti-contents  Rep-ti-contents,
 *   algId            AlgorithmIdentifier{{SupportedAlgorithms}},
 *   rep-ti-integ     Integrity -- "token" is Rep-ti-contents
 * }`
 */
export default
class REP_TI_TOKEN {
    constructor (

    ) {}

    public static fromElement (value: DERElement): REP_TI_TOKEN {
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
        return new REP_TI_TOKEN(
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([

        ]);
    }
}
