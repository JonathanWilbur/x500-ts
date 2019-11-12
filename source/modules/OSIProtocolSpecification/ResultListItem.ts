import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import Result from "./Presentation-context-identifier";
import Transfer_syntax_name from "./Transfer-syntax-name";

/**
 * `ResultListItem ::= SEQUENCE {
 *     result                [0] IMPLICIT Result,
 *     transfer-syntax-name  [1] IMPLICIT Transfer-syntax-name   OPTIONAL,
 *     provider-reason       [2] IMPLICIT INTEGER {
 *       reason-not-specified                     (0),
 *       abstract-syntax-not-supported            (1),
 *       proposed-transfer-syntaxes-not-supported (2)} OPTIONAL}`
 */
export default
class ResultListItem {
    constructor (
        readonly result: Result,
        readonly transferSyntaxName: Transfer_syntax_name | undefined,
        readonly providerReason: number | undefined,
    ) {}

    public static fromElement (value: DERElement): ResultListItem {
        let result!: Result;
        let transferSyntaxName: Transfer_syntax_name | undefined = undefined;
        let providerReason: number | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "result",
                optional: false,
                tagClass: ASN1TagClass.context,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    result = el.integer;
                },
            },
            {
                name: "transfer-syntax-name",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    transferSyntaxName = el.objectIdentifier;
                },
            },
            {
                name: "provider-reason",
                optional: true,
                tagClass: ASN1TagClass.context,
                tagNumber: 2,
                callback: (el: ASN1Element): void => {
                    providerReason = el.integer;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new ResultListItem(
            result,
            transferSyntaxName,
            providerReason,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.result,
            ),
            this.transferSyntaxName
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.objectIdentifier,
                    this.transferSyntaxName,
                )
                : undefined,
            this.providerReason
                ? new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.primitive,
                    ASN1UniversalType.integer,
                    this.providerReason,
                )
                : undefined,
        ]);
    }
}
