import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";

/**
 * This does not actually have any definition within the SelectedAttributeTypes
 * ASN.1 module, but is implemented within this library.
 *
 * `EpcFormatField ::= SEQUENCE {
 *   bits            INTEGER,
 *   charField       CHOICE {
 *     characters  [0] INTEGER,
 *     maxValue    [1] INTEGER },
 *   result          ENUMERATED {
 *     numericPad     (0),
 *     numeric        (1),
 *     alpha7bits     (2) } DEFAULT numericPad }`
 */
export default
class EpcFormatField {
    constructor (
        readonly bits: number,
        readonly charField: { characters: number } | { maxValue: number },
        readonly result: number,
    ) {}

    public static fromElement (value: DERElement): EpcFormatField {
        let bits!: number;
        let charField!: { characters: number } | { maxValue: number };
        let result: number = 0;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "bits",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    bits = el.integer;
                },
            },
            {
                name: "charField",
                optional: false,
                choice: [
                    {
                        name: "charField",
                        optional: true,
                        tagClass: ASN1TagClass.context,
                        construction: ASN1Construction.primitive,
                        tagNumber: 0,
                        callback: (el: ASN1Element): void => {
                            charField = { characters: el.integer };
                        },
                    },
                    {
                        name: "charField",
                        optional: true,
                        tagClass: ASN1TagClass.context,
                        construction: ASN1Construction.primitive,
                        tagNumber: 1,
                        callback: (el: ASN1Element): void => {
                            charField = { maxValue: el.integer };
                        },
                    },
                ],
            },
            {
                name: "result",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.enumerated,
                callback: (el: ASN1Element): void => {
                    result = el.enumerated;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new EpcFormatField(
            bits,
            charField,
            result,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.bits
            ),
            "characters" in this.charField
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.charField.characters,
                )
                : new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.charField.maxValue,
                ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.enumerated,
                this.result,
            ),
        ]);
    }

    public static fromBytes (value: Uint8Array): EpcFormatField {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return EpcFormatField.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
