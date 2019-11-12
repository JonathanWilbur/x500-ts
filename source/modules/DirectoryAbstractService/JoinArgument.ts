import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
    ASN1UniversalType,
} from "asn1-ts";
import Name from "../InformationFramework/Name";
import DomainLocalID from "./DomainLocalID";
import Filter from "./Filter";
import JoinAttPair from "./JoinAttPair";
import EntryInformationSelection from "./EntryInformationSelection";
import validateTag from "../../validateTag";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import UnboundedDirectoryString from "../SelectedAttributeTypes/UnboundedDirectoryString";

/**
 * `JoinArgument ::= SEQUENCE {
 *   joinBaseObject  [0]  Name,
 *   domainLocalID   [1]  DomainLocalID OPTIONAL,
 *   joinSubset      [2]  ENUMERATED {
 *     baseObject   (0),
 *     oneLevel     (1),
 *     wholeSubtree (2),
 *     ... } DEFAULT baseObject,
 *   joinFilter      [3]  Filter OPTIONAL,
 *   joinAttributes  [4]  SEQUENCE SIZE (1..MAX) OF JoinAttPair OPTIONAL,
 *   joinSelection   [5]  EntryInformationSelection,
 *   ... }`
 */
export default
class JoinArgument {
    constructor (
        readonly joinBaseObject: Name,
        readonly domainLocalID: DomainLocalID | undefined,
        readonly joinSubset: number,
        readonly joinFilter: Filter | undefined,
        readonly joinAttributes: JoinAttPair[] | undefined,
        readonly joinSelection: EntryInformationSelection,
    ) {}

    public static fromElement (value: ASN1Element): JoinArgument {
        let joinBaseObject!: Name;
        let domainLocalID: DomainLocalID | undefined = undefined;
        let joinSubset: number = 0;
        let joinFilter: Filter | undefined = undefined;
        let joinAttributes: JoinAttPair[] | undefined = undefined;
        let joinSelection!: EntryInformationSelection;

        const specification: ConstructedElementSpecification[] = [
            {
                name: "joinBaseObject",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    joinBaseObject = el.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `joinBaseObject[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement, `joinBaseObject[${rdnIndex}][${atavIndex}]`,
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
                name: "domainLocalID",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    domainLocalID = UnboundedDirectoryString.fromElement(el as DERElement);
                },
            },
            {
                name: "joinSubset",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    joinSubset = el.enumerated;
                },
            },
            {
                name: "joinFilter",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    joinFilter = (el as DERElement).inner;
                },
            },
            {
                name: "joinAttributes",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 4,
                callback: (el: ASN1Element): void => {
                    joinAttributes = el.sizeConstrainedSequenceOf(1)
                        .map((ja) => JoinAttPair.fromElement(ja as DERElement));
                },
            },
            {
                name: "joinSelection",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 5,
                callback: (el: ASN1Element): void => {
                    joinSelection = EntryInformationSelection.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new JoinArgument(
            joinBaseObject,
            domainLocalID,
            joinSubset,
            joinFilter,
            joinAttributes,
            joinSelection,
        );
    }

    public toElement (): DERElement {
        let joinBaseObjectElement: DERElement | undefined = undefined;
        if (this.joinBaseObject) {
            joinBaseObjectElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
            );
            joinBaseObjectElement.sequence = this.joinBaseObject
                .map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement())));
        }

        let domainLocalIDElement: DERElement | undefined = undefined;
        if (this.domainLocalID) {
            domainLocalIDElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
                this.domainLocalID.toElement(),
            );
        }

        let joinSubsetElement: DERElement | undefined = undefined;
        if (this.joinSubset) {
            joinSubsetElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                2,
                this.joinSubset,
            );
        }

        let joinFilterElement: DERElement | undefined = undefined;
        if (this.joinFilter) {
            joinFilterElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                3,
                this.joinFilter,
            );
        }

        let joinAttributesElement: DERElement | undefined = undefined;
        if (this.joinAttributes) {
            joinAttributesElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                4,
            );
            joinAttributesElement.sequence = this.joinAttributes.map((jap) => jap.toElement());
        }

        let joinSelectionElement: DERElement | undefined = undefined;
        if (this.joinSelection) {
            joinSelectionElement = this.joinSelection.toElement();
            joinSelectionElement.tagClass = ASN1TagClass.context;
            joinSelectionElement.tagNumber = 5;
        }

        return DERElement.fromSequence([
            joinBaseObjectElement,
            domainLocalIDElement,
            joinSubsetElement,
            joinFilterElement,
            joinAttributesElement,
            joinSelectionElement,
        ]);
    }
}
