import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import DayTime from "./DayTime";

/**
 * `DayTimeBand ::= SEQUENCE {
 *   startDayTime  [0]  DayTime DEFAULT {hour 0},
 *   endDayTime    [1]  DayTime DEFAULT {hour 23, minute 59, second 59},
 *   ... }`
 */
export default
class DayTimeBand {
    constructor (
        readonly startDayTime: DayTime,
        readonly endDayTime: DayTime,
    ) {}

    public static fromElement (value: ASN1Element): DayTimeBand {
        let startDayTime: DayTime = new DayTime(0, 0, 0);
        let endDayTime: DayTime = new DayTime(23, 59, 59);
        const specification: ConstructedElementSpecification[] = [
            {
                name: "startDayTime",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    startDayTime = DayTime.fromElement(el as DERElement);
                },
            },
            {
                name: "endDayTime",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    endDayTime = DayTime.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new DayTimeBand(startDayTime, endDayTime);
    }

    public toElement (): DERElement {
        const startElement: DERElement = this.startDayTime.toElement();
        startElement.tagClass = ASN1TagClass.context;
        startElement.construction = ASN1Construction.constructed;
        startElement.tagNumber = 0;
        const endElement: DERElement = this.endDayTime.toElement();
        endElement.tagClass = ASN1TagClass.context;
        endElement.construction = ASN1Construction.constructed;
        endElement.tagNumber = 1;
        return DERElement.fromSequence([
            startElement,
            endElement,
        ]);
    }

    public static fromBytes (value: Uint8Array): DayTimeBand {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return DayTimeBand.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
