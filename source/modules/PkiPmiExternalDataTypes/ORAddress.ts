import {
    ASN1Element,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import BuiltInStandardAttributes from "./BuiltInStandardAttributes";
import BuiltInDomainDefinedAttributes from "./BuiltInDomainDefinedAttributes";
import BuiltInDomainDefinedAttribute from "./BuiltInDomainDefinedAttribute";
import ExtensionAttributes from "./ExtensionAttributes";
import ExtensionAttribute from "./ExtensionAttribute";

/**
 * `ORAddress ::= SEQUENCE {
 *   built-in-standard-attributes        BuiltInStandardAttributes,
 *   built-in-domain-defined-attributes  BuiltInDomainDefinedAttributes OPTIONAL,
 *   -- see also teletex-domain-defined-attributes
 *   extension-attributes                ExtensionAttributes OPTIONAL }`
 */
export default
class ORAddress {
    constructor (
        readonly builtInStandardAttributes: BuiltInStandardAttributes,
        readonly builtInDomainDefinedAttributes: BuiltInDomainDefinedAttributes | undefined,
        readonly extensionAttributes: ExtensionAttributes | undefined,
    ) {}

    public static fromElement (value: DERElement): ORAddress {
        let builtInStandardAttributes!: BuiltInStandardAttributes;
        let builtInDomainDefinedAttributes: BuiltInDomainDefinedAttributes | undefined = undefined;
        let extensionAttributes: ExtensionAttributes | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "builtInStandardAttributes",
                optional: false,
                callback: (el: ASN1Element): void => {
                    builtInStandardAttributes = BuiltInStandardAttributes.fromElement(el as DERElement);
                },
            },
            {
                name: "builtInDomainDefinedAttributes",
                optional: true,
                callback: (el: ASN1Element): void => {
                    builtInDomainDefinedAttributes = el.sizeConstrainedSequenceOf(1)
                        .map((bidda) => BuiltInDomainDefinedAttribute.fromElement(bidda as DERElement));
                },
            },
            {
                name: "extensionAttributes",
                optional: true,
                callback: (el: ASN1Element): void => {
                    extensionAttributes = el.sizeConstrainedSequenceOf(1)
                        .map((xa) => ExtensionAttribute.fromElement(xa as DERElement));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ORAddress(
            builtInStandardAttributes,
            builtInDomainDefinedAttributes,
            extensionAttributes,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.builtInStandardAttributes.toElement(),
            this.builtInDomainDefinedAttributes
                ? DERElement.fromSequence(
                    this.builtInDomainDefinedAttributes.map((bidda) => bidda.toElement()),
                )
                : undefined,
            this.extensionAttributes
                ? DERElement.fromSequence(
                    this.extensionAttributes.map((xa) => xa.toElement()),
                )
                : undefined,
        ]);
    }
}
