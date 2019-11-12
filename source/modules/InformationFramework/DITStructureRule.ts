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
import RuleIdentifier from "./RuleIdentifier";

/**
 * `DITStructureRule ::= SEQUENCE {
 *   ruleIdentifier          RuleIdentifier,
 *                  -- shall be unique within the scope of the subschema
 *   nameForm                NAME-FORM.&id,
 *   superiorStructureRules  SET SIZE (1..MAX) OF RuleIdentifier OPTIONAL,
 *   ... }`
 */
export default
class DITStructureRule {
    constructor (
        readonly ruleIdentifier: RuleIdentifier,
        readonly nameForm: ObjectIdentifier,
        readonly superiorStructureRules: RuleIdentifier[] | undefined,
    ) {}

    public static fromElement (value: ASN1Element): DITStructureRule {
        let ruleIdentifier!: RuleIdentifier;
        let nameForm!: ObjectIdentifier;
        let superiorStructureRules: RuleIdentifier[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "ruleIdentifier",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    ruleIdentifier = (el as DERElement).integer;
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
                    superiorStructureRules = el.sizeConstrainedSetOf(1).map((ssr) => ssr.integer);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new DITStructureRule(
            ruleIdentifier,
            nameForm,
            superiorStructureRules,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.ruleIdentifier,
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.nameForm,
            ),
            this.superiorStructureRules
                ? DERElement.fromSet(this.superiorStructureRules.map((ssr) => new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    ssr,
                )))
                : undefined,
        ]);
    }

    public static fromBytes (value: Uint8Array): DITStructureRule {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return DITStructureRule.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
