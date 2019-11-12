import { ASN1Construction, ASN1TagClass, ASN1UniversalType, DERElement, ASN1Element } from "asn1-ts";

/**
 * `DSEType ::= BIT STRING {
 *   root           (0),  -- root DSE
 *   glue           (1),  -- represents knowledge of a name only
 *   cp             (2),  -- context prefix
 *   entry          (3),  -- object entry
 *   alias          (4),  -- alias entry
 *   subr           (5),  -- subordinate reference
 *   nssr           (6),  -- non-specific subordinate reference
 *   supr           (7),  -- superior reference
 *   xr             (8),  -- cross reference
 *   admPoint       (9),  -- administrative point
 *   subentry       (10), -- subentry
 *   shadow         (11), -- shadow copy
 *   immSupr        (13), -- immediate superior reference
 *   rhob           (14), -- rhob information
 *   sa             (15), -- subordinate reference to alias entry
 *   dsSubentry     (16), -- DSA Specific subentry
 *   familyMember   (17), -- family member
 *   ditBridge      (18)} -- DIT bridge reference
 * --writeableCopy  (19)     writeable copy (currently not used)`
 */
export default
class DSEType {
    constructor (
        readonly root: boolean,
        readonly glue: boolean,
        readonly cp: boolean,
        readonly entry: boolean,
        readonly alias: boolean,
        readonly subr: boolean,
        readonly nssr: boolean,
        readonly supr: boolean,
        readonly xr: boolean,
        readonly admPoint: boolean,
        readonly subentry: boolean,
        readonly shadow: boolean,
        readonly immSupr: boolean,
        readonly rhob: boolean,
        readonly sa: boolean,
        readonly dsSubentry: boolean,
        readonly familyMember: boolean,
        readonly ditBridge: boolean,
    ) {}

    public static fromElement (value: ASN1Element): DSEType {
        const bits: boolean[] = value.bitString;
        return new DSEType(
            (bits.length >  0 ? bits[ 0] : false),
            (bits.length >  1 ? bits[ 1] : false),
            (bits.length >  2 ? bits[ 2] : false),
            (bits.length >  3 ? bits[ 3] : false),
            (bits.length >  4 ? bits[ 4] : false),
            (bits.length >  5 ? bits[ 5] : false),
            (bits.length >  6 ? bits[ 6] : false),
            (bits.length >  7 ? bits[ 7] : false),
            (bits.length >  8 ? bits[ 8] : false),
            (bits.length >  9 ? bits[ 9] : false),
            (bits.length > 10 ? bits[10] : false),
            (bits.length > 11 ? bits[11] : false),
            (bits.length > 12 ? bits[12] : false),
            (bits.length > 13 ? bits[13] : false),
            (bits.length > 14 ? bits[14] : false),
            (bits.length > 15 ? bits[15] : false),
            (bits.length > 16 ? bits[16] : false),
            (bits.length > 17 ? bits[17] : false),
        );
    }

    public toElement (): DERElement {
        const element: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.bitString,
        );
        element.bitString = [
            this.root,
            this.glue,
            this.cp,
            this.entry,
            this.alias,
            this.subr,
            this.nssr,
            this.supr,
            this.xr,
            this.admPoint,
            this.subentry,
            this.shadow,
            this.immSupr,
            this.rhob,
            this.sa,
            this.dsSubentry,
            this.familyMember,
            this.ditBridge,
        ];
        return element;
    }

    public static fromBytes (value: Uint8Array): DSEType {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return DSEType.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
