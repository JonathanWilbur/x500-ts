/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
import { id_at_uri } from "../SelectedAttributeTypes/id-at-uri.va";
import { _decode_URI, _encode_URI } from "../SelectedAttributeTypes/URI.ta";
import { uriMatch } from "../SelectedAttributeTypes/uriMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
export { id_at_uri } from "../SelectedAttributeTypes/id-at-uri.va";
export {
    URI,
    _decode_URI,
    _encode_URI,
} from "../SelectedAttributeTypes/URI.ta";
export { uriMatch } from "../SelectedAttributeTypes/uriMatch.oa";

/* START_OF_SYMBOL_DEFINITION uri */
/**
 * @summary uri
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uri ATTRIBUTE ::= {
 *   WITH SYNTAX              URI
 *   EQUALITY MATCHING RULE   uriMatch
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"uri"}
 *   ID                       id-at-uri }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const uri: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_URI,
    },
    encoderFor: {
        "&Type": _encode_URI,
    },
    "&equality-match": uriMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_uri /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uri */

/* eslint-enable */
