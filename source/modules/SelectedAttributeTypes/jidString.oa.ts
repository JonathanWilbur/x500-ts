/* eslint-disable */
import { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
import { id_asx_jidString } from "../SelectedAttributeTypes/id-asx-jidString.va";
import { _decode_Jid, _encode_Jid } from "../SelectedAttributeTypes/Jid.ta";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";
export { id_asx_jidString } from "../SelectedAttributeTypes/id-asx-jidString.va";
export {
    Jid,
    _decode_Jid,
    _encode_Jid,
} from "../SelectedAttributeTypes/Jid.ta";

/* START_OF_SYMBOL_DEFINITION jidString */
/**
 * @summary jidString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * jidString SYNTAX-NAME ::= {
 *   LDAP-DESC         "Jabber identifier"
 *   DIRECTORY SYNTAX  Jid
 *   ID                id-asx-jidString }
 * ```
 *
 * @constant
 * @type {SYNTAX_NAME}
 * @implements {SYNTAX_NAME}
 */
export const jidString: SYNTAX_NAME = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_Jid,
    },
    encoderFor: {
        "&Type": _encode_Jid,
    },
    "&ldapDesc": "Jabber identifier" /* OBJECT_FIELD_SETTING */,
    "&id": id_asx_jidString /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION jidString */

/* eslint-enable */
