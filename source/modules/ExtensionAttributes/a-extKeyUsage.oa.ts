/* eslint-disable */
import { extKeyUsage } from "../CertificateExtensions/extKeyUsage.oa";
import { id_asx_extKeyUsage } from "../ExtensionAttributes/id-asx-extKeyUsage.va";
import { id_ce_a_extKeyUsage } from "../ExtensionAttributes/id-ce-a-extKeyUsage.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { extKeyUsage } from "../CertificateExtensions/extKeyUsage.oa";
export { id_asx_extKeyUsage } from "../ExtensionAttributes/id-asx-extKeyUsage.va";
export { id_ce_a_extKeyUsage } from "../ExtensionAttributes/id-ce-a-extKeyUsage.va";
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

/* START_OF_SYMBOL_DEFINITION a_extKeyUsage */
/**
 * @summary a_extKeyUsage
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-extKeyUsage ATTRIBUTE ::= {
 *   WITH SYNTAX       extKeyUsage.&ExtnType
 *   LDAP-SYNTAX       id-asx-extKeyUsage
 *   LDAP-NAME         {"Extended Key Usage"}
 *   ID                id-ce-a-extKeyUsage }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_extKeyUsage: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": extKeyUsage.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": extKeyUsage.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_extKeyUsage /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_extKeyUsage /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_extKeyUsage */

/* eslint-enable */
