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
import AttributeTypeInformation from "./AttributeTypeInformation";

/**
 * `AttributeTypeDescription ::= SEQUENCE {
 *   identifier        ATTRIBUTE.&id,
 *   name              SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString OPTIONAL,
 *   obsolete          BOOLEAN DEFAULT FALSE,
 *   information  [0]  AttributeTypeInformation,
 *   ... }`
 */
export default
class AttributeTypeDescription {
    constructor (
        readonly identifier: ObjectIdentifier,
        readonly name: UnboundedDirectoryString[] | undefined,
        readonly description: UnboundedDirectoryString | undefined,
        readonly obsolete: boolean,
        readonly information: AttributeTypeInformation,
    ) {}

    public static fromElement (value: ASN1Element): AttributeTypeDescription {
        let identifier!: ObjectIdentifier;
        let name: UnboundedDirectoryString[] | undefined = undefined;
        let description: UnboundedDirectoryString | undefined = undefined;
        let obsolete: boolean = false;
        let information!: AttributeTypeInformation;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "identifier",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    identifier = el.objectIdentifier;
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
            {
                name: "information",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    information = AttributeTypeInformation.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new AttributeTypeDescription(
            identifier,
            name,
            description,
            obsolete,
            information,
        );
    }

    public toElement (): DERElement {
        const informationElement: DERElement = this.information.toElement();
        informationElement.tagClass = ASN1TagClass.context;
        informationElement.tagNumber = 0;
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.identifier,
            ),
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
            informationElement,
        ]);
    }
}
