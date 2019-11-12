import TBSCertAVL from "./TBSCertAVL";
import AlgorithmIdentifier from "./AlgorithmIdentifier";
import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, ASN1Element } from "asn1-ts";
import * as errors from "../../errors";
import validateTag from "../../validateTag";

/**
 * `CertAVL ::= SIGNED {TBSCertAVL}`
 */
export default
class CertAVL {
    public static maximumX509CertificateSizeInBytes: number = 100000;

    constructor (
        readonly tbsCertAVL: TBSCertAVL,
        readonly signatureAlgorithm: AlgorithmIdentifier,
        readonly signatureValue: boolean[],
    ) {}

    public static fromElement (value: ASN1Element): CertAVL {
        const certAVLElements: ASN1Element[] = value.sequence;
        if (certAVLElements.length !== 3) {
            throw new errors.X500Error("Invalid number of elements in TBSCertAVL");
        }
        validateTag(certAVLElements[0], "CertAVL.toBeSigned",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.constructed ],
            [ ASN1UniversalType.sequence ],
        );
        validateTag(certAVLElements[1], "CertAVL.algorithmIdentifier",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.constructed ],
            [ ASN1UniversalType.sequence ],
        );
        validateTag(certAVLElements[2], "CertAVL.signature",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive ],
            [ ASN1UniversalType.bitString ],
        );
        return new CertAVL(
            TBSCertAVL.fromElement(certAVLElements[0]),
            AlgorithmIdentifier.fromElement(certAVLElements[1]),
            certAVLElements[2].bitString,
        );
    }

    public toElement (): DERElement {
        const signatureValueElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.bitString,
        );
        signatureValueElement.bitString = this.signatureValue;
        return DERElement.fromSequence([
            this.tbsCertAVL.toElement(),
            this.signatureAlgorithm.toElement(),
            signatureValueElement,
        ]);
    }

    public static fromBytes (value: Uint8Array): CertAVL {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return CertAVL.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
