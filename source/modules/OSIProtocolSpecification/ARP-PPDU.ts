import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import Abort_reason from "./Abort-reason";
import Event_identifier from "./Event-identifier";

/**
 * `ARP-PPDU ::= SEQUENCE {
 *   provider-reason   [0] IMPLICIT Abort-reason OPTIONAL,
 *   event-identifier  [1] IMPLICIT Event-identifier OPTIONAL }`
 */
export default
class ARP_PPDU {
    constructor (
        readonly providerReason: Abort_reason | undefined,
        readonly eventIdentifier: Event_identifier | undefined,
    ) {}

    public static fromElement (value: ASN1Element): ARP_PPDU {
        let providerReason: Abort_reason | undefined = undefined;
        let eventIdentifier: Event_identifier | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "providerReason",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    providerReason = el.integer;
                },
            },
            {
                name: "eventIdentifier",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    eventIdentifier = el.integer;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ARP_PPDU(providerReason, eventIdentifier);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                0,
                this.providerReason,
            ),
            new DERElement(
                ASN1TagClass.context,
                ASN1Construction.primitive,
                1,
                this.eventIdentifier,
            ),
        ]);
    }
}
