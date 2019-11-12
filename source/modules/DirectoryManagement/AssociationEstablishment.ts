import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, ASN1Element } from "asn1-ts";

/**
 * `AssociationEstablishment ::= BIT STRING {inward(0), outward(1)}`
 */
export default
class AssociationEstablishment {
    constructor (
        readonly inward: boolean,
        readonly outward: boolean,
    ) {}

    public static fromElement (value: ASN1Element): AssociationEstablishment {
        const bits: boolean[] = value.bitString;
        return new AssociationEstablishment(
            ((bits.length >=  1) ? bits[0] : false),
            ((bits.length >=  2) ? bits[1] : false),
        );
    }

    public toElement (): DERElement {
        const ret: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.bitString,
        );
        ret.bitString = [
            this.inward,
            this.outward,
        ];
        return ret;
    }
}
