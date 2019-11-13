import {
    ASN1Element,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";

/**
 * `CertReplaceErr ::= SEQUENCE {
 *   code        CHOICE {
 *     signedData     [0]  SignedData-error,
 *     envelopedData  [1]  EnvelopedData-error,
 *     casp           [2]  CASP-error,
 *     ... },
 *   ... }`
 */
export default
class CertReplaceErr {
    constructor (
        readonly code: ASN1Element,
    ) {}

    public static fromElement (value: DERElement): CertReplaceErr {
        let code!: ASN1Element;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "code",
                optional: false,
                callback: (el: ASN1Element): void => {
                    code = el;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new CertReplaceErr(code);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.code,
        ]);
    }
}
