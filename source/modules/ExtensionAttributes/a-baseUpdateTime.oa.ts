/* eslint-disable */
import { baseUpdateTime } from "../CertificateExtensions/baseUpdateTime.oa";
import { id_asx_baseUpdateTime } from "../ExtensionAttributes/id-asx-baseUpdateTime.va";
import { id_ce_a_baseUpdateTime } from "../ExtensionAttributes/id-ce-a-baseUpdateTime.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { baseUpdateTime } from "../CertificateExtensions/baseUpdateTime.oa";
export { id_asx_baseUpdateTime } from "../ExtensionAttributes/id-asx-baseUpdateTime.va";
export { id_ce_a_baseUpdateTime } from "../ExtensionAttributes/id-ce-a-baseUpdateTime.va";
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

/* START_OF_SYMBOL_DEFINITION a_baseUpdateTime */
/**
 * @summary a_baseUpdateTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-baseUpdateTime ATTRIBUTE ::= {
 *   WITH SYNTAX       baseUpdateTime.&ExtnType
 *   LDAP-SYNTAX       id-asx-baseUpdateTime
 *   LDAP-NAME         {"Base update time"}
 *   ID                id-ce-a-baseUpdateTime}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof baseUpdateTime["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof baseUpdateTime["&ExtnType"]>}
 */
export const a_baseUpdateTime: ATTRIBUTE<typeof baseUpdateTime["&ExtnType"]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": baseUpdateTime.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": baseUpdateTime.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_baseUpdateTime /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_baseUpdateTime /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_baseUpdateTime */

/* eslint-enable */
