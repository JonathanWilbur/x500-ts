import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import Release_response_reason from "./Release-response-reason";

/**
 * `TheOsiUnbindRes ::= [APPLICATION 3] IMPLICIT SEQUENCE {
 *   reason  [0] IMPLICIT Release-response-reason OPTIONAL }`
 */
export default
class TheOsiUnbindRes {
    constructor (
        readonly reason: Release_response_reason | undefined,
    ) {}

    public static fromElement (value: ASN1Element): TheOsiUnbindRes {
        let reason: Release_response_reason | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "reason",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    reason = el.integer;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new TheOsiUnbindRes(reason);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.reason
                ? new DERElement(
                    ASN1TagClass.context,
                    ASN1Construction.primitive,
                    0,
                    this.reason,
                )
                : undefined,
        ]);
    }
}
