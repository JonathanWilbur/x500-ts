/* eslint-disable */
import { attributeDescriptor } from "../AttributeCertificateDefinitions/attributeDescriptor.oa";
import { id_asx_attributeDescriptor } from "../ExtensionAttributes/id-asx-attributeDescriptor.va";
import { id_ce_a_attributeDescriptor } from "../ExtensionAttributes/id-ce-a-attributeDescriptor.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { attributeDescriptor } from "../AttributeCertificateDefinitions/attributeDescriptor.oa";
export { id_asx_attributeDescriptor } from "../ExtensionAttributes/id-asx-attributeDescriptor.va";
export { id_ce_a_attributeDescriptor } from "../ExtensionAttributes/id-ce-a-attributeDescriptor.va";
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

/* START_OF_SYMBOL_DEFINITION a_attributeDescriptor */
/**
 * @summary a_attributeDescriptor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-attributeDescriptor ATTRIBUTE ::= {
 *   WITH SYNTAX       attributeDescriptor.&ExtnType
 *   LDAP-SYNTAX       id-asx-attributeDescriptor
 *   LDAP-NAME         {"Attribute descriptor"}
 *   ID                id-ce-a-attributeDescriptor}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_attributeDescriptor: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": attributeDescriptor.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": attributeDescriptor.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_attributeDescriptor /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_attributeDescriptor /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_attributeDescriptor */

/* eslint-enable */
