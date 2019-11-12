import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
    ASN1UniversalType,
} from "asn1-ts";
import AttributeType from "../InformationFramework/AttributeType";

/**
 * `TypeAndContextAssertion ::= SEQUENCE {
 *   type               AttributeType,
 *   contextAssertions  CHOICE {
 *     preference         SEQUENCE OF ContextAssertion,
 *     all                SET OF ContextAssertion,
 *     ...},
 *   ... }`
 */
export default
class SortKey {
    constructor (
        readonly type: AttributeType,
        readonly contextAssertions: ASN1Element,
    ) {}

    public static fromElement (value: ASN1Element): SortKey {
        let type!: AttributeType;
        let contextAssertions!: ASN1Element;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "type",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    type = el.objectIdentifier;
                },
            },
            {
                name: "contextAssertions",
                optional: false,
                callback: (el: ASN1Element): void => {
                    contextAssertions = el;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new SortKey(type, contextAssertions);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.type,
            ),
            this.contextAssertions as DERElement,
        ]);
    }
}
