import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, ASN1Element } from "asn1-ts";

/**
 * `OnlyCertificateTypes ::= BIT STRING {user(0), authority(1), attribute(2)}`
 */
export default
class OnlyCertificateTypes {
    constructor (
        readonly user: boolean,
        readonly authority: boolean,
        readonly attribute: boolean,
    ) {}

    public static fromElement (value: ASN1Element): OnlyCertificateTypes {
        const bits: boolean[] = value.bitString;
        return new OnlyCertificateTypes(
            ((bits.length >=  1) ? bits[0] : false),
            ((bits.length >=  2) ? bits[1] : false),
            ((bits.length >=  3) ? bits[2] : false),
        );
    }

    public toElement (): DERElement {
        const ret: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.bitString,
        );
        ret.bitString = [
            this.user,
            this.authority,
            this.attribute,
        ];
        return ret;
    }
}
