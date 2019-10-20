import AlgorithmIdentifier from "./AlgorithmIdentifier";
import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, ASN1Element } from "asn1-ts";
import validateConstruction from "../../validateConstruction";

/**
 * `SIGNATURE ::= SEQUENCE {
 *     algorithmIdentifier  AlgorithmIdentifier{{SupportedAlgorithms}},
 *     signature            BIT STRING,
 *     ... }`
 */
export default
class SIGNATURE {
    constructor (
        readonly algorithmIdentifier: AlgorithmIdentifier,
        readonly signature: boolean[],
    ) {}

    public static fromElement (value: DERElement): SIGNATURE {
        let algorithmIdentifier!: AlgorithmIdentifier;
        let signature!: boolean[];
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
                name: "signature",
                optional: true,
                tagClass: ASN1TagClass.context,
                callback: (el: ASN1Element): void => {
                    signature = el.bitString;
                },
            },
        ];
        validateConstruction([ value ], specification);
        return new SIGNATURE(
            algorithmIdentifier,
            signature,
        );
    }

    public toElement (): DERElement {
        const signatureValueElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.bitString,
        );
        signatureValueElement.bitString = this.signature;
        const signatureElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.sequence,
        );
        signatureElement.sequence = [
            this.algorithmIdentifier.toElement(),
            signatureValueElement,
        ];
        return signatureElement;
    }

    public static fromBytes (value: Uint8Array): SIGNATURE {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return SIGNATURE.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
