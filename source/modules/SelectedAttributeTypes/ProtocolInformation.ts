import {
    ASN1Construction,
    ASN1TagClass,
    DERElement,
    ObjectIdentifier,
    ASN1UniversalType,
    ASN1Element,
} from "asn1-ts";
import * as errors from "../../errors";
import validateTag from "../../validateTag";

/**
 * `ProtocolInformation ::= SEQUENCE {
 *   nAddress  OCTET STRING,
 *   profiles  SET OF OBJECT IDENTIFIER }`
 */
export default
class ProtocolInformation {
    constructor (
        readonly nAddress: Uint8Array,
        readonly profiles: ObjectIdentifier[],
    ) {}

    public static fromElement (value: ASN1Element): ProtocolInformation {
        const protocolInformationElements: ASN1Element[] = value.sequence;
        if (protocolInformationElements.length !== 2) {
            throw new errors.X500Error(
                "Invalid number of elements in ProtocolInformation. Expected "
                + `2, but received ${protocolInformationElements.length}.`,
            );
        }

        validateTag(protocolInformationElements[0], "ProtocolInformation.nAddress",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive ],
            [ ASN1UniversalType.octetString ],
        );

        validateTag(protocolInformationElements[1], "ProtocolInformation.profiles",
            [ ASN1TagClass.universal ],
            [ ASN1Construction.constructed ],
            [ ASN1UniversalType.set ],
        );

        return new ProtocolInformation(
            protocolInformationElements[0].octetString,
            protocolInformationElements[1].set.map((profile, index) => {
                validateTag(profile, `ProtocolInformation.profiles[${index}]`,
                    [ ASN1TagClass.universal ],
                    [ ASN1Construction.primitive ],
                    [ ASN1UniversalType.objectIdentifier ],
                );
                return profile.objectIdentifier;
            }),
        );
    }

    public toElement (): DERElement {
        return DERElement.fromSequence([
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.octetString,
                this.nAddress,
            ),
            DERElement.fromSet(this.profiles.map((profile) => new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.objectIdentifier,
                profile,
            ))),
        ]);
    }

    public static fromBytes (value: Uint8Array): ProtocolInformation {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return ProtocolInformation.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
