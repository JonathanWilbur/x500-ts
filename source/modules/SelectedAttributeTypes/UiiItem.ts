import {
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ObjectIdentifier,
    ASN1UniversalType,
} from "asn1-ts";
import * as errors from "../../errors";
import validateTag from "../../validateTag";

/**
 * `UiiItem ::= SEQUENCE {
 *   type   ATTRIBUTE.&id,
 *   length INTEGER OPTIONAL }`
 */
export default
class UiiItem {
    constructor (
        readonly type: ObjectIdentifier,
        readonly length: number | undefined,
    ) {}

    public static fromElement (value: DERElement): UiiItem {
        const uiiItemElements: DERElement[] = value.sequence;
        if (uiiItemElements.length < 1) {
            throw new errors.X500Error("Empty UiiItem.");
        }
        validateTag(uiiItemElements[0], "UiiItem.type",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive ],
            [ ASN1UniversalType.objectIdentifier ],
        );
        validateTag(uiiItemElements[1], "UiiItem.length",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive ],
            [ ASN1UniversalType.integer ],
        );
        return new UiiItem(
            uiiItemElements[0].objectIdentifier,
            uiiItemElements.length === 2
                ? uiiItemElements[1].integer
                : undefined,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.type,
            ),
            this.length
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.length,
                )
                : undefined,
        ]);
    }

    public static fromBytes (value: Uint8Array): UiiItem {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return UiiItem.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
