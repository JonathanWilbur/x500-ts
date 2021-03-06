/* eslint-disable */
import { orderedList } from "../CertificateExtensions/orderedList.oa";
import { id_asx_orderedList } from "../ExtensionAttributes/id-asx-orderedList.va";
import { id_ce_a_orderedList } from "../ExtensionAttributes/id-ce-a-orderedList.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { orderedList } from "../CertificateExtensions/orderedList.oa";
export { id_asx_orderedList } from "../ExtensionAttributes/id-asx-orderedList.va";
export { id_ce_a_orderedList } from "../ExtensionAttributes/id-ce-a-orderedList.va";
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

/* START_OF_SYMBOL_DEFINITION a_orderedList */
/**
 * @summary a_orderedList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-orderedList ATTRIBUTE ::= {
 *   WITH SYNTAX       orderedList.&ExtnType
 *   LDAP-SYNTAX       id-asx-orderedList
 *   LDAP-NAME         {"Ordered list"}
 *   ID                id-ce-a-orderedList}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof orderedList["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof orderedList["&ExtnType"]>}
 */
export const a_orderedList: ATTRIBUTE<typeof orderedList["&ExtnType"]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": orderedList.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": orderedList.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_orderedList /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_orderedList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_orderedList */

/* eslint-enable */
