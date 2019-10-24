import {
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
} from "asn1-ts";
import * as errors from "../../errors";
import validateTag from "../../validateTag";

/**
 * `NamedDay ::= CHOICE {
 *   intNamedDays ENUMERATED {
 *     sunday      (1),
 *     monday      (2),
 *     tuesday     (3),
 *     wednesday   (4),
 *     thursday    (5),
 *     friday      (6),
 *     saturday    (7)},
 *   bitNamedDays BIT STRING {
 *     sunday      (0),
 *     monday      (1),
 *     tuesday     (2),
 *     wednesday   (3),
 *     thursday    (4),
 *     friday      (5),
 *     saturday    (6)} }`
 */
export default
class NamedDay {
    constructor (
        readonly namedDays:
            (1 | 2 | 3 | 4 | 5 | 6 | 7)
            | [ boolean, boolean, boolean, boolean, boolean, boolean, boolean ],
    ) {}

    public static fromElement (value: DERElement): NamedDay {
        validateTag(value, "NamedDay",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive ],
            [ ASN1UniversalType.bitString, ASN1UniversalType.enumerated ],
        );
        if (value.tagNumber === ASN1UniversalType.bitString) {
            const bits: boolean[] = value.bitString;
            if (bits.length !== 7) {
                throw new errors.X500Error(
                    "NamedDay.bitNamedDays must contain exactly 7 bits, but "
                    + `received ${bits.length} bits.`,
                );
            }
            return new NamedDay([
                bits[0],
                bits[1],
                bits[2],
                bits[3],
                bits[4],
                bits[5],
                bits[6],
            ]);
        } else {
            const intNamedDay: number = value.enumerated;
            if (intNamedDay < 1 || intNamedDay > 7) {
                throw new errors.X500Error(
                    "NamedDay.intNamedDays must be between 1 and 7, but "
                    + `received ${intNamedDay}.`,
                );
            }
            return new NamedDay(intNamedDay as (1 | 2 | 3 | 4 | 5 | 6 | 7));
        }
    }

    public toElement (): DERElement {
        const ret: DERElement = new DERElement();
        if (Array.isArray(this.namedDays)) {
            ret.tagNumber = ASN1UniversalType.bitString;
            ret.bitString = this.namedDays;
        } else {
            ret.tagNumber = ASN1UniversalType.enumerated;
            ret.enumerated = this.namedDays;
        }
        return ret;
    }

    public static fromBytes (value: Uint8Array): NamedDay {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return NamedDay.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
