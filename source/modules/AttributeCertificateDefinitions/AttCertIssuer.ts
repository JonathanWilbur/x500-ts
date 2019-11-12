import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, ASN1Element } from "asn1-ts";
import * as errors from "../../errors";
import GeneralNames from "../CertificateExtensions/GeneralNames";
import validateTag from "../../validateTag";
import ObjectDigestInfo from "./ObjectDigestInfo";
import IssuerSerial from "./IssuerSerial";

// AttCertIssuer ::= [0]  SEQUENCE {
//     issuerName              GeneralNames OPTIONAL,
//     baseCertificateID  [0]  IssuerSerial OPTIONAL,
//     objectDigestInfo   [1]  ObjectDigestInfo OPTIONAL,
//     ... }
//     (WITH COMPONENTS {..., issuerName  PRESENT } |
//      WITH COMPONENTS {..., baseCertificateID  PRESENT } |
//      WITH COMPONENTS {..., objectDigestInfo  PRESENT } )

export default
class AttCertIssuer {
    constructor (
        readonly issuerName: GeneralNames | undefined,
        readonly baseCertificateID: IssuerSerial | undefined,
        readonly objectDigestInfo: ObjectDigestInfo | undefined,
    ) {}

    public static fromElement (value: ASN1Element): AttCertIssuer {
        validateTag(value, "AttCertIssuer",
            [ ASN1TagClass.context ],
            [ ASN1Construction.constructed ],
            [ 0 ],
        );
        const holderElements: ASN1Element[] = value.sequence;
        if (holderElements.length < 1) {
            throw new errors.X500Error(`Invalid number of elements in AttCertIssuer: ${holderElements.length}.`);
        }
        if (!DERElement.isInCanonicalOrder(holderElements)) {
            throw new errors.X500Error("Elements of AttCertIssuer were not in canonical order.");
        }

        let issuerName: GeneralNames | undefined;
        let baseCertificateID: IssuerSerial | undefined;
        let objectDigestInfo: ObjectDigestInfo | undefined;

        holderElements.forEach((he: ASN1Element): void => {
            if (he.construction !== ASN1Construction.constructed) return;
            if (he.tagClass === ASN1TagClass.context) {
                if (he.tagNumber === 0) {
                    if (baseCertificateID) {
                        throw new errors.X500Error("AttCertIssuer.baseCertificateID already defined.");
                    }
                    baseCertificateID = IssuerSerial.fromElement(he);
                } else if (he.tagNumber === 1) {
                    if (objectDigestInfo) {
                        throw new errors.X500Error("AttCertIssuer.objectDigestInfo already defined.");
                    }
                    objectDigestInfo = ObjectDigestInfo.fromElement(he);
                }
            } else if (
                he.tagClass === ASN1TagClass.universal
                && he.tagNumber === ASN1UniversalType.sequence
            ) {
                if (issuerName) {
                    throw new errors.X500Error("AttCertIssuer.issuerName already defined.");
                }
                issuerName = he.sequence;
            }
        });

        if (!baseCertificateID && !issuerName && !objectDigestInfo) {
            throw new errors.X500Error(
                "One of { baseCertificateID, issuerName, objectDigestInfo } "
                + "must be defined for a AttCertIssuer element.",
            );
        }

        return new AttCertIssuer(issuerName, baseCertificateID, objectDigestInfo);
    }

    public toElement (): DERElement {
        const attCertIssuerElements: DERElement[] = [];
        if (this.issuerName) {
            const issuerNameElement: DERElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.constructed,
                ASN1UniversalType.sequence,
            );
            issuerNameElement.sequence = this.issuerName;
            attCertIssuerElements.push(issuerNameElement);
        }
        if (this.baseCertificateID) {
            const baseCertificateIDElement: DERElement = this.baseCertificateID.toElement();
            baseCertificateIDElement.tagClass = ASN1TagClass.context;
            baseCertificateIDElement.tagNumber = 0;
            attCertIssuerElements.push(baseCertificateIDElement);
        }
        if (this.objectDigestInfo) {
            const objectDigestInfoElement: DERElement = this.objectDigestInfo.toElement();
            objectDigestInfoElement.tagClass = ASN1TagClass.context;
            objectDigestInfoElement.tagNumber = 1;
            attCertIssuerElements.push(objectDigestInfoElement);
        }
        const attCertIssuerElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.sequence,
        );
        attCertIssuerElement.sequence = attCertIssuerElements;
        return attCertIssuerElement;
    }

    public static fromBytes (value: Uint8Array): AttCertIssuer {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return AttCertIssuer.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
