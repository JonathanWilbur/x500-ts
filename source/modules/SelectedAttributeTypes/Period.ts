import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import DayTimeBand from "./DayTimeBand";
import validateTag from "../../validateTag";

/**
 * `Period ::= SEQUENCE {
 *   timesOfDay  [0]  SET SIZE (1..MAX) OF DayTimeBand OPTIONAL,
 *   days        [1]  CHOICE {
 *     intDay           SET OF INTEGER,
 *     bitDay           BIT STRING {
 *       sunday    (0),
 *       monday    (1),
 *       tuesday   (2),
 *       wednesday (3),
 *       thursday  (4),
 *       friday    (5),
 *       saturday  (6)},
 *     dayOf            XDayOf,
 *     ...} OPTIONAL,
 *   weeks       [2]  CHOICE {
 *     allWeeks         NULL,
 *     intWeek          SET OF INTEGER,
 *     bitWeek          BIT STRING {
 *       week1     (0),
 *       week2     (1),
 *       week3     (2),
 *       week4     (3),
 *       week5     (4)},
 *     ... } OPTIONAL,
 *   months      [3]  CHOICE {
 *     allMonths        NULL,
 *     intMonth         SET OF INTEGER,
 *     bitMonth         BIT STRING {
 *       january   (0),
 *       february  (1),
 *       march     (2),
 *       april     (3),
 *       may       (4),
 *       june      (5),
 *       july      (6),
 *       august    (7),
 *       september (8),
 *       october   (9),
 *       november  (10),
 *       december  (11)},
 *     ...} OPTIONAL,
 *   years       [4]  SET OF INTEGER(1000..MAX) OPTIONAL,
 *   ... }`
 */
export default
class Period {
    constructor (
        readonly timesOfDay: DayTimeBand[] | undefined,
        readonly days: DERElement | undefined,
        readonly weeks: DERElement | undefined,
        readonly months: DERElement | undefined,
        readonly years: number[] | undefined,
    ) {}

    public static fromElement (value: ASN1Element): Period {
        let timesOfDay: DayTimeBand[] | undefined = undefined;
        let days: DERElement | undefined = undefined;
        let weeks: DERElement | undefined = undefined;
        let months: DERElement | undefined = undefined;
        let years: number[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "timesOfDay",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    timesOfDay = el.sizeConstrainedSetOf(1)
                        .map((tod) => DayTimeBand.fromElement(tod as DERElement));
                },
            },
            {
                name: "days",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    days = el as DERElement;
                },
            },
            {
                name: "weeks",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    weeks = el as DERElement;
                },
            },
            {
                name: "months",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 3,
                callback: (el: ASN1Element): void => {
                    months = el as DERElement;
                },
            },
            {
                name: "years",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 4,
                callback: (el: ASN1Element): void => {
                    years = el.set.map((y, i) => {
                        validateTag(y as DERElement, `Period.years[${i}]`,
                            [ ASN1TagClass.universal ],
                            [ ASN1Construction.primitive ],
                            [ ASN1UniversalType.integer ],
                        );
                        return y.integer;
                    });
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new Period(
            timesOfDay,
            days,
            weeks,
            months,
            years,
        );
    }

    public toElement (): DERElement {
        let timesOfDayElement: DERElement | undefined = undefined;
        let yearsElement: DERElement | undefined = undefined;
        if (this.timesOfDay) {
            timesOfDayElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0,
            );
            timesOfDayElement.set = this.timesOfDay.map((tod) => tod.toElement());
        }
        if (this.years) {
            yearsElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                4,
            );
            yearsElement.set = this.years.map((y) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                y,
            ));
        }
        return DERElement.fromSequence([
            timesOfDayElement,
            this.days,
            this.weeks,
            this.months,
            yearsElement,
        ]);
    }

    public static fromBytes (value: Uint8Array): Period {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return Period.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
