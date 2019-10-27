import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import CertificateAssertion from "./CertificateAssertion";

/**
 * `CertificatePairAssertion ::= SEQUENCE {
 *   issuedToThisCAAssertion  [0]  CertificateAssertion OPTIONAL,
 *   issuedByThisCAAssertion  [1]  CertificateAssertion OPTIONAL,
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
class CertificatePairAssertion {
    constructor (
        readonly issuedToThisCAAssertion: CertificateAssertion | undefined,
        readonly issuedByThisCAAssertion: CertificateAssertion | undefined,
    ) {}

    public static fromElement (value: DERElement): CertificatePairAssertion {
        let issuedToThisCAAssertion: CertificateAssertion | undefined = undefined;
        let issuedByThisCAAssertion: CertificateAssertion | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "issuedToThisCAAssertion",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    issuedToThisCAAssertion = CertificateAssertion.fromElement(el as DERElement);
                },
            },
            {
                name: "issuedByThisCAAssertion",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    issuedByThisCAAssertion = CertificateAssertion.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new CertificatePairAssertion(
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
