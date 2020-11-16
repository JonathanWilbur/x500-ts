/* eslint-disable */
import { id_asx_protRestrict } from "../ExtensionAttributes/id-asx-protRestrict.va";
import { id_ce_a_protRestrict } from "../ExtensionAttributes/id-ce-a-protRestrict.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_asx_protRestrict } from "../ExtensionAttributes/id-asx-protRestrict.va";
export { id_ce_a_protRestrict } from "../ExtensionAttributes/id-ce-a-protRestrict.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_protRestrict */
/**
 * @summary a_protRestrict
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-protRestrict ATTRIBUTE ::= {
 *   WITH SYNTAX       protRestrict.&ExtnType
 *   LDAP-SYNTAX       id-asx-protRestrict
 *   LDAP-NAME         {"Protocol restriction"}
 *   ID                id-ce-a-protRestrict}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_protRestrict: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": protRestrict.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": protRestrict.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_protRestrict /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_protRestrict /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_protRestrict */

/* eslint-enable */
