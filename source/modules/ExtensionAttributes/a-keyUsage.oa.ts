/* eslint-disable */
import { keyUsage } from "../CertificateExtensions/keyUsage.oa";
import { id_asx_keyUsage } from "../ExtensionAttributes/id-asx-keyUsage.va";
import { id_ce_a_keyUsage } from "../ExtensionAttributes/id-ce-a-keyUsage.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { keyUsage } from "../CertificateExtensions/keyUsage.oa";
export { id_asx_keyUsage } from "../ExtensionAttributes/id-asx-keyUsage.va";
export { id_ce_a_keyUsage } from "../ExtensionAttributes/id-ce-a-keyUsage.va";
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

/* START_OF_SYMBOL_DEFINITION a_keyUsage */
/**
 * @summary a_keyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-keyUsage ATTRIBUTE ::= {
 *   WITH SYNTAX       keyUsage.&ExtnType
 *   LDAP-SYNTAX       id-asx-keyUsage
 *   LDAP-NAME         {"Key Usage"}
 *   ID                id-ce-a-keyUsage }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof keyUsage["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof keyUsage["&ExtnType"]>}
 */
export const a_keyUsage: ATTRIBUTE<typeof keyUsage["&ExtnType"]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": keyUsage.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": keyUsage.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_keyUsage /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_keyUsage /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_keyUsage */

/* eslint-enable */
