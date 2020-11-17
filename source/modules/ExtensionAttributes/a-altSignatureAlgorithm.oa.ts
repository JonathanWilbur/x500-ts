/* eslint-disable */
import { altSignatureAlgorithm } from "../CertificateExtensions/altSignatureAlgorithm.oa";
import { id_asx_altSignatureAlgorithm } from "../ExtensionAttributes/id-asx-altSignatureAlgorithm.va";
import { id_ce_a_altSignatureAlgorithm } from "../ExtensionAttributes/id-ce-a-altSignatureAlgorithm.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { altSignatureAlgorithm } from "../CertificateExtensions/altSignatureAlgorithm.oa";
export { id_asx_altSignatureAlgorithm } from "../ExtensionAttributes/id-asx-altSignatureAlgorithm.va";
export { id_ce_a_altSignatureAlgorithm } from "../ExtensionAttributes/id-ce-a-altSignatureAlgorithm.va";
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

/* START_OF_SYMBOL_DEFINITION a_altSignatureAlgorithm */
/**
 * @summary a_altSignatureAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-altSignatureAlgorithm ATTRIBUTE ::= {
 *   WITH SYNTAX       altSignatureAlgorithm.&ExtnType
 *   LDAP-SYNTAX       id-asx-altSignatureAlgorithm
 *   LDAP-NAME         {"Alternative signature algorithm"}
 *   ID                id-ce-a-altSignatureAlgorithm}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_altSignatureAlgorithm: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": altSignatureAlgorithm.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": altSignatureAlgorithm.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_altSignatureAlgorithm /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_altSignatureAlgorithm /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_altSignatureAlgorithm */

/* eslint-enable */
