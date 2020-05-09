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
 * `CertificationPath ::= SEQUENCE {
 *   userKeyId          [0]  OCTET STRING OPTIONAL,
 *   userCertif         [1]  Certificate OPTIONAL,
 *   verifKeyId         [2]  OCTET STRING OPTIONAL,
 *   userVerifCertif    [3]  Certificate OPTIONAL,
 *   theCACertificates  [4]  SEQUENCE OF CertificatePair OPTIONAL
 * } -- Presence of [2] or [3] implies that [0] or [1] must also be
 * -- present.  Presence of [4] implies that at least one of [0], [1],
 * -- [2], and [3] must also be present.`
 */
export default
class CertificationPath {
    constructor (

    ) {}

    public static fromElement (value: DERElement): CertificationPath {
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
        return new CertificationPath(
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([

        ]);
    }
}
