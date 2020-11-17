/* eslint-disable */
import { subjectAltName } from "../CertificateExtensions/subjectAltName.oa";
import { id_asx_subjectAltName } from "../ExtensionAttributes/id-asx-subjectAltName.va";
import { id_ce_a_subjectAltName } from "../ExtensionAttributes/id-ce-a-subjectAltName.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { subjectAltName } from "../CertificateExtensions/subjectAltName.oa";
export { id_asx_subjectAltName } from "../ExtensionAttributes/id-asx-subjectAltName.va";
export { id_ce_a_subjectAltName } from "../ExtensionAttributes/id-ce-a-subjectAltName.va";
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

/* START_OF_SYMBOL_DEFINITION a_subjectAltName */
/**
 * @summary a_subjectAltName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-subjectAltName ATTRIBUTE ::= {
 *   WITH SYNTAX       subjectAltName.&ExtnType
 *   LDAP-SYNTAX       id-asx-subjectAltName
 *   LDAP-NAME         {"Subject Alternative Name"}
 *   ID                id-ce-a-subjectAltName }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_subjectAltName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": subjectAltName.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": subjectAltName.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_subjectAltName /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_subjectAltName /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_subjectAltName */

/* eslint-enable */
