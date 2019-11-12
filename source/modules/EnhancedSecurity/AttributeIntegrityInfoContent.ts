import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import Scope from "./Scope";
import Signer from "./Signer";
import AttribsHash from "./AttribsHash";
import HASH from "../AuthenticationFramework/HASH";

/**
 * `AttributeIntegrityInfoContent ::= SEQUENCE {
 *   scope        Scope,           -- Identifies the attributes protected
 *   signer       Signer OPTIONAL, -- Authority or data originators name
 *   attribsHash  AttribsHash,     -- Hash value of protected attributes
 *   ... }`
 */
export default
class AttributeIntegrityInfoContent {
    constructor (
        readonly scope: Scope,
        readonly signer: Signer | undefined,
        readonly attribsHash: AttribsHash,
    ) {}

    public static fromElement (value: ASN1Element): AttributeIntegrityInfoContent {
        let scope!: Scope;
        let signer: Signer | undefined = undefined;
        let attribsHash!: AttribsHash;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "scope",
                optional: false,
                callback: (el: ASN1Element): void => {
                    scope = el;
                },
            },
            {
                name: "signer",
                optional: true,
                tagClass: ASN1TagClass.context,
                callback: (el: ASN1Element): void => {
                    signer = el;
                },
            },
            {
                name: "attribsHash",
                optional: true,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    attribsHash = HASH.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new AttributeIntegrityInfoContent(scope, signer, attribsHash);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.scope as DERElement,
            this.signer as DERElement | undefined,
            this.attribsHash
                ? this.attribsHash.toElement()
                : undefined,
        ]);
    }
}
