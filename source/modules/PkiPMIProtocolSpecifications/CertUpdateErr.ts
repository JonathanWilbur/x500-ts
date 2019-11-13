import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import CASP_error from "./CASP-error";

/**
 * `CertUpdateErr ::= SEQUENCE {
 *   code          CASP-error,
 *   ... }`
 */
export default
class CertUpdateErr {
    constructor (
        readonly code: CASP_error,
    ) {}

    public static fromElement (value: DERElement): CertUpdateErr {
        let code!: CASP_error;
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
        ];
        validateConstruction(value.sequence, specification);
        return new CertUpdateErr(code);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.enumerated,
                this.code,
            ),
        ]);
    }
}
