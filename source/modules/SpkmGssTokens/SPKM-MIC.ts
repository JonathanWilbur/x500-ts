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
 * `SPKM-MIC ::= SEQUENCE {mic-header  Mic-Header,
 *                        int-cksum   BIT STRING
 * }`
 */
export default
class SPKM_MIC {
    constructor (

    ) {}

    public static fromElement (value: DERElement): SPKM_MIC {
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
        return new SPKM_MIC(
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([

        ]);
    }
}
