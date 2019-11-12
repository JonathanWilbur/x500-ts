import { ASN1TagClass, ASN1Construction, ASN1UniversalType, ObjectIdentifier, DERElement, ASN1Element } from "asn1-ts";
import * as errors from "../../errors";

// AccessDescription ::= SEQUENCE {
//     accessMethod    OBJECT IDENTIFIER,
//     accessLocation  GeneralName }

export default
class AccessDescription {
    constructor (
        readonly accessMethod: ObjectIdentifier,
        readonly accessLocation: ASN1Element,
    ) {}

    public static fromElement (value: ASN1Element): AccessDescription {
        switch (value.validateTag(
            [ ASN1TagClass.universal ],
            [ ASN1Construction.constructed ],
            [ ASN1UniversalType.sequence ],
        )) {
        case 0: break;
        case -1: throw new errors.X500Error("Invalid tag class on AccessDescription");
        case -2: throw new errors.X500Error("Invalid construction on AccessDescription");
        case -3: throw new errors.X500Error("Invalid tag number on AccessDescription");
        default: throw new errors.X500Error("Undefined error when validating AccessDescription tag");
        }

        const accessDescriptionElements: ASN1Element[] = value.sequence;
        if (accessDescriptionElements.length !== 2) {
            throw new errors.X500Error("Invalid number of elements in AccessDescription.");
        }

        switch (accessDescriptionElements[0].validateTag(
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive ],
            [ ASN1UniversalType.objectIdentifier ],
        )) {
        case 0: break;
        case -1: throw new errors.X500Error("Invalid tag class on AccessDescription.accessMethod");
        case -2: throw new errors.X500Error("Invalid construction on AccessDescription.accessMethod");
        case -3: throw new errors.X500Error("Invalid tag number on AccessDescription.accessMethod");
        default: throw new errors.X500Error("Undefined error when validating AccessDescription.accessMethod tag");
        }

        return new AccessDescription(
            accessDescriptionElements[0].objectIdentifier,
            accessDescriptionElements[1],
        );
    }

    public toElement (): DERElement {
        const accessMethodElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.objectIdentifier,
        );
        accessMethodElement.objectIdentifier = this.accessMethod;
        const accessDescriptionElement: DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.sequence,
        );
        accessDescriptionElement.sequence = [
            accessMethodElement,
            this.accessLocation,
        ];
        return accessDescriptionElement;
    }

    public static fromBytes (value: Uint8Array): AccessDescription {
        const el: DERElement = new DERElement();
        el.fromBytes(value);
        return AccessDescription.fromElement(el);
    }

    public toBytes (): Uint8Array {
        return this.toElement().toBytes();
    }
}
