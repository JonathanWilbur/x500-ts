import GeneralSubtrees from "../CertificateExtensions/GeneralSubtrees";
import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import GeneralSubtree from "../CertificateExtensions/GeneralSubtree";

/**
 * HolderNameConstraintsSyntax ::= SEQUENCE {
 *   permittedSubtrees  [0]  GeneralSubtrees,
 *   excludedSubtrees   [1]  GeneralSubtrees OPTIONAL,
 *   ... }
 */
export default
class HolderNameConstraintsSyntax {
    constructor (
        readonly permittedSubtrees: GeneralSubtrees,
        readonly excludedSubtrees: GeneralSubtrees | undefined,
    ) {}

    public static fromElement (value: DERElement): HolderNameConstraintsSyntax {
        let permittedSubtrees!: GeneralSubtrees;
        let excludedSubtrees: GeneralSubtrees | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "permittedSubtrees",
                optional: false,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    permittedSubtrees = (el as DERElement).sequence.map(GeneralSubtree.fromElement);
                },
            },
            {
                name: "excludedSubtrees",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.primitive,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    excludedSubtrees = (el as DERElement).sequence.map(GeneralSubtree.fromElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new HolderNameConstraintsSyntax(
            permittedSubtrees,
            excludedSubtrees,
        );
    }

    public toElement (): DERElement {
        const permittedSubtreesElement: DERElement = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            0,
        );
        permittedSubtreesElement.sequence = this.permittedSubtrees.map((pst) => pst.toElement());
        let excludedSubtreesElement: DERElement | undefined = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.constructed,
            1,
        );
        if (this.excludedSubtrees) {
            excludedSubtreesElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                1,
            );
            permittedSubtreesElement.sequence = this.excludedSubtrees.map((xst) => xst.toElement());
        }
        return DERElement.fromSequence([
            permittedSubtreesElement,
            excludedSubtreesElement,
        ]);
    }

    public static fromBytes (value: Uint8Array): HolderNameConstraintsSyntax {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return HolderNameConstraintsSyntax.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
