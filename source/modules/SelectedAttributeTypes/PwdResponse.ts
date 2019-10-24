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
 * `PwdResponse ::= SEQUENCE {
 *   warning CHOICE {
 *     timeleft        [0] INTEGER(0..MAX),
 *     graceRemaining  [1] INTEGER(0..MAX),
 *     ... } OPTIONAL,
 *   error ENUMERATED {
 *     passwordExpired  (0),
 *     changeAfterReset (1),
 *     ... } OPTIONAL}`
 */
export default
class PwdResponse {
    constructor (
        readonly warning: DERElement | undefined,
        readonly error: number | undefined,
    ) {}

    public static fromElement (value: DERElement): PwdResponse {
        let warning: DERElement | undefined = undefined;
        let error: number | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "warning",
                optional: true,
                tagClass: ASN1TagClass.context,
                callback: (el: ASN1Element): void => {
                    warning = el as DERElement;
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
        return new PwdResponse(warning, error);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.warning,
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

    public static fromBytes (value: Uint8Array): PwdResponse {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return PwdResponse.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
