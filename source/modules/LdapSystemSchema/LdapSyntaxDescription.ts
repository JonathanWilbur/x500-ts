import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
    ObjectIdentifier,
    ASN1UniversalType,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import UnboundedDirectoryString from "../SelectedAttributeTypes/UnboundedDirectoryString";

/**
 * `LdapSyntaxDescription ::= SEQUENCE {
 *   identifier               SYNTAX-NAME.&id,
 *   description              UnboundedDirectoryString OPTIONAL,
 *   ... }`
 */
export default
class LdapSyntaxDescription {
    constructor (
        readonly identifier: ObjectIdentifier,
        readonly description: UnboundedDirectoryString | undefined,
    ) {}

    public static fromElement (value: DERElement): LdapSyntaxDescription {
        let identifier!: ObjectIdentifier;
        let description: UnboundedDirectoryString | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "identifier",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    identifier = (el as DERElement).objectIdentifier;
                },
            },
            {
                name: "description",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    description = UnboundedDirectoryString.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new LdapSyntaxDescription(
            identifier,
            description,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                this.identifier,
            ),
            this.description
                ? this.description.toElement()
                : undefined,
        ]);
    }

    public static fromBytes (value: Uint8Array): LdapSyntaxDescription {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return LdapSyntaxDescription.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
