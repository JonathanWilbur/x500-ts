import {
    DERElement,
    ASN1TagClass,
    ASN1Construction,
    ASN1UniversalType,
    validateConstruction,
    ConstructedElementSpecification,
    ASN1Element,
} from "asn1-ts";
import validateTag from "../../validateTag";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import Name from "../InformationFramework/Name";
import CertificateSerialNumber from "../AuthenticationFramework/CertificateSerialNumber";
import UserKeyingMaterial from "./UserKeyingMaterial";

/**
 * `SenderStaticInfo::= SEQUENCE {
 *   issuer       Name,
 *   serialNumber CertificateSerialNumber,
 *   partyAinfo   UserKeyingMaterial,
 *   ... }`
 */
export default
class SenderStaticInfo {
    constructor (
        readonly issuer: Name,
        readonly serialNumber: CertificateSerialNumber,
        readonly partyAinfo: UserKeyingMaterial,
    ) {}

    public static fromElement (value: ASN1Element): SenderStaticInfo {
        let issuer!: Name;
        let serialNumber!: CertificateSerialNumber;
        let partyAinfo!: UserKeyingMaterial;
        const specification: ConstructedElementSpecification[] = [
            {
                name: "issuer",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.constructed,
                tagNumber: ASN1UniversalType.sequence,
                callback: (el: ASN1Element): void => {
                    issuer = el.sizeConstrainedSequenceOf(1)
                        .map((rdnElement: ASN1Element, rdnIndex: number): RelativeDistinguishedName => {
                            validateTag(rdnElement as DERElement, `issuer[${rdnIndex}]`,
                                [ ASN1TagClass.universal ],
                                [ ASN1Construction.constructed ],
                                [ ASN1UniversalType.set ],
                            );
                            return rdnElement.sizeConstrainedSetOf(1)
                                .map((atavElement: ASN1Element, atavIndex: number): AttributeTypeAndValue => {
                                    validateTag(atavElement as DERElement, `issuer[${rdnIndex}][${atavIndex}]`,
                                        [ ASN1TagClass.universal ],
                                        [ ASN1Construction.constructed ],
                                        [ ASN1UniversalType.sequence ],
                                    );
                                    return AttributeTypeAndValue.fromElement(atavElement as DERElement);
                                });
                        });
                },
            },
            {
                name: "serialNumber",
                optional: false,
                tagClass: ASN1TagClass.universal,
                construction: ASN1Construction.primitive,
                tagNumber: ASN1UniversalType.integer,
                callback: (el: ASN1Element): void => {
                    serialNumber = el.octetString;
                },
            },
            {
                name: "partyAinfo",
                optional: false,
                tagClass: ASN1TagClass.universal,
                tagNumber: ASN1UniversalType.octetString,
                callback: (el: ASN1Element): void => {
                    partyAinfo = el.octetString;
                },
            },
        ];
        validateConstruction(value.sequence, specification);
        return new SenderStaticInfo(issuer, serialNumber, partyAinfo);
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            DERElement.fromSequence(
                this.issuer.map((rdn) => DERElement.fromSet(rdn.map((atav) => atav.toElement()))),
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer,
                this.serialNumber,
            ),
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.octetString,
                this.partyAinfo,
            ),
        ]);
    }

    public static fromBytes (value: Uint8Array): SenderStaticInfo {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return SenderStaticInfo.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
