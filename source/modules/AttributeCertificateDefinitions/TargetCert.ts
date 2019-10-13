import IssuerSerial from "./IssuerSerial";
import ObjectDigestInfo from "./ObjectDigestInfo";
import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "asn1-ts";
import * as errors from "../../errors";
import GeneralName from "../CertificateExtensions/GeneralName";

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
        const targetCertElements: DERElement[] = value.sequence;

        switch (targetCertElements.length) {
        case (1): {
            return new TargetCert(
                IssuerSerial.fromElement(targetCertElements[0]),
                undefined,
                undefined,
            );
        }
        case (2): {
            if (
                targetCertElements[1].tagClass === ASN1TagClass.universal
                && targetCertElements[1].construction === ASN1Construction.constructed
                && targetCertElements[1].tagNumber === ASN1UniversalType.sequence
            ) {
                return new TargetCert(
                    IssuerSerial.fromElement(targetCertElements[0]),
                    undefined,
                    ObjectDigestInfo.fromElement(targetCertElements[1]),
                );
            } else if (targetCertElements[1].tagClass === ASN1TagClass.context) {
                return new TargetCert(
                    IssuerSerial.fromElement(targetCertElements[0]),
                    targetCertElements[1],
                    undefined,
                );
            } else {
                throw new errors.X500Error("Malformed TargetCert.");
            }
        }
        case (3): {
            return new TargetCert(
                IssuerSerial.fromElement(targetCertElements[0]),
                targetCertElements[1],
                ObjectDigestInfo.fromElement(targetCertElements[2]),
            );
        }
        default: {
            throw new errors.X500Error("Invalid number of elements in TargetCert.");
        }
        }
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
