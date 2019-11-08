import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "asn1-ts";

/**
 * `PeerEntityAuthenticationPolicy ::= BIT STRING {
 *   none(0),
 *   nameOnly(1),
 *   simpleUnprotected(2),
 *   simpleProtected(3),
 *   strong(4),
 *   external(5)}`
 */
export default
class PeerEntityAuthenticationPolicy {
    constructor (
        readonly none: boolean,
        readonly nameOnly: boolean,
        readonly simpleUnprotected: boolean,
        readonly simpleProtected: boolean,
        readonly strong: boolean,
        readonly external: boolean,
    ) {}

    public static fromElement (value: DERElement): PeerEntityAuthenticationPolicy {
        const bits: boolean[] = value.bitString;
        return new PeerEntityAuthenticationPolicy(
            ((bits.length >=  1) ? bits[0] : false),
            ((bits.length >=  2) ? bits[1] : false),
            ((bits.length >=  3) ? bits[2] : false),
            ((bits.length >=  4) ? bits[3] : false),
            ((bits.length >=  5) ? bits[4] : false),
            ((bits.length >=  6) ? bits[5] : false),
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
            this.nameOnly,
            this.simpleUnprotected,
            this.simpleProtected,
            this.strong,
            this.external,
        ];
        return ret;
    }
}
