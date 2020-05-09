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
 * `Wrap-Body ::= SEQUENCE {int-cksum  BIT STRING,
 *                         data       BIT STRING
 * }`
 */
export default
class Wrap_Body {
    constructor (
        readonly int_cksum: boolean[],
        readonly data: boolean[],
    ) {}

    public static fromElement (value: DERElement): Wrap_Body {
        let int_cksum!: boolean[];
        let data!: boolean[];
        const specification: ConstructedElementSpecification[] = [
            {
                name: "int-cksum",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.bitString,
                callback: (el: ASN1Element): void => {
                    int_cksum = el.bitString;
                },
            },
            {
                name: "data",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.bitString,
                callback: (el: ASN1Element): void => {
                    data = el.bitString;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new Wrap_Body(int_cksum, data);
    }

    public toElement (): DERElement {
        const int_cksumElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.bitString,
        );
        int_cksumElement.bitString = this.int_cksum;
        const dataElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.bitString,
        );
        dataElement.bitString = this.data;
        return DERElement.fromSequence([
            int_cksumElement,
            dataElement,
        ]);
    }
}
