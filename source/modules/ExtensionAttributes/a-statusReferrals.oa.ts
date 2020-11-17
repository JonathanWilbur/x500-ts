/* eslint-disable */
import { statusReferrals } from "../CertificateExtensions/statusReferrals.oa";
import { id_asx_statusReferrals } from "../ExtensionAttributes/id-asx-statusReferrals.va";
import { id_ce_a_statusReferrals } from "../ExtensionAttributes/id-ce-a-statusReferrals.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { statusReferrals } from "../CertificateExtensions/statusReferrals.oa";
export { id_asx_statusReferrals } from "../ExtensionAttributes/id-asx-statusReferrals.va";
export { id_ce_a_statusReferrals } from "../ExtensionAttributes/id-ce-a-statusReferrals.va";
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

/* START_OF_SYMBOL_DEFINITION a_statusReferrals */
/**
 * @summary a_statusReferrals
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-statusReferrals ATTRIBUTE ::= {
 *   WITH SYNTAX       statusReferrals.&ExtnType
 *   LDAP-SYNTAX       id-asx-statusReferrals
 *   LDAP-NAME         {"Status Referrals"}
 *   ID                id-ce-a-statusReferrals}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_statusReferrals: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": statusReferrals.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": statusReferrals.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_statusReferrals /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_statusReferrals /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_statusReferrals */

/* eslint-enable */
