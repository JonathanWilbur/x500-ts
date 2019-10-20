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
 * `RestrictedValue ::= SEQUENCE {
 *   type      AttributeType,
 *   valuesIn  AttributeType,
 *   ... }`
 */
export default
class RestrictedValue {
    constructor (
        readonly type: AttributeType,
        readonly valuesIn: AttributeType,
    ) {}

    public static fromElement (value: DERElement): RestrictedValue {
        let type!: AttributeType;
        let valuesIn!: AttributeType;
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
                name: "valuesIn",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    valuesIn = (el as DERElement).objectIdentifier;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new RestrictedValue(
            type,
            valuesIn,
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
                ASN1UniversalType.objectIdentifier,
                this.valuesIn,
            ),
        ]);
    }

    public static fromBytes (value: Uint8Array): RestrictedValue {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return RestrictedValue.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
