import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import validateTag from "../../validateTag";
import TotalRefresh from "./TotalRefresh";
import SDSEContent from "./SDSEContent";

/**
 * `Subtree ::= SEQUENCE {
 *   rdn  RelativeDistinguishedName,
 *   COMPONENTS OF TotalRefresh,
 *   ...}`
 */
export default
class Subtree {
    constructor (
        readonly rdn: RelativeDistinguishedName,
        readonly totalRefresh: TotalRefresh,
    ) {}

    public static fromElement (value: ASN1Element): Subtree {
        let rdn!: RelativeDistinguishedName;
        let sDSE: SDSEContent | undefined = undefined;
        let subtree: Subtree[] | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "rdn",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.set,
                callback: (el: ASN1Element): void => {
                    rdn = el.sizeConstrainedSetOf(1)
                        .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                            validateTag(atavElement as DERElement, `rdn[${atavIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.sequence ],
                            );
                            return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                        });
                },
            },
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
        const totalRefresh = new TotalRefresh(sDSE, subtree);
        return new Subtree(rdn, totalRefresh);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            DERElement.fromSet(this.rdn.map((atav) => atav.toElement())),
            this.totalRefresh.sDSE
                ? this.totalRefresh.sDSE.toElement()
                : undefined,
            this.totalRefresh.subtree
                ? DERElement.fromSet(this.totalRefresh.subtree.map((st) => st.toElement()))
                : undefined,
        ]);
    }
}
