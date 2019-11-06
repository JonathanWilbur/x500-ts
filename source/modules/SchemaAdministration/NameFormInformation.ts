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

/**
 * `NameFormInformation ::= SEQUENCE {
 *   subordinate        OBJECT-CLASS.&id,
 *   namingMandatories  SET OF ATTRIBUTE.&id,
 *   namingOptionals    SET SIZE (1..MAX) OF ATTRIBUTE.&id OPTIONAL,
 *   ... }`
 */
export default
class NameFormInformation {
    constructor (
        readonly subordinate: ObjectIdentifier,
        readonly namingMandatories: ObjectIdentifier[],
        readonly namingOptionals: ObjectIdentifier[] | undefined,
    ) {}

    public static fromElement (value: DERElement): NameFormInformation {
        let subordinate!: ObjectIdentifier;
        let namingMandatories!: ObjectIdentifier[];
        let namingOptionals: ObjectIdentifier[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "subordinate",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    subordinate = el.objectIdentifier;
                },
            },
            {
                name: "namingMandatories",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.set,
                callback: (el: ASN1Element): void => {
                    namingMandatories = el.set.map((nm) => nm.objectIdentifier);
                },
            },
            {
                name: "namingOptionals",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.set,
                callback: (el: ASN1Element): void => {
                    namingOptionals = el.sizeConstrainedSetOf(1)
                        .map((no) => no.objectIdentifier);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new NameFormInformation(
            subordinate,
            namingMandatories,
            namingOptionals,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.subordinate,
            ),
            DERElement.fromSet(this.namingMandatories.map((nm) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                nm,
            ))),
            this.namingOptionals
                ? DERElement.fromSet(this.namingOptionals.map((no) => new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.objectIdentifier,
                    no,
                )))
                : undefined,
        ]);
    }
}
