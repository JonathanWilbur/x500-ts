import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
    ASN1UniversalType,
} from "asn1-ts";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import validateTag from "../../validateTag";
import Name from "../InformationFramework/Name";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";

/**
 * `EntryInformation ::= SEQUENCE {
 *   name                  Name,
 *   fromEntry             BOOLEAN DEFAULT TRUE,
 *   information           SET SIZE (1..MAX) OF CHOICE {
 *     attributeType         AttributeType,
 *     attribute             Attribute{{SupportedAttributes}},
 *     ...} OPTIONAL,
 *   incompleteEntry  [3]  BOOLEAN DEFAULT FALSE, -- not in first edition systems
 *   partialName      [4]  BOOLEAN DEFAULT FALSE, -- not in first or second edition systems
 *   derivedEntry     [5]  BOOLEAN DEFAULT FALSE, -- not in pre-fourth edition systems --
 *   ... }`
 */
export default
class EntryInformation {
    constructor (
        readonly name: Name,
        readonly fromEntry: boolean,
        readonly information: ASN1Element[] | undefined,
        readonly incompleteEntry: boolean,
        readonly partialName: boolean,
        readonly derivedEntry: boolean,
    ) {}

    public static fromElement (value: DERElement): EntryInformation {
        let name!: Name;
        let fromEntry: boolean = true;
        let information: ASN1Element[] | undefined = undefined;
        let incompleteEntry: boolean = false;
        let partialName: boolean = false;
        let derivedEntry: boolean = false;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "name",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    name = el.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `name[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement, `name[${rdnIndex}][${atavIndex}]`,
                                        [ ASN1TagClass.universal ],
                                        [ ASN1Construction.constructed ],
                                        [ ASN1UniversalType.sequence ],
                                    );
                                    return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                                });
                        });
                },
            },
            {
                name: "fromEntry",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.boolean,
                callback: (el: ASN1Element): void => {
                    fromEntry = el.boolean;
                },
            },
            {
                name: "information",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.set,
                callback: (el: ASN1Element): void => {
                    information = el.sizeConstrainedSetOf(1);
                },
            },
            {
                name: "incompleteEntry",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    incompleteEntry = el.boolean;
                },
            },
            {
                name: "partialName",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 4,
                callback: (el: ASN1Element): void => {
                    partialName = el.boolean;
                },
            },
            {
                name: "derivedEntry",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 5,
                callback: (el: ASN1Element): void => {
                    derivedEntry = el.boolean;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new EntryInformation(
            name,
            fromEntry,
            information,
            incompleteEntry,
            partialName,
            derivedEntry,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            DERElement.fromSequence(
                this.name.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement()))),
            ),
            this.fromEntry
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.boolean,
                    this.fromEntry,
                )
                : undefined,
            this.information
                ? DERElement.fromSet(this.information as DERElement[])
                : undefined,
            this.incompleteEntry
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    3,
                    this.incompleteEntry,
                )
                : undefined,
            this.partialName
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    3,
                    this.partialName,
                )
                : undefined,
            this.derivedEntry
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    3,
                    this.derivedEntry,
                )
                : undefined,
        ]);
    }
}
