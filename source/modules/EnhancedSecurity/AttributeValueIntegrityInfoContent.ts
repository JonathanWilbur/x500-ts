import {
    ASN1Element,
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ASN1UniversalType,
    ConstructedElementSpecification,
    validateConstruction,
} from "asn1-ts";
import Signer from "./Signer";
import AVIHash from "./AVIHash";
import HASH from "../AuthenticationFramework/HASH";

/**
 * `AttributeValueIntegrityInfoContent ::= SEQUENCE {
 *   signer   Signer OPTIONAL, -- Authority or data originators name
 *   aVIHash  AVIHash,         -- Hash value of protected attribute
 *   ... }`
 */
export default
class AttributeValueIntegrityInfoContent {
    constructor (
        readonly signer: Signer | undefined,
        readonly aVIHash: AVIHash,
    ) {}

    public static fromElement (value: ASN1Element): AttributeValueIntegrityInfoContent {
        let signer: Signer | undefined = undefined;
        let aVIHash!: AVIHash;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "signer",
                optional: true,
                tagClass: ASN1TagClass.context,
                callback: (el: ASN1Element): void => {
                    signer = el;
                },
            },
            {
                name: "aVIHash",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    aVIHash = HASH.fromElement(el as DERElement);
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new AttributeValueIntegrityInfoContent(signer, aVIHash);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            this.signer as DERElement | undefined,
            this.aVIHash.toElement(),
        ]);
    }
}
