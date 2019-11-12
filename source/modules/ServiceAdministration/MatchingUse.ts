import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ObjectIdentifier,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";

/**
 * `MatchingUse ::= SEQUENCE {
 *   restrictionType    MATCHING-RESTRICTION.&id({SupportedMatchingRestrictions}),
 *   restrictionValue   MATCHING-RESTRICTION.&Restriction
 *                         ({SupportedMatchingRestrictions}{@restrictionType}),
 *   ... }`
 */
export default
class MatchingUse {
    constructor (
        readonly restrictionType: ObjectIdentifier,
        readonly restrictionValue: DERElement,
    ) {}

    public static fromElement (value: ASN1Element): MatchingUse {
        let restrictionType!: ObjectIdentifier;
        let restrictionValue!: DERElement;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "restrictionType",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    restrictionType = (el as DERElement).objectIdentifier;
                },
            },
            {
                name: "restrictionValue",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    restrictionValue = el as DERElement;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new MatchingUse(
            restrictionType,
            restrictionValue,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.restrictionType,
            ),
            this.restrictionValue
                ? this.restrictionValue
                : undefined,
        ]);
    }

    public static fromBytes (value: Uint8Array): MatchingUse {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return MatchingUse.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
