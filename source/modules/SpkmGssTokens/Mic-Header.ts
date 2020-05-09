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
 * `Mic-Header ::= SEQUENCE {
 *   tok-id      INTEGER(257), -- shall contain 0101 (hex)
 *   context-id  Random-Integer,
 *   int-alg     [0]  AlgorithmIdentifier{{SupportedAlgorithms}} OPTIONAL,
 *   snd-seq     [1]  SeqNum OPTIONAL
 * }`
 */
export default
class Mic_Header  {
    constructor (

    ) {}

    public static fromElement (value: DERElement): Mic_Header {
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
        return new Mic_Header();
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([

        ]);
    }
}
