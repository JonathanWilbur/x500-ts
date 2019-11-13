import {
    ASN1Element,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import Certificate from "../AuthenticationFramework/Certificate";

/**
 * `CertOK ::= SEQUENCE {
 *   dhCert  Certificate,
 *   ... }`
 */
export default
class CertOK {
    constructor (
        readonly dhCert: Certificate,
    ) {}

    public static fromElement (value: DERElement): CertOK {
        let dhCert!: Certificate;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "dhCert",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    dhCert = Certificate.fromElement(el);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new CertOK(dhCert);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.dhCert.toElement(),
        ]);
    }
}
