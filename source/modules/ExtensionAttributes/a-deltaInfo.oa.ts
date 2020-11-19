/* eslint-disable */
import { deltaInfo } from "../CertificateExtensions/deltaInfo.oa";
import { id_asx_deltaInfo } from "../ExtensionAttributes/id-asx-deltaInfo.va";
import { id_ce_a_deltaInfo } from "../ExtensionAttributes/id-ce-a-deltaInfo.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { deltaInfo } from "../CertificateExtensions/deltaInfo.oa";
export { id_asx_deltaInfo } from "../ExtensionAttributes/id-asx-deltaInfo.va";
export { id_ce_a_deltaInfo } from "../ExtensionAttributes/id-ce-a-deltaInfo.va";
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

/* START_OF_SYMBOL_DEFINITION a_deltaInfo */
/**
 * @summary a_deltaInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-deltaInfo ATTRIBUTE ::= {
 *   WITH SYNTAX       deltaInfo.&ExtnType
 *   LDAP-SYNTAX       id-asx-deltaInfo
 *   LDAP-NAME         {"Delta information"}
 *   ID                id-ce-a-deltaInfo}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof deltaInfo["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof deltaInfo["&ExtnType"]>}
 */
export const a_deltaInfo: ATTRIBUTE<typeof deltaInfo["&ExtnType"]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": deltaInfo.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": deltaInfo.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_deltaInfo /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_deltaInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_deltaInfo */

/* eslint-enable */
