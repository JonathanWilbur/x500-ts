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
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import FamilyEntries from "./FamilyEntries";

/**
 * `FamilyEntry ::= SEQUENCE {
 *   rdn            RelativeDistinguishedName,
 *   information    SEQUENCE OF CHOICE {
 *     attributeType  AttributeType,
 *     attribute      Attribute{{SupportedAttributes}},
 *     ...},
 *   family-info    SEQUENCE SIZE (1..MAX) OF FamilyEntries OPTIONAL,
 *   ... }`
 */
export default
class FamilyEntry {
    constructor (
        readonly rdn: RelativeDistinguishedName,
        readonly information: ASN1Element[],
        readonly familyInfo: FamilyEntries[] | undefined,
    ) {}

    public static fromElement (value: ASN1Element): FamilyEntry {
        let rdn!: RelativeDistinguishedName;
        let information!: ASN1Element[];
        let familyInfo: FamilyEntries[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "rdn",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    rdn = el.sizeConstrainedSetOf(1)
                        .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                            validateTag(atavElement as DERElement, `rdn[${atavIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.sequence ],
                            );
                            return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                        });
                },
            },
            {
                name: "information",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    information = el.sizeConstrainedSequenceOf(1);
                },
            },
            {
                name: "familyInfo",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    familyInfo = el.sizeConstrainedSequenceOf(1)
                        .map((fi) => FamilyEntries.fromElement(fi as DERElement));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new FamilyEntry(rdn, information, familyInfo);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            DERElement.fromSet(this.rdn.map((atav) => atav.toElement())),
            DERElement.fromSequence(this.information as DERElement[]),
            this.familyInfo
                ? DERElement.fromSequence(this.familyInfo.map((fi) => fi.toElement()))
                : undefined,
        ]);
    }
}
