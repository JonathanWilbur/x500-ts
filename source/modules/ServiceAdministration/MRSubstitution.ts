import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ObjectIdentifier,
    ASN1UniversalType,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import AttributeType from "../InformationFramework/AttributeType";

/**
 * `MRSubstitution ::= SEQUENCE {
 *   attribute             AttributeType,
 *   oldMatchingRule  [0]  MATCHING-RULE.&id OPTIONAL,
 *   newMatchingRule  [1]  MATCHING-RULE.&id OPTIONAL,
 *   ... }`
 */
export default
class MRSubstitution {
    constructor (
        readonly attribute: AttributeType,
        readonly oldMatchingRule: ObjectIdentifier | undefined,
        readonly newMatchingRule: ObjectIdentifier | undefined,
    ) {}

    public static fromElement (value: DERElement): MRSubstitution {
        let attribute!: AttributeType;
        let oldMatchingRule: ObjectIdentifier | undefined = undefined;
        let newMatchingRule: ObjectIdentifier | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "attribute",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    attribute = (el as DERElement).objectIdentifier;
                },
            },
            {
                name: "oldMatchingRule",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    oldMatchingRule = (el as DERElement).objectIdentifier;
                },
            },
            {
                name: "newMatchingRule",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    newMatchingRule = (el as DERElement).objectIdentifier;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new MRSubstitution(
            attribute,
            oldMatchingRule,
            newMatchingRule,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.attribute,
            ),
            this.oldMatchingRule
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    0,
                    this.oldMatchingRule,
                )
                : undefined,
            this.newMatchingRule
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    1,
                    this.newMatchingRule,
                )
                : undefined,
        ]);
    }

    public static fromBytes (value: Uint8Array): MRSubstitution {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return MRSubstitution.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
