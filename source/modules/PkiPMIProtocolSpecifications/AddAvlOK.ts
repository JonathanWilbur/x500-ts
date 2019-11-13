import {
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";

/**
 * `AddAvlOK ::= SEQUENCE {
 *   ok     NULL,
 *   ... }`
 */
export default
class AddAvlOK {
    constructor (
        readonly ok: null,
    ) {}

    public static fromElement (value: DERElement): AddAvlOK {
        const specification: ConstructedElementSpecification[] = [
            {
                name: "ok",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.nill,
            },
        ];
        validateConstruction(value.sequence, specification);
        return new AddAvlOK(null);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.nill,
                this.ok,
            ),
        ]);
    }
}
