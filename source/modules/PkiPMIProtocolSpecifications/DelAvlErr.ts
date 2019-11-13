import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import AVMP_error from "./AVMP-error";

/**
 * `DelAvlErr ::= SEQUENCE {
 *   notOK  AVMP-error,
 *   ... }`
 */
export default
class DelAvlErr {
    constructor (
        readonly notOK: AVMP_error,
    ) {}

    public static fromElement (value: DERElement): DelAvlErr {
        let notOK!: AVMP_error;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "notOK",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.enumerated,
                callback: (el: ASN1Element): void => {
                    notOK = el.enumerated;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new DelAvlErr(notOK);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.enumerated,
                this.notOK,
            ),
        ]);
    }
}
