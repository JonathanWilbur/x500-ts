import FINGERPRINT from "./FINGERPRINT";
import IssuerSerialNumber from "./IssuerSerialNumber";
import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    validateConstruction,
} from "asn1-ts";

/**
 * `PKCertIdentifier ::= CHOICE {
 *   issuerSerialNumber         IssuerSerialNumber,
 *   fingerprintPKC        [0]  IMPLICIT FINGERPRINT {Certificate},
 *   fingerprintPK         [1]  IMPLICIT FINGERPRINT {PublicKey},
 *   ... }`
 */
export default
class PKCertIdentifier {
    constructor (
        readonly issuerSerialNumber: IssuerSerialNumber,
        readonly fingerprintPKC: FINGERPRINT,
        readonly fingerprintPK: FINGERPRINT,
    ) {}

    public static fromElement (value: ASN1Element): PKCertIdentifier {
        let issuerSerialNumber!: IssuerSerialNumber;
        let fingerprintPKC!: FINGERPRINT;
        let fingerprintPK!: FINGERPRINT;
        const specification = [
            {
                name: "issuerSerialNumber",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    issuerSerialNumber = IssuerSerialNumber.fromElement(el as DERElement);
                },
            },
            {
                name: "fingerprintPKC",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    fingerprintPKC = FINGERPRINT.fromElement(el as DERElement);
                },
            },
            {
                name: "fingerprintPK",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    fingerprintPK = FINGERPRINT.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new PKCertIdentifier(
            issuerSerialNumber,
            fingerprintPKC,
            fingerprintPK,
        );
    }

    public toElement (): DERElement {
        const fingerprintPKC: DERElement = this.fingerprintPKC.toElement();
        fingerprintPKC.tagClass = ASN1TagClass.context;
        fingerprintPKC.construction = ASN1Construction.constructed;
        fingerprintPKC.tagNumber = 0;
        const fingerprintPK: DERElement = this.fingerprintPK.toElement();
        fingerprintPK.tagClass = ASN1TagClass.context;
        fingerprintPK.construction = ASN1Construction.constructed;
        fingerprintPK.tagNumber = 1;
        return DERElement.fromSequence([
            this.issuerSerialNumber.toElement(),
            fingerprintPKC,
            fingerprintPK,
        ]);
    }

    public fromBytes (value: Uint8Array): PKCertIdentifier {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return PKCertIdentifier.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
