import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";

/**
 * `DayTime ::= SEQUENCE {
 *   hour    [0]  INTEGER(0..23),
 *   minute  [1]  INTEGER(0..59) DEFAULT 0,
 *   second  [2]  INTEGER(0..59) DEFAULT 0,
 *   ... }`
 */
export default
class DayTime {
    constructor (
        readonly hour: number,
        readonly minute: number,
        readonly second: number,
    ) {}

    public static fromElement (value: ASN1Element): DayTime {
        let hour!: number;
        let minute: number = 0;
        let second: number = 0;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "hour",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    hour = el.integer;
                },
            },
            {
                name: "minute",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    minute = el.integer;
                },
            },
            {
                name: "second",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    second = el.integer;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new DayTime(hour, minute, second);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                0,
                this.hour,
            ),
            this.minute
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    1,
                    this.minute,
                )
                : undefined,
            this.second
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    2,
                    this.second,
                )
                : undefined,
        ]);
    }

    public static fromBytes (value: Uint8Array): DayTime {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return DayTime.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
