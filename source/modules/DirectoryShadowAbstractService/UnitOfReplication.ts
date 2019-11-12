import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import AreaSpecification from "./AreaSpecification";
import AttributeSelection from "./AttributeSelection";
import Knowledge from "./Knowledge";
import ContextSelection from "../DirectoryAbstractService/ContextSelection";
import ClassAttributeSelection from "./ClassAttributeSelection";

/**
 * `UnitOfReplication ::= SEQUENCE {
 *   area                 AreaSpecification,
 *   attributes           AttributeSelection,
 *   knowledge            Knowledge OPTIONAL,
 *   subordinates         BOOLEAN DEFAULT FALSE,
 *   contextSelection     ContextSelection OPTIONAL,
 *   supplyContexts  [0]  CHOICE {
 *     allContexts         NULL,
 *     selectedContexts    SET SIZE (1..MAX) OF CONTEXT.&id,
 *     ... } OPTIONAL }`
 */
export default
class UnitOfReplication {
    constructor (
        readonly area: AreaSpecification,
        readonly attributes: AttributeSelection,
        readonly knowledge: Knowledge | undefined,
        readonly subordinates: boolean,
        readonly contextSelection: ContextSelection | undefined,
        readonly supplyContexts: ASN1Element | undefined,
    ) {}

    public static fromElement (value: ASN1Element): UnitOfReplication {
        let area!: AreaSpecification;
        let attributes!: AttributeSelection;
        let knowledge: Knowledge | undefined = undefined;
        let subordinates: boolean = false;
        let contextSelection: ContextSelection | undefined = undefined;
        let supplyContexts: ASN1Element | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "area",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    area = AreaSpecification.fromElement(el as DERElement);
                },
            },
            {
                name: "attributes",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.set,
                callback: (el: ASN1Element): void => {
                    attributes = el.set.map((attr) => ClassAttributeSelection.fromElement(attr as DERElement));
                },
            },
            {
                name: "knowledge",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    knowledge = Knowledge.fromElement(el as DERElement);
                },
            },
            {
                name: "subordinates",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.boolean,
                callback: (el: ASN1Element): void => {
                    subordinates = el.boolean;
                },
            },
            {
                name: "contextSelection",
                optional: true,
                tagClass: ASN1TagClass.universal,
                callback: (el: ASN1Element): void => {
                    contextSelection = el;
                },
            },
            {
                name: "supplyContexts",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    supplyContexts = (el as DERElement).inner;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new UnitOfReplication(
            area,
            attributes,
            knowledge,
            subordinates,
            contextSelection,
            supplyContexts,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.area.toElement(),
            DERElement.fromSet(this.attributes.map((attr) => attr.toElement())),
            this.knowledge
                ? this.knowledge.toElement()
                : undefined,
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.boolean,
                this.subordinates,
            ),
            this.contextSelection as DERElement | undefined,
            this.supplyContexts
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.constructed,
                    0,
                    this.supplyContexts,
                )
                : undefined,
        ]);
    }
}
