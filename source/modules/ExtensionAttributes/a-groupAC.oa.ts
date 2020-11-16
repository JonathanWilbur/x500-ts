/* eslint-disable */
import { groupAC } from "../AttributeCertificateDefinitions/groupAC.oa";
import { id_asx_groupAC } from "../ExtensionAttributes/id-asx-groupAC.va";
import { id_ce_a_groupAC } from "../ExtensionAttributes/id-ce-a-groupAC.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { groupAC } from "../AttributeCertificateDefinitions/groupAC.oa";
export { id_asx_groupAC } from "../ExtensionAttributes/id-asx-groupAC.va";
export { id_ce_a_groupAC } from "../ExtensionAttributes/id-ce-a-groupAC.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_groupAC */
/**
 * @summary a_groupAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-groupAC ATTRIBUTE ::= {
 *   WITH SYNTAX       groupAC.&ExtnType
 *   LDAP-SYNTAX       id-asx-groupAC
 *   LDAP-NAME         {"Group attribute certificate"}
 *   ID                id-ce-a-groupAC}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_groupAC: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": groupAC.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": groupAC.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_groupAC /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_groupAC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_groupAC */

/* eslint-enable */
