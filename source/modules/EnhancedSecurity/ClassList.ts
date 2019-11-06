import { ASN1Construction, ASN1TagClass, ASN1UniversalType, DERElement } from "asn1-ts";

/**
 * `ClassList ::= BIT STRING {
 *   unmarked      (0),
 *   unclassified  (1),
 *   restricted    (2),
 *   confidential  (3),
 *   secret        (4),
 *   topSecret     (5)}`
 */
export default
class ClassList {
    constructor (
        readonly unmarked: boolean,
        readonly unclassified: boolean,
        readonly restricted: boolean,
        readonly confidential: boolean,
        readonly secret: boolean,
        readonly topSecret: boolean,
    ) {}

    public static fromElement (value: DERElement): ClassList {
        const bits: boolean[] = value.bitString;
        return new ClassList(
            (bits.length >  0 ? bits[ 0] : false),
            (bits.length >  1 ? bits[ 1] : false),
            (bits.length >  2 ? bits[ 2] : false),
            (bits.length >  3 ? bits[ 3] : false),
            (bits.length >  4 ? bits[ 4] : false),
            (bits.length >  5 ? bits[ 5] : false),
        );
    }

    public toElement (): DERElement {
        const element: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.bitString,
        );
        element.bitString = [
            this.unmarked,
            this.unclassified,
            this.restricted,
            this.confidential,
            this.secret,
            this.topSecret,
        ];
        return element;
    }
}
