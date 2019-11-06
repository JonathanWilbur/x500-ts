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
import DITStructureRule from "../InformationFramework/DITStructureRule";
import RuleIdentifier from "../InformationFramework/RuleIdentifier";

/**
 * `DITStructureRuleDescription ::= SEQUENCE {
 *   COMPONENTS OF DITStructureRule,
 *   name         [1]  SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString OPTIONAL,
 *   obsolete          BOOLEAN DEFAULT FALSE,
 *   ... }`
 */
export default
class DITStructureRuleDescription {
    constructor (
        readonly ditStructureRule: DITStructureRule,
        readonly name: UnboundedDirectoryString[] | undefined,
        readonly description: UnboundedDirectoryString | undefined,
        readonly obsolete: boolean,
    ) {}

    public static fromElement (value: DERElement): DITStructureRuleDescription {
        let ruleIdentifier!: RuleIdentifier;
        let nameForm!: ObjectIdentifier;
        let superiorStructureRules: RuleIdentifier[] | undefined = undefined;
        let name: UnboundedDirectoryString[] | undefined = undefined;
        let description: UnboundedDirectoryString | undefined = undefined;
        let obsolete: boolean = false;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "ruleIdentifier",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    ruleIdentifier = el.integer;
                },
            },
            {
                name: "nameForm",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    nameForm = el.objectIdentifier;
                },
            },
            {
                name: "superiorStructureRules",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    // TODO: Validate tags.
                    superiorStructureRules = el.sizeConstrainedSetOf(1)
                        .map((ssr) => ssr.integer);
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
        const ditStructureRule = new DITStructureRule(ruleIdentifier, nameForm, superiorStructureRules);
        return new DITStructureRuleDescription(
            ditStructureRule,
            name,
            description,
            obsolete,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.ditStructureRule.ruleIdentifier,
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.ditStructureRule.nameForm,
            ),
            this.ditStructureRule.superiorStructureRules
                ? DERElement.fromSet(this.ditStructureRule.superiorStructureRules.map((ssr) => new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.objectIdentifier,
                    ssr,
                )))
                : undefined,
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
