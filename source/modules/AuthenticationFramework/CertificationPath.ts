import Certificate from "./Certificate";
import CertificatePair from "./CertificatePair";
import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    validateConstruction,
} from "asn1-ts";

/**
 * `CertificationPath ::= SEQUENCE {
 *   userCertificate    Certificate,
 *   theCACertificates  SEQUENCE SIZE (1..MAX) OF CertificatePair OPTIONAL,
 *   ... }`
 */
export default
class CertificationPath {
    constructor (
        readonly userCertificate: Certificate,
        readonly theCACertificates: CertificatePair[] | undefined,
    ) {}

    public static fromElement (value: DERElement): CertificationPath {
        let userCertificate!: Certificate;
        let theCACertificates: CertificatePair[] | undefined = undefined;
        const specification = [
            {
                name: "userCertificate",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    userCertificate = Certificate.fromElement(el as DERElement);
                },
            },
            {
                name: "theCACertificates",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    theCACertificates = el.sequence
                        .map((cert: ASN1Element): CertificatePair => CertificatePair.fromElement(cert as DERElement));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new CertificationPath(
            userCertificate,
            theCACertificates,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.userCertificate.toElement(),
            this.theCACertificates
                ? DERElement.fromSequence(this.theCACertificates
                    .map((cert: CertificatePair): DERElement => cert.toElement()))
                : undefined,
        ]);
    }

    public fromBytes (value: Uint8Array): CertificationPath {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return CertificationPath.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
