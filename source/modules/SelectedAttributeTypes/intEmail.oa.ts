/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_at_intEmail } from "../SelectedAttributeTypes/id-at-intEmail.va";
import {
    _decode_IntEmail,
    _encode_IntEmail,
} from "../SelectedAttributeTypes/IntEmail.ta";
import { intEmailMatch } from "../SelectedAttributeTypes/intEmailMatch.oa";
import { intEmailString } from "../SelectedAttributeTypes/intEmailString.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_at_intEmail } from "../SelectedAttributeTypes/id-at-intEmail.va";
export {
    IntEmail,
    _decode_IntEmail,
    _encode_IntEmail,
} from "../SelectedAttributeTypes/IntEmail.ta";
export { intEmailMatch } from "../SelectedAttributeTypes/intEmailMatch.oa";
export { intEmailString } from "../SelectedAttributeTypes/intEmailString.oa";

/* START_OF_SYMBOL_DEFINITION intEmail */
/**
 * @summary intEmail
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * intEmail ATTRIBUTE ::= {
 *   WITH SYNTAX             IntEmail
 *   EQUALITY MATCHING RULE  intEmailMatch
 *   SINGLE VALUE            TRUE
 *   LDAP-SYNTAX             intEmailString.&id
 *   LDAP-NAME               {"Internationalized Email"}
 *   ID                      id-at-intEmail }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const intEmail: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_IntEmail,
    },
    encoderFor: {
        "&Type": _encode_IntEmail,
    },
    "&equality-match": intEmailMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": intEmailString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_intEmail /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION intEmail */

/* eslint-enable */
