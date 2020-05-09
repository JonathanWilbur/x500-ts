import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import CertificationPath from "./CertificationPath";
import CertificateList from "../AuthenticationFramework/CertificateList";

/**
 * `CertificationData ::= SEQUENCE {
 *   certificationPath          [0]  CertificationPath OPTIONAL,
 *   certificateRevocationList  [1]  CertificateList OPTIONAL
 * } -- at least one of the above shall be present`
 */
export default
class CertificationData {
    constructor (
        readonly certificationPath: CertificationPath | undefined,
        readonly certificateRevocationList: CertificateList | undefined,
    ) {}

    public static fromElement (value: DERElement): CertificationData {
        let certificationPath: CertificationPath | undefined = undefined;
        let certificateRevocationList: CertificateList | undefined = undefined;
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
        return new CertificationData(
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([

        ]);
    }
}
