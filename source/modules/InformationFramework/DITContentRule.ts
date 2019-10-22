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

/**
 * `DITContentRule ::= SEQUENCE {
 *   structuralObjectClass       OBJECT-CLASS.&id,
 *   auxiliaries                 SET SIZE (1..MAX) OF OBJECT-CLASS.&id OPTIONAL,
 *   mandatory              [1]  SET SIZE (1..MAX) OF ATTRIBUTE.&id    OPTIONAL,
 *   optional               [2]  SET SIZE (1..MAX) OF ATTRIBUTE.&id    OPTIONAL,
 *   precluded              [3]  SET SIZE (1..MAX) OF ATTRIBUTE.&id    OPTIONAL,
 *   ... }`
 */
export default
class DITContentRule {
    constructor (
        readonly structuralObjectClass: ObjectIdentifier,
        readonly auxiliaries: ObjectIdentifier[] | undefined,
        readonly mandatory: ObjectIdentifier[] | undefined,
        readonly optional: ObjectIdentifier[] | undefined,
        readonly precluded: ObjectIdentifier[] | undefined,
    ) {}

    public static fromElement (value: DERElement): DITContentRule {
        let structuralObjectClass!: ObjectIdentifier;
        let auxiliaries: ObjectIdentifier[] | undefined = undefined;
        let mandatory: ObjectIdentifier[] | undefined = undefined;
        let optional: ObjectIdentifier[] | undefined = undefined;
        let precluded: ObjectIdentifier[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "structuralObjectClass",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    structuralObjectClass = (el as DERElement).objectIdentifier;
                },
            },
            {
                name: "auxiliaries",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.set,
                callback: (el: ASN1Element): void => {
                    auxiliaries = el.sizeConstrainedSetOf(1).map((x) => x.objectIdentifier);
                },
            },
            {
                name: "mandatory",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    mandatory = el.sizeConstrainedSetOf(1).map((x) => x.objectIdentifier);
                },
            },
            {
                name: "optional",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    optional = el.sizeConstrainedSetOf(1).map((x) => x.objectIdentifier);
                },
            },
            {
                name: "precluded",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    precluded = el.sizeConstrainedSetOf(1).map((x) => x.objectIdentifier);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new DITContentRule(
            structuralObjectClass,
            auxiliaries,
            mandatory,
            optional,
            precluded,
        );
    }

    public toElement (): DERElement {
        const ditContentRuleElements: DERElement[] = [];

        let structuralObjectClassElement: DERElement | undefined = undefined;
        structuralObjectClassElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.primitive,
            ASN1UniversalType.objectIdentifier,
        );
        structuralObjectClassElement.objectIdentifier = this.structuralObjectClass;
        ditContentRuleElements.push(structuralObjectClassElement);

        let auxiliariesElement: DERElement | undefined = undefined;
        if (this.auxiliaries) {
            auxiliariesElement = DERElement.fromSet(this.auxiliaries.map((x) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                x,
            )));
            ditContentRuleElements.push(auxiliariesElement);
        }

        let mandatoryElement: DERElement | undefined = undefined;
        if (this.mandatory) {
            mandatoryElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
            mandatoryElement.set = this.mandatory.map((x) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                x,
            ));
            ditContentRuleElements.push(mandatoryElement);
        }

        let optionalElement: DERElement | undefined = undefined;
        if (this.optional) {
            optionalElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                2,
            );
            optionalElement.set = this.optional.map((x) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                x,
            ));
            ditContentRuleElements.push(optionalElement);
        }

        let precludedElement: DERElement | undefined = undefined;
        if (this.precluded) {
            precludedElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                3,
            );
            precludedElement.set = this.precluded.map((x) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                x,
            ));
            ditContentRuleElements.push(precludedElement);
        }

        return DERElement.fromSequence(ditContentRuleElements);
    }

    public static fromBytes (value: Uint8Array): DITContentRule {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return DITContentRule.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
