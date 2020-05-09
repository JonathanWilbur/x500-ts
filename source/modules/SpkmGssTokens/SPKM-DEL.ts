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
 * `SPKM-DEL ::= SEQUENCE {del-header  Del-Header,
 *                        int-cksum   BIT STRING
 * }`
 */
export default
class SPKM_DEL {
    constructor (

    ) {}

    public static fromElement (value: DERElement): SPKM_DEL {
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
        return new SPKM_DEL(
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([

        ]);
    }
}
