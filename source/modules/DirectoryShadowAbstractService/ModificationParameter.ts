import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import SupplierAndConsumers from "../DSAOperationalAttributeTypes/SupplierAndConsumers";

/**
 * `ModificationParameter ::= SEQUENCE {
 *   secondaryShadows  SET OF SupplierAndConsumers,
 *   ... }`
 */
export default
class ModificationParameter {
    constructor (
        readonly secondaryShadows: SupplierAndConsumers[],
    ) {}

    public static fromElement (value: DERElement): ModificationParameter {
        let secondaryShadows!: SupplierAndConsumers[];
        const specification: ConstructedElementSpecification[] = [
            {
                name: "secondaryShadows",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.set,
                callback: (el: ASN1Element): void => {
                    secondaryShadows = el.set.map((ss) => SupplierAndConsumers.fromElement(ss as DERElement));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ModificationParameter(secondaryShadows);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            DERElement.fromSet(this.secondaryShadows.map((ss) => ss.toElement())),
        ]);
    }
}
