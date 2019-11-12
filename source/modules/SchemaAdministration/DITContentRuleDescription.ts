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
import DITContentRule from "../InformationFramework/DITContentRule";

/*
    DITContentRule ::= SEQUENCE {
    structuralObjectClass       OBJECT-CLASS.&id,
    auxiliaries                 SET SIZE (1..MAX) OF OBJECT-CLASS.&id OPTIONAL,
    mandatory              [1]  SET SIZE (1..MAX) OF ATTRIBUTE.&id    OPTIONAL,
    optional               [2]  SET SIZE (1..MAX) OF ATTRIBUTE.&id    OPTIONAL,
    precluded              [3]  SET SIZE (1..MAX) OF ATTRIBUTE.&id    OPTIONAL,
    ... }
 */

/**
 * `DITContentRuleDescription ::= SEQUENCE {
 *   COMPONENTS OF DITContentRule,
 *   name         [4]  SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString OPTIONAL,
 *   obsolete          BOOLEAN DEFAULT FALSE,
 *   ... }`
 */
export default
class DITContentRuleDescription {
    constructor (
        readonly ditContentRule: DITContentRule,
        readonly name: UnboundedDirectoryString[] | undefined,
        readonly description: UnboundedDirectoryString | undefined,
        readonly obsolete: boolean,
    ) {}

    public static fromElement (value: ASN1Element): DITContentRuleDescription {
        let structuralObjectClass!: ObjectIdentifier;
        let auxiliaries: ObjectIdentifier[] | undefined = undefined;
        let mandatory: ObjectIdentifier[] | undefined = undefined;
        let optional: ObjectIdentifier[] | undefined = undefined;
        let precluded: ObjectIdentifier[] | undefined = undefined;
        let name: UnboundedDirectoryString[] | undefined = undefined;
        let description: UnboundedDirectoryString | undefined = undefined;
        let obsolete: boolean = false;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "structuralObjectClass",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    structuralObjectClass = el.objectIdentifier;
                },
            },
            {
                name: "auxiliaries",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.set,
                callback: (el: ASN1Element): void => {
                    auxiliaries = el.sizeConstrainedSetOf(1)
                        .map((a) => a.objectIdentifier);
                },
            },
            {
                name: "mandatory",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    mandatory = el.sizeConstrainedSetOf(1)
                        .map((a) => a.objectIdentifier);
                },
            },
            {
                name: "optional",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    optional = el.sizeConstrainedSetOf(1)
                        .map((a) => a.objectIdentifier);
                },
            },
            {
                name: "precluded",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    precluded = el.sizeConstrainedSetOf(1)
                        .map((a) => a.objectIdentifier);
                },
            },
            {
                name: "name",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.set,
                callback: (el: ASN1Element): void => {
                    name = el.sizeConstrainedSetOf(1)
                        .map((n) => UnboundedDirectoryString.fromElement(n as DERElement));
                },
            },
            {
                name: "description",
                optional: true,
                tagClass: ASN1TagClass.universal,
                callback: (el: ASN1Element): void => {
                    description = UnboundedDirectoryString.fromElement(el as DERElement);
                },
            },
            {
                name: "obsolete",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.boolean,
                callback: (el: ASN1Element): void => {
                    obsolete = el.boolean;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        const ditContentRule = new DITContentRule(
            structuralObjectClass,
            auxiliaries,
            mandatory,
            optional,
            precluded,
        );
        return new DITContentRuleDescription(
            ditContentRule,
            name,
            description,
            obsolete,
        );
    }

    public toElement (): DERElement {
        let auxiliariesElement: DERElement | undefined = undefined;
        if (this.ditContentRule.auxiliaries) {
            auxiliariesElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.constructed,
                ASN1UniversalType.set,
            );
            auxiliariesElement.set = this.ditContentRule.auxiliaries.map((a) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                a,
            ));
        }
        let mandatoryElement: DERElement | undefined = undefined;
        if (this.ditContentRule.mandatory) {
            mandatoryElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
                this.ditContentRule.mandatory,
            );
            mandatoryElement.set = this.ditContentRule.mandatory.map((m) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                m,
            ));
        }
        let optionalElement: DERElement | undefined = undefined;
        if (this.ditContentRule.optional) {
            optionalElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                2,
            );
            optionalElement.set = this.ditContentRule.optional.map((o) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                o,
            ));
        }
        let precludedElement: DERElement | undefined = undefined;
        if (this.ditContentRule.precluded) {
            precludedElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                3,
            );
            precludedElement.set = this.ditContentRule.precluded.map((p) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                p,
            ));
        }

        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.ditContentRule.structuralObjectClass,
            ),
            auxiliariesElement,
            mandatoryElement,
            optionalElement,
            precludedElement,
            this.name
                ? DERElement.fromSet(this.name.map((n) => n.toElement()))
                : undefined,
            this.description
                ? this.description.toElement()
                : undefined,
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.boolean,
                this.obsolete,
            ),
        ]);
    }
}
