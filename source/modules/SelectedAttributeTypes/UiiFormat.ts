import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import URI from "./URI";
import UiiFilter from "./UiiFilter";

/**
 * `UiiFormat ::= SEQUENCE {
 *   baseObject  URI  OPTIONAL,
 *   subset      ENUMERATED {
 *     baseObject   (0),
 *     oneLevel     (1),
 *     wholeSubtree (2) } DEFAULT baseObject,
 *   next        CHOICE {
 *     length      INTEGER,
 *     filter      UiiFilter } }`
 */
export default
class UiiFormat {
    constructor (
        readonly baseObject: URI | undefined,
        readonly subset: number,
        readonly next: number | UiiFilter,
    ) {}

    public static fromElement (value: DERElement): UiiFormat {
        let baseObject: URI | undefined = undefined;
        let subset!: number;
        let next!: number | UiiFilter;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "baseObject",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.utf8String,
                callback: (el: ASN1Element): void => {
                    baseObject = el.utf8String;
                },
            },
            {
                name: "subset",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.enumerated,
                callback: (el: ASN1Element): void => {
                    subset = el.enumerated;
                },
            },
            {
                name: "next",
                optional: true,
                choice: [
                    {
                        name: "next",
                        optional: true,
                        tagClass: ASN1TagClass.universal,
                        construction: ASN1Construction.primitive,
                        tagNumber: ASN1UniversalType.integer,
                        callback: (el: ASN1Element): void => {
                            next = el.integer;
                        },
                    },
                    {
                        name: "next",
                        optional: true,
                        callback: (el: ASN1Element): void => {
                            next = el as DERElement;
                        },
                    },
                ],
            },
        ];
        validateConstruction(value.sequence, specification);
        return new UiiFormat(
            baseObject,
            subset,
            next,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.baseObject
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.utf8String,
                    this.baseObject,
                )
                : undefined,
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.enumerated,
                this.subset,
            ),
            typeof this.next === "number"
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.next,
                )
                : this.next,
        ]);
    }

    public static fromBytes (value: Uint8Array): UiiFormat {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return UiiFormat.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
