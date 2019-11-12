import {
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ASN1Element,
} from "asn1-ts";
import AttributeType from "../InformationFramework/AttributeType";
import ContextSelection from "./ContextSelection";
import FamilyReturn from "./FamilyReturn";

/**
 * `EntryInformationSelection ::= SET {
 *   attributes                     CHOICE {
 *     allUserAttributes         [0]  NULL,
 *     select                    [1]  SET OF AttributeType
 *     -- empty set implies no attributes are requested -- } DEFAULT allUserAttributes:NULL,
 *   infoTypes               [2]  INTEGER {
 *     attributeTypesOnly        (0),
 *     attributeTypesAndValues   (1)} DEFAULT attributeTypesAndValues,
 *   extraAttributes                CHOICE {
 *     allOperationalAttributes  [3]  NULL,
 *     select                    [4]  SET SIZE (1..MAX) OF AttributeType } OPTIONAL,
 *   contextSelection               ContextSelection OPTIONAL,
 *   returnContexts                 BOOLEAN DEFAULT FALSE,
 *   familyReturn                   FamilyReturn DEFAULT
 *                                    {memberSelect contributingEntriesOnly} }`
 */
export default
class EntryInformationSelection {
    constructor (
        readonly attributes: null | AttributeType[],
        readonly infoTypes: number,
        readonly extraAttributes: null | AttributeType[] | undefined,
        readonly contextSelection: ContextSelection | undefined,
        readonly returnContexts: boolean,
        readonly familyReturn: FamilyReturn,
    ) {}

    public static fromElement (value: ASN1Element): EntryInformationSelection {
        let attributes: null | AttributeType[] = null;
        let infoTypes: number = 0;
        let extraAttributes: null | AttributeType[] | undefined = undefined;
        let contextSelection: ContextSelection | undefined = undefined;
        let returnContexts: boolean = false;
        let familyReturn: FamilyReturn = new FamilyReturn(1, undefined);
        value.set.forEach((element) => {
            if (element.tagClass === ASN1TagClass.context) {
                switch (element.tagNumber) {
                case (0): {
                    attributes = null;
                    break;
                }
                case (1): {
                    attributes = element.sequence.map((attr) => attr.objectIdentifier);
                    break;
                }
                case (2): {
                    infoTypes = element.integer;
                    break;
                }
                case (3): {
                    extraAttributes = null;
                    break;
                }
                case (4): {
                    extraAttributes = element.sequence.map((attr) => attr.objectIdentifier);
                    break;
                }
                default: { break; }
                }
            } else if (element.tagClass === ASN1TagClass.universal) {
                if (element.tagNumber === ASN1UniversalType.boolean) {
                    returnContexts = element.boolean;
                } else if (element.tagNumber === ASN1UniversalType.sequence) {
                    familyReturn = FamilyReturn.fromElement(element);
                } else {
                    contextSelection = element;
                }
            }
        });

        return new EntryInformationSelection(
            attributes,
            infoTypes,
            extraAttributes,
            contextSelection,
            returnContexts,
            familyReturn,
        );
    }

    public toElement (): DERElement {
        const attributesElement: DERElement | undefined = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.primitive,
            0,
        );
        if (this.attributes) {
            attributesElement.sequence = this.attributes.map((attr) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                attr,
            ));
            attributesElement.construction = ASN1Construction.constructed;
            attributesElement.tagNumber = 1;
        }

        const infoTypesElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.primitive,
            2,
            this.infoTypes,
        );

        let extraAttributesElement: DERElement | undefined = undefined;
        if (typeof this.extraAttributes !== "undefined") {
            if (this.extraAttributes) {
                extraAttributesElement = new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.constructed,
                    4,
                );
                extraAttributesElement.sequence = this.extraAttributes.map((xa) => new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.objectIdentifier,
                    xa,
                ));
            } else {
                extraAttributesElement = new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    3,
                );
            }
        }

        let contextSelectionElement: DERElement | undefined = undefined;
        if (this.contextSelection) {
            contextSelectionElement = this.contextSelection as DERElement;
        }

        let returnContextsElement: DERElement | undefined = undefined;
        if (this.returnContexts) {
            returnContextsElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.boolean,
                this.returnContexts,
            );
        }

        let familyReturnElement: DERElement | undefined = undefined;
        if (this.familyReturn) {
            familyReturnElement = this.familyReturn.toElement();
        }

        return DERElement.fromSet([
            attributesElement,
            infoTypesElement,
            extraAttributesElement,
            contextSelectionElement,
            returnContextsElement,
            familyReturnElement,
        ]);
    }
}
