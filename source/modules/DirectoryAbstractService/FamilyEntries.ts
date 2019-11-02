import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
    ASN1UniversalType,
    ObjectIdentifier,
} from "asn1-ts";
import FamilyEntry from "./FamilyEntry";

/**
 * `FamilyEntries ::= SEQUENCE {
 *   family-class   OBJECT-CLASS.&id, -- structural object class value
 *   familyEntries  SEQUENCE OF FamilyEntry,
 *   ... }`
 */
export default
class FamilyEntries {
    constructor (
        readonly familyClass: ObjectIdentifier,
        readonly familyEntries: FamilyEntry[],
    ) {}

    public static fromElement (value: DERElement): FamilyEntries {
        let familyClass!: ObjectIdentifier;
        let familyEntries!: FamilyEntry[];
        const specification: ConstructedElementSpecification[] = [
            {
                name: "familyClass",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    familyClass = el.objectIdentifier;
                },
            },
            {
                name: "familyEntries",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    familyEntries = el.sequence.map((fe) => FamilyEntry.fromElement(fe as DERElement));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new FamilyEntries(familyClass, familyEntries);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.familyClass,
            ),
            DERElement.fromSequence(this.familyEntries.map((fe) => fe.toElement())),
        ]);
    }
}
