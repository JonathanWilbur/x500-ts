import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import AttributeType from "../InformationFramework/AttributeType";
import AttributeValue from "../InformationFramework/AttributeValue";

/**
 * `DirectoryInformationServiceElement ::= SEQUENCE {
 *   operationType
 *     BIT STRING {read(0), compare(1), abandon(2), list(3), search(4),
 *                 addEntry(5), removeEntry(6), modifyEntry(7), modifyDN(8)}
 *       OPTIONAL,
 *   attributeType   AttributeType OPTIONAL,
 *   attributeValue  [0]  AttributeValue OPTIONAL
 * }`
 */
export default
class DirectoryInformationServiceElement {
    constructor (
        readonly operationType: boolean[] | undefined,
        readonly attributeType: AttributeType | undefined,
        readonly attributeValue: AttributeValue | undefined,
    ) {}

    public static fromElement (value: DERElement): DirectoryInformationServiceElement {
        let operationType: boolean[] | undefined = undefined;
        let attributeType: AttributeType | undefined = undefined;
        let attributeValue: AttributeValue | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "operationType",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.bitString,
                callback: (el: ASN1Element): void => {
                    operationType = el.bitString;
                },
            },
            {
                name: "attributeType",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    attributeType = el.objectIdentifier;
                },
            },
            {
                name: "attributeValue",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    attributeValue = el as DERElement;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new DirectoryInformationServiceElement(
            operationType,
            attributeType,
            attributeValue,
        );
    }

    public toElement (): DERElement {
        let operationTypeElement: DERElement | undefined = undefined;
        if (this.operationType) {
            operationTypeElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.bitString,
            );
            operationTypeElement.bitString = this.operationType;
        }

        let attributeTypeElement: DERElement | undefined = undefined;
        if (this.attributeType) {
            attributeTypeElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.attributeType,
            );
        }

        return DERElement.fromSequence([
            operationTypeElement,
            attributeTypeElement,
            this.attributeValue,
        ]);
    }
}
