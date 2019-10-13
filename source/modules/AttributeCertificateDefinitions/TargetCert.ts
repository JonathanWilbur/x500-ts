import IssuerSerial from "./IssuerSerial";
import ObjectDigestInfo from "./ObjectDigestInfo";
import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, ASN1Element } from "asn1-ts";
import GeneralName from "../CertificateExtensions/GeneralName";
// import validateTag from '../../validateTag';
import validateConstruction from "../../validateConstruction";

/**
 * `TargetCert ::= SEQUENCE {
 *   targetCertificate  IssuerSerial,
 *   targetName         GeneralName OPTIONAL,
 *   certDigestInfo     ObjectDigestInfo OPTIONAL }`
 */
export default class TargetCert {
    constructor (
        readonly targetCertificate: IssuerSerial,
        readonly targetName: GeneralName | undefined,
        readonly certDigestInfo: ObjectDigestInfo | undefined,
    ) {}

    public static fromElement (value: DERElement): TargetCert {
        let targetCertificate!: IssuerSerial;
        let targetName: GeneralName | undefined = undefined;
        let certDigestInfo: ObjectDigestInfo | undefined = undefined;
        const specification = [
            {
                name: "targetCertificate",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    targetCertificate = IssuerSerial.fromElement(el as DERElement);
                },
            },
            {
                name: "targetName",
                optional: true,
                tagClass: ASN1TagClass.context,
                callback: (el: ASN1Element): void => {
                    targetName = el as DERElement;
                },
            },
            {
                name: "certDigestInfo",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    certDigestInfo = ObjectDigestInfo.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new TargetCert(
            targetCertificate,
            targetName,
            certDigestInfo,
        );
    }

    public toElement (): DERElement {
        const targetCertElements: DERElement[] = [
            this.targetCertificate.toElement(),
        ];

        if (this.targetName) {
            targetCertElements.push(this.targetName);
        }

        if (this.certDigestInfo) {
            targetCertElements.push(this.certDigestInfo.toElement());
        }

        const targetCertElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.sequence,
        );
        targetCertElement.sequence = targetCertElements;
        return targetCertElement
    }

    public static fromBytes (value: Uint8Array): TargetCert {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return TargetCert.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
