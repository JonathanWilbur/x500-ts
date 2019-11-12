import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, ASN1Element } from "asn1-ts";

/**
 * `AllowedSubset ::= BIT STRING {baseObject(0), oneLevel(1), wholeSubtree(2)}`
 */
export default
class AllowedSubset {
    constructor (
        readonly baseObject: boolean,
        readonly oneLevel: boolean,
        readonly wholeSubtree: boolean,
    ) {}

    public static fromElement (value: ASN1Element): AllowedSubset {
        const bits: boolean[] = value.bitString;
        return new AllowedSubset(
            ((bits.length > 0) ? bits[0] : false),
            ((bits.length > 1) ? bits[1] : false),
            ((bits.length > 2) ? bits[2] : false),
        );
    }

    public toElement (): DERElement {
        const keyUsageElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.bitString,
        );
        keyUsageElement.bitString = [
            this.baseObject,
            this.oneLevel,
            this.wholeSubtree,
        ];
        return keyUsageElement;
    }

    public static fromBytes (value: Uint8Array): AllowedSubset {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return AllowedSubset.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
