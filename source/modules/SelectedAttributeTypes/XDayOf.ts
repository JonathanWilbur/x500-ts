import {
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1Element,
} from "asn1-ts";
import NamedDay from "./NamedDay";
import validateTag from "../../validateTag";
import * as errors from "../../errors";

/**
 * `XDayOf ::= CHOICE {
 *   first   [1]  NamedDay,
 *   second  [2]  NamedDay,
 *   third   [3]  NamedDay,
 *   fourth  [4]  NamedDay,
 *   fifth   [5]  NamedDay }`
 */
export default
class XDayOf {
    constructor (
        readonly choice:
            { first: NamedDay }
            | { second: NamedDay }
            | { third: NamedDay }
            | { fourth: NamedDay }
            | { fifth: NamedDay },
    ) {}

    public static fromElement (value: ASN1Element): XDayOf {
        validateTag(value, "XDayOf",
            [ ASN1TagClass.context ],
            [ ASN1Construction.constructed ],
            [ 1, 2, 3, 4, 5 ],
        );
        switch (value.tagNumber) {
        case 1: return new XDayOf({ first: NamedDay.fromElement(value.inner) });
        case 2: return new XDayOf({ second: NamedDay.fromElement(value.inner) });
        case 3: return new XDayOf({ third: NamedDay.fromElement(value.inner) });
        case 4: return new XDayOf({ fourth: NamedDay.fromElement(value.inner) });
        case 5: return new XDayOf({ fifth: NamedDay.fromElement(value.inner) });
        default: {
            throw new errors.X500Error("Invalid XDayOf CHOICE.");
        }
        }
    }

    public toElement (): DERElement {
        const ret: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            0,
        );
        if ("first" in this.choice) {
            ret.tagNumber = 1;
            ret.inner = this.choice.first.toElement();
        } else if ("second" in this.choice) {
            ret.tagNumber = 2;
            ret.inner = this.choice.second.toElement();
        } else if ("third" in this.choice) {
            ret.tagNumber = 3;
            ret.inner = this.choice.third.toElement();
        } else if ("fourth" in this.choice) {
            ret.tagNumber = 4;
            ret.inner = this.choice.fourth.toElement();
        } else if ("fifth" in this.choice) {
            ret.tagNumber = 5;
            ret.inner = this.choice.fifth.toElement();
        } else {
            throw new errors.X500Error("Invalid XDayOf CHOICE.");
        }
        return ret;
    }

    public static fromBytes (value: Uint8Array): XDayOf {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return XDayOf.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
