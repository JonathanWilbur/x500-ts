import {
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import ScopeRestrictions from "./ScopeRestrictions";
import ScopeRestriction from "./ScopeRestriction";
import Extensions from "./Extensions";
import Extension from "./Extension";

/**
 * Note that this has no real definition in this ASN.1 module. This has been
 * created for convenience.
 *
 * `SEQUENCE {
 *   idType                     CHOICE {
 *     certIdentifier        [0]  PKCertIdentifier,
 *     entityGroup                DistinguishedName, -- only for constrained = FALSE
 *     ... },
 *   scope                 [0]  IMPLICIT ScopeRestrictions OPTIONAL,
 *   entryExtensions       [1]  IMPLICIT Extensions OPTIONAL,
 *   ... }`
 */
export default
class TBSCertAVLEntry {
    constructor (
        readonly idType: DERElement,
        readonly scope: ScopeRestrictions | undefined,
        readonly entryExtensions: Extensions | undefined,
    ) {}

    public static fromElement (value: ASN1Element): TBSCertAVLEntry {
        let idType!: DERElement;
        let scope: ScopeRestrictions | undefined = undefined;
        let entryExtensions: Extensions | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "idType",
                optional: false,
                callback: (el: ASN1Element): void => {
                    idType = el as DERElement;
                },
            },
            {
                name: "scope",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 0,
                callback: (el: ASN1Element): void => {
                    scope = (el as DERElement).sequence.map(ScopeRestriction.fromElement);
                },
            },
            {
                name: "entryExtensions",
                optional: true,
                tagClass: ASN1TagClass.context,
                construction: ASN1Construction.constructed,
                tagNumber: 1,
                callback: (el: ASN1Element): void => {
                    entryExtensions = (el as DERElement).sequence.map(Extension.fromElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new TBSCertAVLEntry(
            idType,
            scope,
            entryExtensions,
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.idType,
            this.scope
                ? DERElement.fromSequence(this.scope.map((sr) => sr.toElement()))
                : undefined,
            this.entryExtensions
                ? DERElement.fromSequence(this.entryExtensions.map((ee) => ee.toElement()))
                : undefined,
        ]);
    }

    public static fromBytes (value: Uint8Array): TBSCertAVLEntry {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return TBSCertAVLEntry.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
