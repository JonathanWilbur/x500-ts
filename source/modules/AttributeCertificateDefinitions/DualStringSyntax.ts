import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "asn1-ts";
import * as errors from "../../errors";
import UnboundedDirectoryString from "../SelectedAttributeTypes/UnboundedDirectoryString";

/**
 * `DualStringSyntax ::= SEQUENCE {
 *   operation  [0]  UnboundedDirectoryString,
 *   object     [1]  UnboundedDirectoryString,
 *   ... }`
 */
export default class DualStringSyntax {
    constructor (
        readonly operation: UnboundedDirectoryString,
        readonly object: UnboundedDirectoryString,
    ) {}

    public static fromElement (value: DERElement): DualStringSyntax {
        const dualStringSyntaxElements: DERElement[] = value.sequence;
        if (dualStringSyntaxElements.length < 2) {
            throw new errors.X500Error("Too few elements in DualStringSyntax.");
        }

        if (dualStringSyntaxElements[0].tagClass !== ASN1TagClass.context) {
            throw new errors.X500Error("DualStringSyntax.operation was not of CONTEXT-SPECIFIC class.");
        }
        if (dualStringSyntaxElements[1].tagClass !== ASN1TagClass.context) {
            throw new errors.X500Error("DualStringSyntax.object was not of CONTEXT-SPECIFIC class.");
        }

        if (dualStringSyntaxElements[0].tagNumber !== 0) {
            throw new errors.X500Error("DualStringSyntax.operation did not have a tag number of 0.");
        }
        if (dualStringSyntaxElements[1].tagNumber !== 1) {
            throw new errors.X500Error("DualStringSyntax.object did not have a tag number of 1.");
        }

        return new DualStringSyntax(
            UnboundedDirectoryString.fromElement(dualStringSyntaxElements[0]),
            UnboundedDirectoryString.fromElement(dualStringSyntaxElements[1]),
        );
    }

    public toElement (): DERElement {
        const dualStringSyntaxElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.sequence,
        );
        dualStringSyntaxElement.sequence = [
            this.operation.toElement(),
            this.object.toElement(),
        ];
        return dualStringSyntaxElement;
    }

    public static fromBytes (value: Uint8Array): DualStringSyntax {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return DualStringSyntax.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
