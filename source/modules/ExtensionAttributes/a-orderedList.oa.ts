/* eslint-disable */
import { orderedList } from "../CertificateExtensions/orderedList.oa";
import { id_asx_orderedList } from "../ExtensionAttributes/id-asx-orderedList.va";
import { id_ce_a_orderedList } from "../ExtensionAttributes/id-ce-a-orderedList.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { orderedList } from "../CertificateExtensions/orderedList.oa";
export { id_asx_orderedList } from "../ExtensionAttributes/id-asx-orderedList.va";
export { id_ce_a_orderedList } from "../ExtensionAttributes/id-ce-a-orderedList.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

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
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_orderedList: ATTRIBUTE = {
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
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_orderedList */

/* eslint-enable */
