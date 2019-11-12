import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType, ASN1Element } from "asn1-ts";

/**
 * `RequestAuthenticationPolicy ::= BIT STRING {none(0), simpleName(1), strong(2)}`
 */
export default
class RequestAuthenticationPolicy {
    constructor (
        readonly none: boolean,
        readonly simpleName: boolean,
        readonly strong: boolean,
    ) {}

    public static fromElement (value: ASN1Element): RequestAuthenticationPolicy {
        const bits: boolean[] = value.bitString;
        return new RequestAuthenticationPolicy(
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
            this.none,
            this.simpleName,
            this.strong,
        ];
        return ret;
    }
}
