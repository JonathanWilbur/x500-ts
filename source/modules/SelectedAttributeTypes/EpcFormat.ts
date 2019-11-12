import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import EpcFormatField from "./EpcFormatField";

/**
 * EpcFormat ::= SEQUENCE {
 *   fields          SEQUENCE SIZE (1..MAX) OF SEQUENCE {
 *     bits            INTEGER,
 *     charField       CHOICE {
 *       characters  [0] INTEGER,
 *       maxValue    [1] INTEGER },
 *     result          ENUMERATED {
 *       numericPad     (0),
 *       numeric        (1),
 *       alpha7bits     (2) } DEFAULT numericPad },
 *   digitShift  [0] INTEGER                        OPTIONAL,
 *   checkCalc   [1] INTEGER                        OPTIONAL,
 *   urnPrefix       UTF8String                     OPTIONAL }
 */
export default
class EpcFormat {
    constructor (
        readonly fields: EpcFormatField[],
        readonly digitShift: number | undefined,
        readonly checkCalc: number | undefined,
        readonly urnPrefix: string | undefined,
    ) {}

    public static fromElement (value: ASN1Element): EpcFormat {
        let fields!: EpcFormatField[];
        let digitShift: number | undefined = undefined;
        let checkCalc: number | undefined = undefined;
        let urnPrefix: string | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "fields",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    fields = el.sizeConstrainedSequenceOf(1)
                        .map((f) => EpcFormatField.fromElement(f as DERElement));
                },
            },
            {
                name: "digitShift",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    digitShift = el.integer;
                },
            },
            {
                name: "checkCalc",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    checkCalc = el.integer;
                },
            },
            {
                name: "urnPrefix",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.utf8String,
                callback: (el: ASN1Element): void => {
                    urnPrefix = el.utf8String;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new EpcFormat(
            fields,
            digitShift,
            checkCalc,
            urnPrefix,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            DERElement.fromSequence(this.fields.map((f) => f.toElement())),
            this.digitShift
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.digitShift,
                )
                : undefined,
            this.checkCalc
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.checkCalc,
                )
                : undefined,
            this.urnPrefix
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.utf8String,
                    this.urnPrefix,
                )
                : undefined,
        ]);
    }

    public static fromBytes (value: Uint8Array): EpcFormat {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return EpcFormat.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
