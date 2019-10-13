import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "asn1-ts";
import Certificate from "../AuthenticationFramework/Certificate";
import AttributeCertificate from "../AttributeCertificateDefinitions/AttributeCertificate";

/**
 * `ACPathData ::= SEQUENCE {
 *   certificate           [0]  Certificate OPTIONAL,
 *   attributeCertificate  [1]  AttributeCertificate OPTIONAL,
 *   ... }`
 */
export default
class ACPathData {
    constructor (
        readonly certificate: Certificate | undefined,
        readonly attributeCertificate: AttributeCertificate | undefined,
    ) {}

    public static fromElement (value: DERElement): ACPathData {
        const acPathDataElements: DERElement[] = value.sequence;
        let certificate: Certificate | undefined = undefined;
        let attributeCertificate: AttributeCertificate | undefined = undefined;

        if (
            acPathDataElements.length > 0
            && acPathDataElements[0].tagClass === ASN1TagClass.context
            && acPathDataElements[0].construction === ASN1Construction.constructed
            && acPathDataElements[0].tagNumber === 0
        ) {
            if (acPathDataElements[0].tagNumber === 0) {
                certificate = Certificate.fromElement(acPathDataElements[0]);
            } else if (acPathDataElements[0].tagNumber === 1) {
                attributeCertificate = AttributeCertificate.fromElement(acPathDataElements[0]);
            }
        }

        if (
            typeof attributeCertificate === "undefined"
            && acPathDataElements.length > 1
            && acPathDataElements[1].tagClass === ASN1TagClass.context
            && acPathDataElements[1].construction === ASN1Construction.constructed
            && acPathDataElements[1].tagNumber === 1
        ) {
            attributeCertificate = AttributeCertificate.fromElement(acPathDataElements[1]);
        }

        return new ACPathData(
            certificate,
            attributeCertificate,
        );
    }

    public toElement (): DERElement {
        const acPathDataElements: DERElement[] = [];

        if (this.certificate) {
            const certificateElement: DERElement = this.certificate.toElement();
            certificateElement.tagClass === ASN1TagClass.context;
            certificateElement.tagNumber === 0;
            acPathDataElements.push(certificateElement);
        }

        if (this.attributeCertificate) {
            const attributeCertificateElement: DERElement = this.attributeCertificate.toElement();
            attributeCertificateElement.tagClass === ASN1TagClass.context;
            attributeCertificateElement.tagNumber === 1;
            acPathDataElements.push(attributeCertificateElement);
        }

        const acPathDataElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.sequence,
        );
        acPathDataElement.sequence = acPathDataElements;
        return acPathDataElement;
    }

    public static fromBytes (value: Uint8Array): ACPathData {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return ACPathData.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
