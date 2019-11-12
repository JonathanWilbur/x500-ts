import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import Presentation_context_identifier from "./Presentation-context-identifier";
import Transfer_syntax_name from "./Transfer-syntax-name";

/**
 * `Presentation-context-identifier-list ::= SEQUENCE SIZE (1) OF SEQUENCE {
 *   presentation-context-identifier  Presentation-context-identifier,
 *   transfer-syntax-name             Transfer-syntax-name}`
 */
export default
class Presentation_context_identifier_list {
    constructor (
        readonly presentationContextIdentifier: Presentation_context_identifier,
        readonly transferSyntaxName: Transfer_syntax_name,
    ) {}

    public static fromElement (value: ASN1Element): Presentation_context_identifier_list {
        let presentationContextIdentifier!: Presentation_context_identifier;
        let transferSyntaxName!: Transfer_syntax_name;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "presentationContextIdentifier",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    presentationContextIdentifier = el.integer;
                },
            },
            {
                name: "transferSyntaxName",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    transferSyntaxName = el.objectIdentifier;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new Presentation_context_identifier_list(
            presentationContextIdentifier,
            transferSyntaxName,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            DERElement.fromSequence([
                new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.presentationContextIdentifier,
                ),
                new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.objectIdentifier,
                    this.transferSyntaxName,
                ),
            ]),
        ]);
    }
}
