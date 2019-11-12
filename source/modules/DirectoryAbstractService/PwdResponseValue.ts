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
 * `PwdResponseValue ::= SEQUENCE {
 *   warning CHOICE {
 *     timeLeft        [0]  INTEGER (0..MAX),
 *     graceRemaining  [1]  INTEGER (0..MAX),
 *     ... } OPTIONAL,
 *   error   ENUMERATED {
 *     passwordExpired  (0),
 *     changeAfterReset (1),
 *     ... } OPTIONAL}`
 */
export default
class PwdResponseValue {
    constructor (
        readonly warning: ASN1Element | undefined,
        readonly error: number | undefined,
    ) {}

    public static fromElement (value: ASN1Element): PwdResponseValue {
        let warning: ASN1Element | undefined = undefined;
        let error: number | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "warning",
                optional: true,
                tagClass: ASN1TagClass.context,
                callback: (el: ASN1Element): void => {
                    warning = el;
                },
            },
            {
                name: "error",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.enumerated,
                callback: (el: ASN1Element): void => {
                    error = el.enumerated;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new PwdResponseValue(warning, error);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.warning as DERElement | undefined,
            this.error
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.enumerated,
                    this.error,
                )
                : undefined,
        ]);
    }
}
