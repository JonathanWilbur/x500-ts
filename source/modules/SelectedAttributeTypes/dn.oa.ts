/* eslint-disable */
import {
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import { id_lsx_dn } from "../SelectedAttributeTypes/id-lsx-dn.va";
export {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_lsx_dn } from "../SelectedAttributeTypes/id-lsx-dn.va";

/* START_OF_SYMBOL_DEFINITION dn */
/**
 * @summary dn
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dn SYNTAX-NAME ::= {
 *   LDAP-DESC         "DN"
 *   DIRECTORY SYNTAX  DistinguishedName
 *   ID                id-lsx-dn }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const dn: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&ldapDesc": "DN" /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_dn /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dn */

/* eslint-enable */
