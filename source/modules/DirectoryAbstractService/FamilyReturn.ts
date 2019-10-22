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

/**
 * `FamilyReturn ::= SEQUENCE {
 *   memberSelect   ENUMERATED {
 *     contributingEntriesOnly   (1),
 *     participatingEntriesOnly  (2),
 *     compoundEntry             (3),
 *     ...},
 *   familySelect   SEQUENCE SIZE (1..MAX) OF OBJECT-CLASS.&id OPTIONAL,
 *   ... }`
 */
export default
class FamilyReturn {
    constructor (
        readonly memberSelect: number,
        readonly familySelect: ObjectIdentifier[] | undefined,
    ) {}

    public static fromElement (value: DERElement): FamilyReturn {
        let memberSelect!: number;
        let familySelect: ObjectIdentifier[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "memberSelect",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.enumerated,
                callback: (el: ASN1Element): void => {
                    memberSelect = el.enumerated;
                },
            },
            {
                name: "familySelect",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    familySelect = el.sizeConstrainedSequenceOf(1).map((fs) => fs.objectIdentifier);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new FamilyReturn(
            memberSelect,
            familySelect,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.enumerated,
                this.memberSelect,
            ),
            this.familySelect
                ? DERElement.fromSequence(this.familySelect.map((fs) => new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.objectIdentifier,
                    fs,
                )))
                : undefined,
        ]);
    }

    public static fromBytes (value: Uint8Array): FamilyReturn {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return FamilyReturn.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
