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
 * `UpdateWindow ::= SEQUENCE {
 *   start  Time,
 *   stop   Time,
 *   ...}`
 */
export default
class UpdateWindow {
    constructor (
        readonly start: Date,
        readonly stop: Date,
    ) {}

    public static fromElement (value: ASN1Element): UpdateWindow {
        let start!: Date;
        let stop!: Date;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "start",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.generalizedTime,
                callback: (el: ASN1Element): void => {
                    start = el.generalizedTime;
                },
            },
            {
                name: "stop",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.generalizedTime,
                callback: (el: ASN1Element): void => {
                    stop = el.generalizedTime;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new UpdateWindow(start, stop);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.generalizedTime,
                this.start,
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.generalizedTime,
                this.stop,
            ),
        ]);
    }
}
