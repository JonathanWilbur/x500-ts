import {
    ASN1UniversalType,
    ASN1Construction,
    ASN1Element,
    ASN1TagClass,
    DERElement,
    validateConstruction,
} from "asn1-ts";
import ConstructedElementSpecification from "../../ConstructedElementSpecification";
import UniqueIdentifier from "./UniqueIdentifier";
import DistinguishedName from "../InformationFramework/DistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";

/**
 * `NameAndOptionalUID ::= SEQUENCE {
 *   dn   DistinguishedName,
 *   uid  UniqueIdentifier OPTIONAL,
 *   ... }`
 */
export default
class NameAndOptionalUID {
    constructor (
        readonly dn: DistinguishedName,
        readonly uid: UniqueIdentifier | undefined,
    ) {}

    public static fromElement (value: DERElement): NameAndOptionalUID {
        let dn!: DistinguishedName;
        let uid: UniqueIdentifier | undefined = undefined;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "dn",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    dn = (el as DERElement).sequence
                        .map((rdnElement) => (rdnElement.sizeConstrainedSetOf(1) as DERElement[])
                            .map(AttributeTypeAndValue.fromElement));
                },
            },
            {
                name: "uid",
                optional: true,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.bitString,
                callback: (el: ASN1Element): void => {
                    uid = el.bitString;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new NameAndOptionalUID(dn, uid);
    }

    public toElement (): DERElement {
        let uidElement: DERElement | undefined = undefined;
        if (this.uid) {
            uidElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.bitString,
            );
            uidElement.bitString = this.uid;
        }

        return DERElement.fromSequence([
            DERElement.fromSequence(
                this.dn
                    .map((rdn) => DERElement.fromSet(rdn
                        .map((atav) => atav.toElement())))),
            uidElement,
        ]);
    }

    public static fromBytes (value: Uint8Array): NameAndOptionalUID {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return NameAndOptionalUID.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
