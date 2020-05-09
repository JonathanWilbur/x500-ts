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
 * `Rep-ti-contents ::= SEQUENCE {
 *   tok-id        INTEGER(512), -- shall contain 0200 (hex)
 *   context-id    Random-Integer,
 *   pvno          [0]  BIT STRING OPTIONAL,
 *   timestamp     UTCTime OPTIONAL, -- mandatory for SPKM-2
 *   randTarg      Random-Integer,
 *   src-name      [1]  Name OPTIONAL,
 *   targ-name     Name,
 *   randSrc       Random-Integer,
 *   rep-data      Context-Data,
 *   validity      [2]  Validity OPTIONAL,
 *   key-estb-id   AlgorithmIdentifier{{SupportedAlgorithms}} OPTIONAL,
 *   key-estb-str  BIT STRING OPTIONAL
 * }`
 */
export default
class Rep_ti_contents {
    constructor (

    ) {}

    public static fromElement (value: DERElement): Rep_ti_contents {
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
        return new Rep_ti_contents(
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([

        ]);
    }
}
