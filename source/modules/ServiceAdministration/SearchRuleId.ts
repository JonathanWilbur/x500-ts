import {
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ObjectIdentifier,
    ASN1UniversalType,
    ASN1Element,
} from "asn1-ts";
import * as errors from "../../errors";
import validateTag from "../../validateTag";

/**
 * `SearchRuleId ::= SEQUENCE {
 *   id          INTEGER,
 *   dmdId  [0]  OBJECT IDENTIFIER }`
 */
export default
class SearchRuleId {
    constructor (
        readonly id: number,
        readonly dmdId: ObjectIdentifier,
    ) {}

    public static fromElement (value: ASN1Element): SearchRuleId {
        const searchRuleIdElements: ASN1Element[] = value.sequence;
        if (searchRuleIdElements.length !== 2) {
            throw new errors.X500Error(
                "Invalid number of elements in ProtocolInformation. Expected "
                + `2, but received ${searchRuleIdElements.length}.`,
            );
        }
        validateTag(searchRuleIdElements[0], "SearchRuleId.id",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive ],
            [ ASN1UniversalType.integer ],
        );
        validateTag(searchRuleIdElements[1], "SearchRuleId.dmdId",
            [ ASN1TagClass.context ],
            [ ASN1Construction.primitive ],
            [ 0 ],
        );
        return new SearchRuleId(
            searchRuleIdElements[0].integer,
            searchRuleIdElements[1].objectIdentifier,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.id,
            ),
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                0,
                this.dmdId,
            ),
        ]);
    }

    public static fromBytes (value: Uint8Array): SearchRuleId {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return SearchRuleId.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
