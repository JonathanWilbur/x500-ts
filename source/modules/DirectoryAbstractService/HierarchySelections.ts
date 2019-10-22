import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "asn1-ts";

/**
 * `HierarchySelections ::= BIT STRING {
 *   self                  (0),
 *   children              (1),
 *   parent                (2),
 *   hierarchy             (3),
 *   top                   (4),
 *   subtree               (5),
 *   siblings              (6),
 *   siblingChildren       (7),
 *   siblingSubtree        (8),
 *   all                   (9) }`
 */
export default
class HierarchySelections {
    constructor (
        readonly self: boolean,
        readonly children: boolean,
        readonly parent: boolean,
        readonly hierarchy: boolean,
        readonly top: boolean,
        readonly subtree: boolean,
        readonly siblings: boolean,
        readonly siblingChildren: boolean,
        readonly siblingSubtree: boolean,
        readonly all: boolean,
    ) {}

    public static fromElement (value: DERElement): HierarchySelections {
        const bits: boolean[] = value.bitString;
        return new HierarchySelections(
            ((bits.length >  0) ? bits[ 0] : false),
            ((bits.length >  1) ? bits[ 1] : false),
            ((bits.length >  2) ? bits[ 2] : false),
            ((bits.length >  3) ? bits[ 3] : false),
            ((bits.length >  4) ? bits[ 4] : false),
            ((bits.length >  5) ? bits[ 5] : false),
            ((bits.length >  6) ? bits[ 6] : false),
            ((bits.length >  7) ? bits[ 7] : false),
            ((bits.length >  8) ? bits[ 8] : false),
            ((bits.length >  9) ? bits[ 9] : false),
        );
    }

    public toElement (): DERElement {
        const keyUsageElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.bitString,
        );
        keyUsageElement.bitString = [
            this.self,
            this.children,
            this.parent,
            this.hierarchy,
            this.top,
            this.subtree,
            this.siblings,
            this.siblingChildren,
            this.siblingSubtree,
            this.all,
        ];
        return keyUsageElement;
    }

    public static fromBytes (value: Uint8Array): HierarchySelections {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return HierarchySelections.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
