import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import DistinguishedName from "../InformationFramework/DistinguishedName";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import validateTag from "../../validateTag";
import Attribute from "../InformationFramework/Attribute";
import AttributeType from "../InformationFramework/AttributeType";
import EntryModification from "../DirectoryAbstractService/EntryModification";
import SDSEType from "./SDSEType";
import DSEType from "../DSAOperationalAttributeTypes/DSEType";

/**
 * `ContentChange ::= SEQUENCE {
 *   rename
 *     CHOICE {newRDN  RelativeDistinguishedName,
 *             newDN   DistinguishedName} OPTIONAL,
 *   attributeChanges
 *     CHOICE {replace  [0]  SET SIZE (1..MAX) OF Attribute{{SupportedAttributes}},
 *             changes  [1]  SEQUENCE SIZE (1..MAX) OF EntryModification} OPTIONAL,
 *   sDSEType          SDSEType,
 *   subComplete       [2]  BOOLEAN DEFAULT FALSE,
 *   attComplete       [3]  BOOLEAN OPTIONAL,
 *   attValIncomplete  SET OF AttributeType DEFAULT {},
 *   ... }`
 */
export default
class ContentChange {
    constructor (
        readonly rename: RelativeDistinguishedName | DistinguishedName | undefined,
        readonly attributeChanges: Attribute[] | EntryModification[] | undefined,
        readonly sDSEType: SDSEType,
        readonly subComplete: boolean,
        readonly attComplete: boolean | undefined,
        readonly attValIncomplete: AttributeType[],
    ) {}

    public static fromElement (value: ASN1Element): ContentChange {
        let rename: RelativeDistinguishedName | DistinguishedName | undefined = undefined;
        let attributeChanges: Attribute[] | EntryModification[] | undefined = undefined;
        let sDSEType!: SDSEType;
        let subComplete: boolean = false;
        let attComplete: boolean | undefined = undefined;
        let attValIncomplete: AttributeType[] = [];
        const specification: ConstructedElementSpecification[] = [
            {
                name: "rename",
                optional: true,
                choice: [
                    {
                        name: "rename.newDN",
                        optional: true,
                        tagClass: ASN1TagClass.universal,
                        construction: ASN1Construction.constructed,
                        tagNumber: ASN1UniversalType.sequence,
                        callback: (el: ASN1Element): void => {
                            rename = el.sizeConstrainedSequenceOf(1)
                                .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                                    validateTag(rdnElement as DERElement, `rename[${rdnIndex}]`,
                                        [ ASN1TagClass.universal ],
                                        [ ASN1Construction.constructed ],
                                        [ ASN1UniversalType.set ],
                                    );
                                    return rdnElement.sizeConstrainedSetOf(1)
                                        .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                            validateTag(atavElement as DERElement, `rename[${rdnIndex}][${atavIndex}]`,
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
                        name: "rename.newRDN",
                        optional: true,
                        tagClass: ASN1TagClass.universal,
                        construction: ASN1Construction.constructed,
                        tagNumber: ASN1UniversalType.sequence,
                        callback: (el: ASN1Element): void => {
                            rename = el.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement, `rename[${atavIndex}]`,
                                        [ ASN1TagClass.universal ],
                                        [ ASN1Construction.constructed ],
                                        [ ASN1UniversalType.sequence ],
                                    );
                                    return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                                });
                        },
                    },
                ],
            },
            {
                name: "attributeChanges",
                optional: true,
                choice: [
                    {
                        name: "attributeChanges.replace",
                        optional: true,
                        tagClass: ASN1TagClass.context,
                        construction: ASN1Construction.constructed,
                        tagNumber: 0,
                        callback: (el: ASN1Element): void => {
                            attributeChanges = el.sizeConstrainedSetOf(1)
                                .map((attr) => Attribute.fromElement(attr as DERElement));
                        },
                    },
                    {
                        name: "attributeChanges.changes",
                        optional: true,
                        tagClass: ASN1TagClass.context,
                        construction: ASN1Construction.constructed,
                        tagNumber: 1,
                        callback: (el: ASN1Element): void => {
                            attributeChanges = el.sizeConstrainedSetOf(1)
                                .map((em) => (em as DERElement).inner);
                        },
                    },
                ],
            },
            {
                name: "sDSEType",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.bitString,
                callback: (el: ASN1Element): void => {
                    sDSEType = DSEType.fromElement(el as DERElement);
                },
            },
            {
                name: "subComplete",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    subComplete = el.boolean;
                },
            },
            {
                name: "attComplete",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    attComplete = el.boolean;
                },
            },
            {
                name: "attValIncomplete",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    // TODO: Validate tag.
                    attValIncomplete = el.set.map((at) => at.objectIdentifier);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ContentChange(
            rename,
            attributeChanges,
            sDSEType,
            subComplete,
            attComplete,
            attValIncomplete,
        );
    }

    public toElement (): DERElement {
        let renameElement: DERElement | undefined = undefined;
        if (this.rename && this.rename.length > 0) {
            if (this.rename[0] instanceof AttributeTypeAndValue) { // RDN
                renameElement = DERElement.fromSet(
                    (this.rename as AttributeTypeAndValue[])
                        .map((atav) => atav.toElement()),
                );
            } else { // DN
                renameElement = DERElement.fromSequence(
                    (this.rename as AttributeTypeAndValue[][])
                        .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement()))),
                );
            }
        }

        let attributeChangesElement: DERElement | undefined = undefined;
        if (this.attributeChanges && this.attributeChanges.length > 0) {
            if (this.attributeChanges[0] instanceof Attribute) { // replace
                attributeChangesElement = DERElement.fromSet(
                    (this.attributeChanges as Attribute[])
                        .map((attr) => attr.toElement()),
                );
                attributeChangesElement.tagClass = ASN1TagClass.context;
                attributeChangesElement.tagNumber = 0;
            } else { // changes
                attributeChangesElement = DERElement.fromSequence(
                    (this.attributeChanges as DERElement[]),
                );
                attributeChangesElement.tagClass = ASN1TagClass.context;
                attributeChangesElement.tagNumber = 1;
            }
        }

        let subCompleteElement: DERElement | undefined = undefined;
        if (this.subComplete) {
            subCompleteElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                2,
                this.subComplete,
            );
        }

        let attCompleteElement: DERElement | undefined = undefined;
        if (this.attComplete) {
            attCompleteElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                3,
                this.attComplete,
            );
        }

        let attValIncompleteElement: DERElement | undefined = undefined;
        if (this.attValIncomplete) {
            attValIncompleteElement = DERElement.fromSet(this.attValIncomplete.map((avi) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                avi,
            )));
        }

        return DERElement.fromSequence([
            renameElement,
            attributeChangesElement,
            this.sDSEType.toElement(),
            subCompleteElement,
            attCompleteElement,
            attValIncompleteElement,
        ]);
    }
}
