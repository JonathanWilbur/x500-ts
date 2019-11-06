import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import SDSEContent from "./SDSEContent";
import Subtree from "./Subtree";

/**
 * `TotalRefresh ::= SEQUENCE {
 *   sDSE     SDSEContent OPTIONAL,
 *   subtree  SET SIZE (1..MAX) OF Subtree OPTIONAL,
 *   ...}`
 */
export default
class TotalRefresh {
    constructor (
        readonly sDSE: SDSEContent | undefined,
        readonly subtree: Subtree[] | undefined,
    ) {}

    public static fromElement (value: DERElement): TotalRefresh {
        let sDSE: SDSEContent | undefined = undefined;
        let subtree: Subtree[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "sDSE",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    sDSE = SDSEContent.fromElement(el as DERElement);
                },
            },
            {
                name: "subtree",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.set,
                callback: (el: ASN1Element): void => {
                    subtree = el.sizeConstrainedSetOf(1)
                        .map((st) => Subtree.fromElement(st as DERElement));
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new TotalRefresh(sDSE, subtree);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.sDSE
                ? this.sDSE.toElement()
                : undefined,
            this.subtree
                ? DERElement.fromSet(this.subtree.map((st) => st.toElement()))
                : undefined,
        ]);
    }
}
