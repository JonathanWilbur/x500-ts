/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
import { id_at_localityName } from "../SelectedAttributeTypes/id-at-localityName.va";
import { name } from "../SelectedAttributeTypes/name.oa";
import {
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { directoryString } from "../SelectedAttributeTypes/directoryString.oa";
export { id_at_localityName } from "../SelectedAttributeTypes/id-at-localityName.va";
export { name } from "../SelectedAttributeTypes/name.oa";
export {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta";

/* START_OF_SYMBOL_DEFINITION localityName */
/**
 * @summary localityName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * localityName ATTRIBUTE ::= {
 *   SUBTYPE OF               name
 *   WITH SYNTAX              UnboundedDirectoryString
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"l"}
 *   ID                       id-at-localityName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const localityName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_localityName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION localityName */

/* eslint-enable */