import {
    ASN1Element,
    ASN1TagClass,
    DERElement,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import UnboundedDirectoryString from "../SelectedAttributeTypes/UnboundedDirectoryString";

/**
 * `ContextInformation ::= SEQUENCE {
 *   syntax           UnboundedDirectoryString,
 *   assertionSyntax  UnboundedDirectoryString OPTIONAL,
 *   ... }`
 */
export default
class ContextInformation {
    constructor (
        readonly syntax: UnboundedDirectoryString,
        readonly assertionSyntax: UnboundedDirectoryString | undefined,
    ) {}

    public static fromElement (value: ASN1Element): ContextInformation {
        let syntax!: UnboundedDirectoryString;
        let assertionSyntax: UnboundedDirectoryString | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "syntax",
                optional: false,
                tagClass: ASN1TagClass.universal,
                callback: (el: ASN1Element): void => {
                    syntax = UnboundedDirectoryString.fromElement(el as DERElement);
                },
            },
            {
                name: "assertionSyntax",
                optional: true,
                tagClass: ASN1TagClass.universal,
                callback: (el: ASN1Element): void => {
                    assertionSyntax = UnboundedDirectoryString.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ContextInformation(syntax, assertionSyntax);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.syntax.toElement(),
            this.assertionSyntax
                ? this.assertionSyntax.toElement()
                : undefined,
        ]);
    }
}
