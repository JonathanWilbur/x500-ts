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
 * `TBerror ::= SEQUENCE {
 *   code        ENUMERATED {
 *     caCertInvalid        (1),
 *     unknownCert          (2),
 *     unknownCertStatus    (3),
 *     subjectCertRevoked   (4),
 *     incorrectCert        (5),
 *     contractExpired      (6),
 *     pathValidationFailed (7),
 *     timeOut              (8),
 *     other                (99),
 *     ... },
 *   diagnostic  UTF8String OPTIONAL,
 *   ... }`
 */
export default
class TBerror {
    constructor (
        readonly code: number,
        readonly diagnostic: string | undefined,
    ) {}

    public static fromElement (value: DERElement): TBerror {
        let code!: number;
        let diagnostic: string | undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "code",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.enumerated,
                callback: (el: ASN1Element): void => {
                    code = el.enumerated;
                },
            },
            {
                name: "diagnostic",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.utf8String,
                callback: (el: ASN1Element): void => {
                    diagnostic = el.utf8String;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new TBerror(code, diagnostic);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.enumerated,
                this.code,
            ),
            this.diagnostic
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.utf8String,
                    this.diagnostic,
                )
                : undefined,
        ]);
    }
}
