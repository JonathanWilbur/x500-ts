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
 * `REQ-TOKEN ::= SEQUENCE {
 *   req-contents   Req-contents,
 *   algId          AlgorithmIdentifier{{SupportedAlgorithms}},
 *   req-integrity  Integrity -- "token" is Req-contents
 * }`
 */
export default
class REQ_TOKEN {
    constructor (

    ) {}

    public static fromElement (value: DERElement): REQ_TOKEN {
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
        return new REQ_TOKEN(
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([

        ]);
    }
}
