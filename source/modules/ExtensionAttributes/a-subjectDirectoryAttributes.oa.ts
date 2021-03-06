/* eslint-disable */
import { subjectDirectoryAttributes } from "../CertificateExtensions/subjectDirectoryAttributes.oa";
import { id_asx_subjectDirectoryAttributes } from "../ExtensionAttributes/id-asx-subjectDirectoryAttributes.va";
import { id_ce_a_subjectDirectoryAttributes } from "../ExtensionAttributes/id-ce-a-subjectDirectoryAttributes.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { subjectDirectoryAttributes } from "../CertificateExtensions/subjectDirectoryAttributes.oa";
export { id_asx_subjectDirectoryAttributes } from "../ExtensionAttributes/id-asx-subjectDirectoryAttributes.va";
export { id_ce_a_subjectDirectoryAttributes } from "../ExtensionAttributes/id-ce-a-subjectDirectoryAttributes.va";
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

/* START_OF_SYMBOL_DEFINITION a_subjectDirectoryAttributes */
/**
 * @summary a_subjectDirectoryAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-subjectDirectoryAttributes ATTRIBUTE ::= {
 *   WITH SYNTAX       subjectDirectoryAttributes.&ExtnType
 *   LDAP-SYNTAX       id-asx-subjectDirectoryAttributes
 *   LDAP-NAME         {"Subject Directory Attributes"}
 *   ID                id-ce-a-subjectDirectoryAttributes }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof subjectDirectoryAttributes["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof subjectDirectoryAttributes["&ExtnType"]>}
 */
export const a_subjectDirectoryAttributes: ATTRIBUTE<
    typeof subjectDirectoryAttributes["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": subjectDirectoryAttributes.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": subjectDirectoryAttributes.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_subjectDirectoryAttributes /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_subjectDirectoryAttributes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_subjectDirectoryAttributes */

/* eslint-enable */
