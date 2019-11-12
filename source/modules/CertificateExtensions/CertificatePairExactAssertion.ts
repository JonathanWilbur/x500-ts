
import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import CertificateExactAssertion from "./CertificateExactAssertion";

/**
 * `CertificatePairExactAssertion ::= SEQUENCE {
 *   issuedToThisCAAssertion  [0]  CertificateExactAssertion OPTIONAL,
 *   issuedByThisCAAssertion  [1]  CertificateExactAssertion OPTIONAL,
 *   ...
 * }
 * (WITH COMPONENTS {
 *    ...,
 *    issuedToThisCAAssertion  PRESENT
 *  } | WITH COMPONENTS {
 *        ...,
 *        issuedByThisCAAssertion  PRESENT
 *      })`
 */
export default
class CertificatePairExactAssertion {
    constructor (
        readonly issuedToThisCAAssertion: CertificateExactAssertion | undefined,
        readonly issuedByThisCAAssertion: CertificateExactAssertion | undefined,
    ) {}

    public static fromElement (value: ASN1Element): CertificatePairExactAssertion {
        let issuedToThisCAAssertion: CertificateExactAssertion | undefined = undefined;
        let issuedByThisCAAssertion: CertificateExactAssertion | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "issuedToThisCAAssertion",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    issuedToThisCAAssertion = CertificateExactAssertion.fromElement(el as DERElement);
                },
            },
            {
                name: "issuedByThisCAAssertion",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    issuedByThisCAAssertion = CertificateExactAssertion.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new CertificatePairExactAssertion(
            issuedToThisCAAssertion,
            issuedByThisCAAssertion,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.issuedToThisCAAssertion
                ? this.issuedToThisCAAssertion.toElement()
                : undefined,
            this.issuedByThisCAAssertion
                ? this.issuedByThisCAAssertion.toElement()
                : undefined,
        ]);
    }
}
