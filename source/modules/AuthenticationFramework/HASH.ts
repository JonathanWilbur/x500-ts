import AlgorithmIdentifier from "./AlgorithmIdentifier";
import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, ASN1Element } from "asn1-ts";
import validateConstruction from "../../validateConstruction";

/**
 * `HASH{ToBeHashed} ::= SEQUENCE {
 *   algorithmIdentifier  AlgorithmIdentifier{{SupportedAlgorithms}},
 *   hashValue            BIT STRING (CONSTRAINED BY {
 *    -- shall be the result of applying a hashing procedure to the DER-encoded
 *    -- octets of a value of -- ToBeHashed } ),
 *   ... }`
 */
export default
class HASH {
    constructor (
        readonly algorithmIdentifier: AlgorithmIdentifier,
        readonly hashValue: boolean[],
    ) {}

    public static fromElement (value: DERElement): HASH {
        let algorithmIdentifier!: AlgorithmIdentifier;
        let hashValue!: boolean[];
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
                name: "hashValue",
                optional: true,
                tagClass: ASN1TagClass.context,
                callback: (el: ASN1Element): void => {
                    hashValue = el.bitString;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new HASH(algorithmIdentifier, hashValue);
    }

    public toElement (): DERElement {
        const hashValueElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.bitString,
        );
        hashValueElement.bitString = this.hashValue;
        const hashElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.sequence,
        );
        hashElement.sequence = [
            this.algorithmIdentifier.toElement(),
            hashValueElement,
        ];
        return hashElement;
    }

    public static fromBytes (value: Uint8Array): HASH {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return HASH.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
