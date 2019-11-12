import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import TimeZone from "./TimeZone";
import Period from "./Period";
import * as errors from "../../errors";

/**
 * `TimeSpecification ::= SEQUENCE {
 *   time           CHOICE {
 *     absolute       SEQUENCE {
 *       startTime [0]  GeneralizedTime OPTIONAL,
 *       endTime   [1]  GeneralizedTime OPTIONAL,
 *       ... },
 *     periodic      SET SIZE (1..MAX) OF Period},
 *   notThisTime   BOOLEAN DEFAULT FALSE,
 *   timeZone      TimeZone OPTIONAL,
 *   ... }`
 */
export default
class TimeSpecification {
    constructor (
        readonly time: { startTime: Date | undefined; endTime: Date | undefined } | Period[],
        readonly notThisTime: boolean,
        readonly timeZone: TimeZone | undefined,
    ) {}

    public static fromElement (value: ASN1Element): TimeSpecification {
        let time!:  { startTime: Date | undefined; endTime: Date | undefined } | Period[];
        let notThisTime: boolean = false;
        let timeZone: TimeZone | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "time",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                callback: (el: ASN1Element): void => {
                    if (el.tagNumber === ASN1UniversalType.sequence) {
                        let startTime: Date | undefined = undefined;
                        let endTime: Date | undefined = undefined;
                        const timeSpecification: ConstructedElementSpecification[] = [
                            {
                                name: "time.absolute.startTime",
                                optional: true,
                                tagClass: ASN1TagClass.context,
                                tagNumber: 0,
                                callback: (el2: ASN1Element): void => {
                                    startTime = el2.generalizedTime;
                                },
                            },
                            {
                                name: "time.absolute.endTime",
                                optional: true,
                                tagClass: ASN1TagClass.context,
                                tagNumber: 1,
                                callback: (el2: ASN1Element): void => {
                                    endTime = el2.generalizedTime;
                                },
                            },
                        ];
                        validateConstruction(el.sequence, timeSpecification);
                        time = {
                            startTime,
                            endTime,
                        };
                    } else if (el.tagNumber === ASN1UniversalType.set) {
                        time = el.sizeConstrainedSetOf(1)
                            .map((p) => Period.fromElement(p as DERElement));
                    } else {
                        throw new errors.X500Error("Invalid TimeSpecification.time.");
                    }
                },
            },
            {
                name: "notThisTime",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.boolean,
                callback: (el: ASN1Element): void => {
                    notThisTime = el.boolean;
                },
            },
            {
                name: "timeZone",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    timeZone = el.integer;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new TimeSpecification(
            time,
            notThisTime,
            timeZone,
        );
    }

    public toElement (): DERElement {
        const timeElement: DERElement = ((): DERElement => {
            if (Array.isArray(this.time)) {
                return DERElement.fromSet(this.time.map((p) => p.toElement()));
            }
            return DERElement.fromSequence([
                this.time.startTime
                    ? new DERElement(
                        ASN1TagClass.context,
                        ASN1Construction.primitive,
                        0,
                        this.time.startTime,
                    )
                    : undefined,
                this.time.endTime
                    ? new DERElement(
                        ASN1TagClass.context,
                        ASN1Construction.primitive,
                        1,
                        this.time.endTime,
                    )
                    : undefined,
            ]);
        })();
        return DERElement.fromSequence([
            timeElement,
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.boolean,
                this.notThisTime,
            ),
            this.timeZone
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.timeZone,
                )
                : undefined,
        ]);
    }

    public static fromBytes (value: Uint8Array): TimeSpecification {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return TimeSpecification.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
