/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import {
    DomainName,
    _decode_DomainName,
    _encode_DomainName,
} from "../SelectedAttributeTypes/DomainName.ta";
import { id_asx_dnsString } from "../SelectedAttributeTypes/id-asx-dnsString.va";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export {
    DomainName,
    _decode_DomainName,
    _encode_DomainName,
} from "../SelectedAttributeTypes/DomainName.ta";
export { id_asx_dnsString } from "../SelectedAttributeTypes/id-asx-dnsString.va";

/* START_OF_SYMBOL_DEFINITION dnsString */
/**
 * @summary dnsString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dnsString SYNTAX-NAME ::= {
 *   LDAP-DESC         "DNS Name String"
 *   DIRECTORY SYNTAX  DomainName
 *   ID                id-asx-dnsString }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME<DomainName>}
 * @implements {SYNTAX_NAME<DomainName>}
 */
export const dnsString: SYNTAX_NAME<DomainName> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_DomainName,
    },
    encoderFor: {
        "&Type": _encode_DomainName,
    },
    "&ldapDesc": "DNS Name String" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_dnsString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dnsString */

/* eslint-enable */
