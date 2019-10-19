import AlgorithmIdentifier from "./AlgorithmIdentifier";
import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, ASN1Element } from "asn1-ts";
import validateConstruction from "../../validateConstruction";

/**
 * `FINGERPRINT {ToBeFingerprinted} ::= SEQUENCE {
 *   algorithmIdentifier  AlgorithmIdentifier{{SupportedAlgorithms}},
 *   fingerprint          BIT STRING,
 *   ... }`
 */
export default
class FINGERPRINT {
    constructor (
        readonly algorithmIdentifier: AlgorithmIdentifier,
        readonly fingerprint: boolean[],
    ) {}

    public static fromElement (value: DERElement): FINGERPRINT {
        let algorithmIdentifier!: AlgorithmIdentifier;
        let fingerprint!: boolean[];
        const specification = [
            {
                name: "algorithmIdentifier",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    algorithmIdentifier = AlgorithmIdentifier.fromElement(el as DERElement);
                },
            },
            {
                name: "fingerprint",
                optional: true,
                tagClass: ASN1TagClass.context,
                callback: (el: ASN1Element): void => {
                    fingerprint = el.bitString;
                },
            },
        ];
        validateConstruction([ value ], specification);
        return new FINGERPRINT(
            algorithmIdentifier,
            fingerprint,
        );
    }

    public toElement (): DERElement {
        const fingerprintValueElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.bitString,
        );
        fingerprintValueElement.bitString = this.fingerprint;
        const signatureElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.sequence,
        );
        signatureElement.sequence = [
            this.algorithmIdentifier.toElement(),
            fingerprintValueElement,
        ];
        return signatureElement;
    }

    public static fromBytes (value: Uint8Array): FINGERPRINT {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return FINGERPRINT.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
