import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import Time from "./Time";

/**
 * `PeriodicStrategy ::= SEQUENCE {
 *   beginTime       Time OPTIONAL,
 *   windowSize      INTEGER,
 *   updateInterval  INTEGER,
 *   ... }`
 */
export default
class PeriodicStrategy {
    constructor (
        readonly beginTime: Time | undefined,
        readonly windowSize: number,
        readonly updateInterval: number,
    ) {}

    public static fromElement (value: DERElement): PeriodicStrategy {
        let beginTime: Time | undefined = undefined;
        let windowSize!: number;
        let updateInterval!: number;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "beginTime",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.generalizedTime,
                callback: (el: ASN1Element): void => {
                    beginTime = el.generalizedTime;
                },
            },
            {
                name: "windowSize",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    windowSize = el.integer;
                },
            },
            {
                name: "updateInterval",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    updateInterval = el.integer;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new PeriodicStrategy(beginTime, windowSize, updateInterval);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.beginTime
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.generalizedTime,
                    this.beginTime,
                )
                : undefined,
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.windowSize,
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.updateInterval,
            ),
        ]);
    }
}
