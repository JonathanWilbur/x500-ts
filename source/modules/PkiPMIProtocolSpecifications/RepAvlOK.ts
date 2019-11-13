import {
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";

/**
 * `RepAvlOK ::= SEQUENCE {
 *   ok     NULL,
 *   ... }`
 */
export default
class RepAvlOK {
    constructor (
        readonly ok: null,
    ) {}

    public static fromElement (value: DERElement): RepAvlOK {
        const specification: ConstructedElementSpecification[] = [
            {
                name: "ok",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.nill,
            },
        ];
        validateConstruction(value.sequence, specification);
        return new RepAvlOK(null);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.nill,
            ),
        ]);
    }
}
