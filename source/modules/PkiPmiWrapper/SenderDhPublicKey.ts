import AlgorithmIdentifier from "../AuthenticationFramework/AlgorithmIdentifier";
import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, ASN1Element } from "asn1-ts";
import validateConstruction from "../../validateConstruction";

/**
 * `SenderDhPublicKey ::= SEQUENCE {
 *   algorithm   AlgorithmIdentifier {{SupportedDHPublicKeyAlgorithms}},
 *   publicKey   BIT STRING,
 *   ... }`
 */
export default
class SenderDhPublicKey {
    constructor (
        readonly algorithmIdentifier: AlgorithmIdentifier,
        readonly publicKey: boolean[],
    ) {}

    public static fromElement (value: DERElement): SenderDhPublicKey {
        let algorithmIdentifier!: AlgorithmIdentifier;
        let publicKey!: boolean[];
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
                name: "publicKey",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.bitString,
                callback: (el: ASN1Element): void => {
                    publicKey = el.bitString;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new SenderDhPublicKey(algorithmIdentifier, publicKey);
    }

    public toElement (): DERElement {
        const signatureValueElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.bitString,
        );
        signatureValueElement.bitString = this.publicKey;
        return DERElement.fromSequence([
            this.algorithmIdentifier.toElement(),
            signatureValueElement,
        ]);
    }

    public static fromBytes (value: Uint8Array): SenderDhPublicKey {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return SenderDhPublicKey.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
