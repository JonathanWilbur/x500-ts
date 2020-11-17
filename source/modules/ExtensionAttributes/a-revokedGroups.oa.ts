/* eslint-disable */
import { revokedGroups } from "../CertificateExtensions/revokedGroups.oa";
import { id_asx_revokedGroups } from "../ExtensionAttributes/id-asx-revokedGroups.va";
import { id_ce_a_revokedGroups } from "../ExtensionAttributes/id-ce-a-revokedGroups.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { revokedGroups } from "../CertificateExtensions/revokedGroups.oa";
export { id_asx_revokedGroups } from "../ExtensionAttributes/id-asx-revokedGroups.va";
export { id_ce_a_revokedGroups } from "../ExtensionAttributes/id-ce-a-revokedGroups.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

/* START_OF_SYMBOL_DEFINITION a_revokedGroups */
/**
 * @summary a_revokedGroups
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-revokedGroups ATTRIBUTE ::= {
 *   WITH SYNTAX       revokedGroups.&ExtnType
 *   LDAP-SYNTAX       id-asx-revokedGroups
 *   LDAP-NAME         {"Revoked group of certificates"}
 *   ID                id-ce-a-revokedGroups}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_revokedGroups: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": revokedGroups.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": revokedGroups.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_revokedGroups /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_revokedGroups /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_revokedGroups */

/* eslint-enable */
