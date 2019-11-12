import { ASN1Construction, ASN1TagClass, ASN1UniversalType, DERElement, ASN1Element } from "asn1-ts";

/**
 * `GrantsAndDenials ::= BIT STRING {
 *   -- permissions that may be used in conjunction
 *   -- with any component of ProtectedItems
 *   grantAdd             (0),
 *   denyAdd              (1),
 *   grantDiscloseOnError (2),
 *   denyDiscloseOnError  (3),
 *   grantRead            (4),
 *   denyRead             (5),
 *   grantRemove          (6),
 *   denyRemove           (7),
 *   -- permissions that may be used only in conjunction
 *   -- with the entry component
 *   grantBrowse          (8),
 *   denyBrowse           (9),
 *   grantExport          (10),
 *   denyExport           (11),
 *   grantImport          (12),
 *   denyImport           (13),
 *   grantModify          (14),
 *   denyModify           (15),
 *   grantRename          (16),
 *   denyRename           (17),
 *   grantReturnDN        (18),
 *   denyReturnDN         (19),
 *   -- permissions that may be used in conjunction
 *   -- with any component, except entry, of ProtectedItems
 *   grantCompare         (20),
 *   denyCompare          (21),
 *   grantFilterMatch     (22),
 *   denyFilterMatch      (23),
 *   grantInvoke          (24),
 *   denyInvoke           (25) }`
 */
export default
class GrantsAndDenials {
    constructor (
        readonly grantAdd: boolean,
        readonly denyAdd: boolean,
        readonly grantDiscloseOnError: boolean,
        readonly denyDiscloseOnError: boolean,
        readonly grantRead: boolean,
        readonly denyRead: boolean,
        readonly grantRemove: boolean,
        readonly denyRemove: boolean,
        readonly grantBrowse: boolean,
        readonly denyBrowse: boolean,
        readonly grantExport: boolean,
        readonly denyExport: boolean,
        readonly grantImport: boolean,
        readonly denyImport: boolean,
        readonly grantModify: boolean,
        readonly denyModify: boolean,
        readonly grantRename: boolean,
        readonly denyRename: boolean,
        readonly grantReturnDN: boolean,
        readonly denyReturnDN: boolean,
        readonly grantCompare: boolean,
        readonly denyCompare: boolean,
        readonly grantFilterMatch: boolean,
        readonly denyFilterMatch: boolean,
        readonly grantInvoke: boolean,
        readonly denyInvoke: boolean,
    ) {}

    public static fromElement (value: ASN1Element): GrantsAndDenials {
        const bits: boolean[] = value.bitString;
        return new GrantsAndDenials(
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
            (bits.length > 18 ? bits[18] : false),
            (bits.length > 19 ? bits[19] : false),
            (bits.length > 20 ? bits[20] : false),
            (bits.length > 21 ? bits[21] : false),
            (bits.length > 22 ? bits[22] : false),
            (bits.length > 23 ? bits[23] : false),
            (bits.length > 24 ? bits[24] : false),
            (bits.length > 25 ? bits[25] : false),
        );
    }

    public toElement (): DERElement {
        const element: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.bitString,
        );
        element.bitString = [
            this.grantAdd,
            this.denyAdd,
            this.grantDiscloseOnError,
            this.denyDiscloseOnError,
            this.grantRead,
            this.denyRead,
            this.grantRemove,
            this.denyRemove,
            this.grantBrowse,
            this.denyBrowse,
            this.grantExport,
            this.denyExport,
            this.grantImport,
            this.denyImport,
            this.grantModify,
            this.denyModify,
            this.grantRename,
            this.denyRename,
            this.grantReturnDN,
            this.denyReturnDN,
            this.grantCompare,
            this.denyCompare,
            this.grantFilterMatch,
            this.denyFilterMatch,
            this.grantInvoke,
            this.denyInvoke,
        ];
        return element;
    }

    public static fromBytes (value: Uint8Array): GrantsAndDenials {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return GrantsAndDenials.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
