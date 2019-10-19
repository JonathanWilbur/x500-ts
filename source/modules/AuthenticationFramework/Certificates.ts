import Certificate from "./Certificate";
import ForwardCertificationPath from "./ForwardCertificationPath";
import CrossCertificates from "./CrossCertificates";
import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    validateConstruction,
} from "asn1-ts";

/**
 * `Certificates ::= SEQUENCE {
 *   userCertificate    Certificate,
 *   certificationPath  ForwardCertificationPath OPTIONAL,
 *   ... }`
 */
export default
class Certificates {
    constructor (
        readonly userCertificate: Certificate,
        readonly certificationPath: ForwardCertificationPath | undefined,
    ) {}

    public static fromElement (value: DERElement): Certificates {
        let userCertificate!: Certificate;
        let certificationPath: ForwardCertificationPath | undefined = undefined;
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
                name: "certificationPath",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    certificationPath = el.sequence
                        .map((cc: ASN1Element): CrossCertificates => cc.set
                            .map((cert: ASN1Element): Certificate => Certificate.fromElement(cert as DERElement))
                        );
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new Certificates(
            userCertificate,
            certificationPath,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.userCertificate.toElement(),
            this.certificationPath
                ? DERElement.fromSequence(
                    this.certificationPath
                        .map((cc: Certificate[]): DERElement => DERElement.fromSet(cc
                            .map((c: Certificate): DERElement => c.toElement()))))
                : undefined,
        ]);
    }

    public fromBytes (value: Uint8Array): Certificates {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return Certificates.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
