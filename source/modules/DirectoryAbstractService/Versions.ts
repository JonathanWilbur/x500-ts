import { ASN1Construction, ASN1TagClass, ASN1UniversalType, DERElement, ASN1Element } from "asn1-ts";

/**
 * `Versions ::= BIT STRING {v1(0), v2(1)}`
 */
export default
class Versions {
    constructor (
        readonly v1: boolean,
        readonly v2: boolean,
    ) {}

    public static fromElement (value: ASN1Element): Versions {
        const bits: boolean[] = value.bitString;
        return new Versions(
            (bits.length > 0 ? bits[0] : false),
            (bits.length > 1 ? bits[1] : false),
        );
    }

    public toElement (): DERElement {
        const element: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.bitString,
        );
        element.bitString = [
            this.v1,
            this.v2,
        ];
        return element;
    }
}
