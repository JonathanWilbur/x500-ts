import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
} from "asn1-ts";
import AbortReason from "./AbortReason";

/**
 * `RTABapdu ::= SET {
 *   abortReason         [0] IMPLICIT AbortReason OPTIONAL,
 *   reflectedParameter  [1] IMPLICIT BIT STRING OPTIONAL,
 *   -- 8 bits maximum, only if abortReason is invalidParameter
 *   userdataAB          [2]  TYPE-IDENTIFIER.&Type OPTIONAL
 * } -- only in normal mode and if abortReason`
 */
export default
class RTABapdu {
    constructor (
        readonly abortReason: AbortReason | undefined,
        readonly reflectedParameter: boolean[] | undefined,
        readonly userdataAB: ASN1Element | undefined,
    ) {}

    public static fromElement (value: DERElement): RTABapdu {
        let abortReason: AbortReason | undefined = undefined;
        let reflectedParameter: boolean[] | undefined = undefined;
        let userdataAB: ASN1Element | undefined = undefined;
        value.set.forEach((element) => {
            if (element.tagClass !== ASN1TagClass.context) {
                return;
            }
            switch (element.tagNumber) {
            case (0): {
                abortReason = element.integer;
                break;
            }
            case (1): {
                reflectedParameter = element.bitString;
                break;
            }
            case (2): {
                userdataAB = element;
                break;
            }
            default: { break; }
            }
        });
        return new RTABapdu(abortReason, reflectedParameter, userdataAB);
    }

    public toElement (): DERElement {
        let abortReasonElement: DERElement | undefined = undefined;
        if (this.abortReason) {
            abortReasonElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                0,
                this.abortReason,
            );
        }

        let reflectedParameterElement: DERElement | undefined = undefined;
        if (this.reflectedParameter) {
            reflectedParameterElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                1,
            );
            reflectedParameterElement.bitString = this.reflectedParameter;
        }

        return DERElement.fromSet([
            abortReasonElement,
            reflectedParameterElement,
            this.userdataAB as DERElement | undefined,
        ]);
    }
}
