import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ASN1UniversalType,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";

/**
 * `EntryLimit ::= SEQUENCE {
 *   default  INTEGER,
 *   max      INTEGER,
 *   ... }`
 */
export default
class EntryLimit {
    constructor (
        readonly default_: number,
        readonly max: number,
    ) {}

    public static fromElement (value: DERElement): EntryLimit {
        let default_!: number;
        let max!: number;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "default",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    default_ = el.integer;
                },
            },
            {
                name: "max",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    max = el.integer;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new EntryLimit(
            default_,
            max,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.default_,
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.max,
            ),
        ]);
    }

    public static fromBytes (value: Uint8Array): EntryLimit {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return EntryLimit.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
