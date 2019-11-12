import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
    ObjectIdentifier,
} from "asn1-ts";
import UnboundedDirectoryString from "../SelectedAttributeTypes/UnboundedDirectoryString";
import AttributeUsage from "../InformationFramework/AttributeUsage";

/**
 * `AttributeTypeInformation ::= SEQUENCE {
 *   derivation       [0]  ATTRIBUTE.&id             OPTIONAL,
 *   equalityMatch    [1]  MATCHING-RULE.&id         OPTIONAL,
 *   orderingMatch    [2]  MATCHING-RULE.&id         OPTIONAL,
 *   substringsMatch  [3]  MATCHING-RULE.&id         OPTIONAL,
 *   attributeSyntax  [4]  UnboundedDirectoryString  OPTIONAL,
 *   multi-valued     [5]  BOOLEAN                   DEFAULT TRUE,
 *   collective       [6]  BOOLEAN                   DEFAULT FALSE,
 *   userModifiable   [7]  BOOLEAN                   DEFAULT TRUE,
 *   application           AttributeUsage            DEFAULT userApplications,
 *   ... }`
 */
export default
class AttributeTypeInformation {
    constructor (
        readonly derivation: ObjectIdentifier | undefined,
        readonly equalityMatch: ObjectIdentifier | undefined,
        readonly orderingMatch: ObjectIdentifier | undefined,
        readonly substringsMatch: ObjectIdentifier | undefined,
        readonly attributeSyntax: UnboundedDirectoryString | undefined,
        readonly multiValued: boolean | undefined,
        readonly collective: boolean | undefined,
        readonly userModifiable: boolean | undefined,
        readonly application: AttributeUsage,
    ) {}

    public static fromElement (value: ASN1Element): AttributeTypeInformation {
        let derivation: ObjectIdentifier | undefined = undefined;
        let equalityMatch: ObjectIdentifier | undefined = undefined;
        let orderingMatch: ObjectIdentifier | undefined = undefined;
        let substringsMatch: ObjectIdentifier | undefined = undefined;
        let attributeSyntax: UnboundedDirectoryString | undefined = undefined;
        let multiValued: boolean | undefined = undefined;
        let collective: boolean | undefined = undefined;
        let userModifiable: boolean | undefined = undefined;
        let application: AttributeUsage = AttributeUsage.userApplications;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "derivation",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    derivation = el.objectIdentifier;
                },
            },
            {
                name: "equalityMatch",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    equalityMatch = el.objectIdentifier;
                },
            },
            {
                name: "orderingMatch",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    orderingMatch = el.objectIdentifier;
                },
            },
            {
                name: "substringsMatch",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    substringsMatch = el.objectIdentifier;
                },
            },
            {
                name: "attributeSyntax",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    attributeSyntax = UnboundedDirectoryString.fromElement(el as DERElement);
                },
            },
            {
                name: "multi",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.boolean,
                callback: (el: ASN1Element): void => {
                    multiValued = el.boolean;
                },
            },
            {
                name: "collective",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.boolean,
                callback: (el: ASN1Element): void => {
                    collective = el.boolean;
                },
            },
            {
                name: "userModifiable",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.boolean,
                callback: (el: ASN1Element): void => {
                    userModifiable = el.boolean;
                },
            },
            {
                name: "application",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.enumerated,
                callback: (el: ASN1Element): void => {
                    application = el.enumerated;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new AttributeTypeInformation(
            derivation,
            equalityMatch,
            orderingMatch,
            substringsMatch,
            attributeSyntax,
            multiValued,
            collective,
            userModifiable,
            application,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.derivation
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    0,
                    this.derivation,
                )
                : undefined,
            this.equalityMatch
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    1,
                    this.equalityMatch,
                )
                : undefined,
            this.orderingMatch
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    2,
                    this.orderingMatch,
                )
                : undefined,
            this.substringsMatch
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    3,
                    this.substringsMatch,
                )
                : undefined,
            this.attributeSyntax
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    4,
                    this.attributeSyntax,
                )
                : undefined,
            this.multiValued
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    5,
                    this.multiValued,
                )
                : undefined,
            this.collective
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    ASN1UniversalType.objectIdentifier,
                    this.collective,
                )
                : undefined,
            this.userModifiable
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    ASN1UniversalType.objectIdentifier,
                    this.userModifiable,
                )
                : undefined,
            this.application
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.objectIdentifier,
                    this.application,
                )
                : undefined,
        ]);
    }
}
