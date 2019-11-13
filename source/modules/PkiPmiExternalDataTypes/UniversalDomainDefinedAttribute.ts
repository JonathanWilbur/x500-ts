import UniversalOrBMPString from "./UniversalOrBMPString";
import {
    ASN1Element,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";

/**
 * `UniversalDomainDefinedAttribute ::= SEQUENCE {
 *   type   UniversalOrBMPString{ub-domain-defined-attribute-type-length},
 *   value  UniversalOrBMPString{ub-domain-defined-attribute-value-length} }`
 */
export default
class UniversalDomainDefinedAttribute {
    constructor (
        readonly type: UniversalOrBMPString,
        readonly value: UniversalOrBMPString,
    ) {}

    public static fromElement (value: DERElement): UniversalDomainDefinedAttribute {
        let type!: UniversalOrBMPString;
        let value_!: UniversalOrBMPString;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "type",
                optional: false,
                callback: (el: ASN1Element): void => {
                    type = UniversalOrBMPString.fromElement(el as DERElement);
                },
            },
            {
                name: "value",
                optional: false,
                callback: (el: ASN1Element): void => {
                    value_ = UniversalOrBMPString.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new UniversalDomainDefinedAttribute(type, value_);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.type.toElement(),
            this.value.toElement(),
        ]);
    }
}
