import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import SubordinateChanges from "./SubordinateChanges";

/**
 * `IncrementalStepRefresh ::= SEQUENCE {
 *   sDSEChanges
 *     CHOICE {add     [0]  SDSEContent,
 *             remove  NULL,
 *             modify  [1]  ContentChange,
 *             ...} OPTIONAL,
 *   subordinateUpdates  SEQUENCE SIZE (1..MAX) OF SubordinateChanges OPTIONAL }`
 */
export default
class IncrementalStepRefresh {
    constructor (
        readonly sDSEChanges: ASN1Element | undefined,
        readonly subordinateUpdates: SubordinateChanges[] | undefined,
    ) {}

    public static fromElement (value: DERElement): IncrementalStepRefresh {
        let sDSEChanges: ASN1Element | undefined = undefined;
        let subordinateUpdates: SubordinateChanges[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "sDSEChanges",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.boolean,
                callback: (el: ASN1Element): void => {
                    sDSEChanges = el;
                },
            },
            {
                name: "subordinateUpdates",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.boolean,
                callback: (el: ASN1Element): void => {
                    subordinateUpdates = el.sizeConstrainedSequenceOf(1)
                        .map((su) => SubordinateChanges.fromElement(su as DERElement));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new IncrementalStepRefresh(sDSEChanges, subordinateUpdates);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.sDSEChanges as DERElement | undefined,
            this.subordinateUpdates
                ? DERElement.fromSequence(this.subordinateUpdates.map((su) => su.toElement()))
                : undefined,
        ]);
    }
}
