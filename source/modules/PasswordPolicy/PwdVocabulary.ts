import { ASN1Construction, ASN1TagClass, ASN1UniversalType, DERElement, ASN1Element } from "asn1-ts";

/**
 * This specifies the type of words that are forbidden to be used for
 * passwords. If a bit is set, the corresponding type of word is not allowed
 * to be used on its own as a password.
 *
 * `PwdVocabulary ::=  BIT STRING {
 *   noDictionaryWords   (0),
 *   noPersonNames       (1),
 *   noGeographicalNames (2) }`
 */
export default
class PwdVocabulary {
    constructor (
        readonly noDictionaryWords: boolean = false,
        readonly noPersonNames: boolean = false,
        readonly noGeographicalNames: boolean = false,
    ) {}

    public static fromElement (value: ASN1Element): PwdVocabulary {
        const bits: boolean[] = value.bitString;
        return new PwdVocabulary(
            (bits.length > 0 ? bits[0] : false),
            (bits.length > 1 ? bits[1] : false),
            (bits.length > 2 ? bits[2] : false),
        );
    }

    public toElement (): DERElement {
        const element: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.bitString,
        );
        element.bitString = [
            this.noDictionaryWords,
            this.noPersonNames,
            this.noGeographicalNames,
        ];
        return element;
    }

    public static fromBytes (value: Uint8Array): PwdVocabulary {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return PwdVocabulary.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
