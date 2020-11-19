/* eslint-disable */
import { toBeRevoked } from "../CertificateExtensions/toBeRevoked.oa";
import { id_asx_toBeRevoked } from "../ExtensionAttributes/id-asx-toBeRevoked.va";
import { id_ce_a_toBeRevoked } from "../ExtensionAttributes/id-ce-a-toBeRevoked.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { toBeRevoked } from "../CertificateExtensions/toBeRevoked.oa";
export { id_asx_toBeRevoked } from "../ExtensionAttributes/id-asx-toBeRevoked.va";
export { id_ce_a_toBeRevoked } from "../ExtensionAttributes/id-ce-a-toBeRevoked.va";
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

/* START_OF_SYMBOL_DEFINITION a_toBeRevoked */
/**
 * @summary a_toBeRevoked
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-toBeRevoked ATTRIBUTE ::= {
 *   WITH SYNTAX       toBeRevoked.&ExtnType
 *   LDAP-SYNTAX       id-asx-toBeRevoked
 *   LDAP-NAME         {"To be revoked"}
 *   ID                id-ce-a-toBeRevoked}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof toBeRevoked["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof toBeRevoked["&ExtnType"]>}
 */
export const a_toBeRevoked: ATTRIBUTE<typeof toBeRevoked["&ExtnType"]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": toBeRevoked.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": toBeRevoked.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_toBeRevoked /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_toBeRevoked /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_toBeRevoked */

/* eslint-enable */
