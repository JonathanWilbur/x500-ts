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
 * `IdmReject ::= SEQUENCE {
 *   invokeID  INTEGER,
 *   reason    ENUMERATED {
 *     mistypedPDU                 (0),
 *     duplicateInvokeIDRequest    (1),
 *     unsupportedOperationRequest (2),
 *     unknownOperationRequest     (3),
 *     mistypedArgumentRequest     (4),
 *     resourceLimitationRequest   (5),
 *     unknownInvokeIDResult       (6),
 *     mistypedResultRequest       (7),
 *     unknownInvokeIDError        (8),
 *     unknownError                (9),
 *     mistypedParameterError      (10),
 *     unsupportedIdmVersion       (11),
 *     unsuitableIdmVersion        (12),
 *     invalidIdmVersion           (13),
 *     ...},
 *   ... }`
 */
export default
class IdmReject {
    constructor (
        readonly invokeID: number,
        readonly reason: number,
    ) {}

    public static fromElement (value: DERElement): IdmReject {
        let invokeID!: number;
        let reason!: number;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "invokeID",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    invokeID = el.integer;
                },
            },
            {
                name: "reason",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.enumerated,
                callback: (el: ASN1Element): void => {
                    reason = el.enumerated;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new IdmReject(invokeID, reason);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.invokeID,
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.enumerated,
                this.reason,
            ),
        ]);
    }
}
