import { ASN1Element, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "asn1-ts";
import EDIPartyName from "./EDIPartyName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import * as errors from "../../errors";

/**
 * `GeneralName ::= CHOICE {
 *   otherName                  [0]  INSTANCE OF OTHER-NAME,
 *   rfc822Name                 [1]  IA5String,
 *   dNSName                    [2]  IA5String,
 *   x400Address                [3]  ORAddress,
 *   directoryName              [4]  Name,
 *   ediPartyName               [5]  EDIPartyName,
 *   uniformResourceIdentifier  [6]  IA5String,
 *   iPAddress                  [7]  OCTET STRING,
 *   registeredID               [8]  OBJECT IDENTIFIER,
 *   ... }`
 */
type GeneralName = ASN1Element;
export default GeneralName;

export
function printGeneralName (value: ASN1Element): string {
    if (value.tagClass !== ASN1TagClass.context) return "";
    switch (value.tagNumber) {
    case (0): { // otherName
        switch (value.validateTag(
            [ ASN1TagClass.universal ],
            [ ASN1Construction.constructed ],
            [ ASN1UniversalType.external ])
        ) {
        case 0: break;
        case -1: throw new errors.X500Error("Invalid tag class on INSTANCE OF OTHER-NAME");
        case -2: throw new errors.X500Error("Invalid construction on INSTANCE OF OTHER-NAME");
        case -3: throw new errors.X500Error("Invalid tag number on INSTANCE OF OTHER-NAME");
        default: throw new errors.X500Error("Undefined error when validating INSTANCE OF OTHER-NAME tag");
        }

        const otherNameElements: ASN1Element[] = value.sequence;
        if (otherNameElements.length !== 2) {
            throw new errors.X500Error("Invalid number of elements in INSTANCE OF OTHER-NAME");
        }

        switch (otherNameElements[0].validateTag(
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive ],
            [ ASN1UniversalType.objectIdentifier ])
        ) {
        case 0: break;
        case -1: throw new errors.X500Error("Invalid tag class on OTHER-NAME.id");
        case -2: throw new errors.X500Error("Invalid construction on OTHER-NAME.id");
        case -3: throw new errors.X500Error("Invalid tag number on OTHER-NAME.id");
        default: throw new errors.X500Error("Undefined error when validating OTHER-NAME.id tag");
        }

        return `otherName:${otherNameElements[0].objectIdentifier}:${otherNameElements[1].value}`;
    }
    case (1): { // rfc822Name
        return `rfc822Name:${value.ia5String}`;
    }
    case (2): { // dNSName
        return `dnsName:${value.ia5String}`;
    }
    /**
         * From https://en.wikipedia.org/wiki/X.400:
         * The standards themselves originally did not specify how these email
         * addresses should be written (for instance on a business card) or
         * even whether the field identifiers should be upper or lower case, or
         * what character sets were allowed. RFC 1685 specified one encoding,
         * based on a 1993 draft of ITU-T Recommendation F.401, which looked
         * like: "G=Harald;S=Alvestrand;O=Uninett;PRMD=Uninett;A=;C=no"
         */
    case (3): { // x400Address
        return ""; // TODO:
    }
    case (4): { // directoryName
        return value.sizeConstrainedSequenceOf(1)
            .map((rdn) => rdn.sizeConstrainedSetOf(1)
                .map((atav) => AttributeTypeAndValue.fromElement(atav).toString())
                .join("+"),
            ).join(",");
    }
    case (5): { // ediPartyName
        const epn: EDIPartyName = EDIPartyName.fromElement(value);
        return `ediPartyName:${epn.partyName}`;
    }
    case (6): { // uniformResourceIdentifier
        return `uniformResourceIdentifier:${value.ia5String}`;
    }
    case (7): { // iPAddress
        return `iPAddress:${value.octetString}`;
    }
    case (8): { // registeredID
        return `registeredID:${value.objectIdentifier}`;
    }
    default: return "UNKNOWN NAME SYNTAX";
    }
}
