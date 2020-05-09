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
 * `SPKM-REQ ::= SEQUENCE {
 *   requestToken  REQ-TOKEN,
 *   certif-data   [0]  CertificationData OPTIONAL,
 *   auth-data     [1]  AuthorizationData OPTIONAL
 * }`
 */
export default
class SPKM_REQ {
    constructor (

    ) {}

    public static fromElement (value: DERElement): SPKM_REQ {
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
        return new SPKM_REQ(
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([

        ]);
    }
}
