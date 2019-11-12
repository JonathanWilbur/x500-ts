import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, ASN1Element } from "asn1-ts";
import * as errors from "../../errors";
import validateTag from "../../validateTag";
import AttributeCertificate from "../AttributeCertificateDefinitions/AttributeCertificate";
import ACPathData from "./ACPathData";

/**
 * `AttributeCertificationPath ::= SEQUENCE {
 *   attributeCertificate  AttributeCertificate,
 *   acPath                SEQUENCE OF ACPathData OPTIONAL,
 *   ... }`
 */
export default
class AttributeCertificationPath {
    constructor (
        readonly attributeCertificate: AttributeCertificate,
        readonly acPath: ACPathData[] | undefined,
    ) {}

    public static fromElement (value: ASN1Element): AttributeCertificationPath {
        const acPathDataElements: ASN1Element[] = value.sequence;
        if (acPathDataElements.length < 1) {
            throw new errors.X500Error("Invalid number of elements in AttributeCertificationPath.");
        }

        validateTag(acPathDataElements[0], "AttributeCertificationPath.attributeCertificate",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.constructed ],
            [ ASN1UniversalType.sequence ],
        );

        let acPath: ACPathData[] | undefined = undefined;
        if (
            acPathDataElements.length > 1
            && acPathDataElements[1].tagClass === ASN1TagClass.universal
            && acPathDataElements[1].construction === ASN1Construction.constructed
            && acPathDataElements[1].tagNumber === ASN1UniversalType.sequence
        ) {
            acPath = acPathDataElements[1].sequence.map(ac => ACPathData.fromElement(ac));
        }

        return new AttributeCertificationPath(
            AttributeCertificate.fromElement(acPathDataElements[0]),
            acPath,
        );
    }

    public toElement (): DERElement {
        const acPathDataElements: DERElement[] = [];
        acPathDataElements.push(this.attributeCertificate.toElement());

        if (this.acPath) {
            const acPathElement: DERElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.constructed,
                ASN1UniversalType.sequence,
            );
            acPathElement.sequence = this.acPath.map(acp => acp.toElement());
            acPathDataElements.push(acPathElement);
        }

        const acPathDataElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.sequence,
        );
        acPathDataElement.sequence = acPathDataElements;
        return acPathDataElement;
    }

    public static fromBytes (value: Uint8Array): AttributeCertificationPath {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return AttributeCertificationPath.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
