import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ASN1UniversalType,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import AttributeType from "../InformationFramework/AttributeType";

/**
 * `MaxValueCount ::= SEQUENCE {
 *   type      AttributeType,
 *   maxCount  INTEGER,
 *   ... }`
 */
export default
class MaxValueCount {
    constructor (
        readonly type: AttributeType,
        readonly maxCount: number,
    ) {}

    public static fromElement (value: DERElement): MaxValueCount {
        let type!: AttributeType;
        let maxCount!: number;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "type",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    type = (el as DERElement).objectIdentifier;
                },
            },
            {
                name: "maxCount",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    maxCount = (el as DERElement).integer;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new MaxValueCount(
            type,
            maxCount,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.type,
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.maxCount,
            ),
        ]);
    }

    public static fromBytes (value: Uint8Array): MaxValueCount {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return MaxValueCount.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
