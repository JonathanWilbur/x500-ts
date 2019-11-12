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
import Abstract_syntax_name from "./Abstract-syntax-name";
import Transfer_syntax_name from "./Transfer-syntax-name";

/**
 * `ContextListItem ::= SEQUENCE {
 *     presentation-context-identifier  Presentation-context-identifier,
 *     abstract-syntax-name             Abstract-syntax-name,
 *     transfer-syntax-name-list        SEQUENCE OF Transfer-syntax-name }`
*/
export default
class ContextListItem {
    constructor (
        readonly presentationContextIdentifier: Presentation_context_identifier,
        readonly abstractSyntaxName: Abstract_syntax_name,
        readonly transferSyntaxNameList: Transfer_syntax_name[],
    ) {}

    public static fromElement (value: DERElement): ContextListItem {
        let presentationContextIdentifier!: Presentation_context_identifier;
        let abstractSyntaxName!: Abstract_syntax_name;
        let transferSyntaxNameList!: Transfer_syntax_name[];
        const specification: ConstructedElementSpecification[] = [
            {
                name: "presentation-context-identifier",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    presentationContextIdentifier = el.integer;
                },
            },
            {
                name: "abstract-syntax-name",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.objectIdentifier,
                callback: (el: ASN1Element): void => {
                    abstractSyntaxName = el.objectIdentifier;
                },
            },
            {
                name: "transfer-syntax-name-list",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    transferSyntaxNameList = el.sequence.map((tsn) => tsn.objectIdentifier);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ContextListItem(
            presentationContextIdentifier,
            abstractSyntaxName,
            transferSyntaxNameList,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
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
                this.abstractSyntaxName,
            ),
            DERElement.fromSequence(
                this.transferSyntaxNameList.map((tsn) => new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.objectIdentifier,
                    tsn,
                )),
            ),
        ]);
    }
}
