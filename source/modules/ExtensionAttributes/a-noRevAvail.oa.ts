/* eslint-disable */
import { noRevAvail } from "../AttributeCertificateDefinitions/noRevAvail.oa";
import { id_asx_noRevAvail } from "../ExtensionAttributes/id-asx-noRevAvail.va";
import { id_ce_a_noRevAvail } from "../ExtensionAttributes/id-ce-a-noRevAvail.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { noRevAvail } from "../AttributeCertificateDefinitions/noRevAvail.oa";
export { id_asx_noRevAvail } from "../ExtensionAttributes/id-asx-noRevAvail.va";
export { id_ce_a_noRevAvail } from "../ExtensionAttributes/id-ce-a-noRevAvail.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_noRevAvail */
/**
 * @summary a_noRevAvail
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-noRevAvail ATTRIBUTE ::= {
 *   WITH SYNTAX       noRevAvail.&ExtnType
 *   LDAP-SYNTAX       id-asx-noRevAvail
 *   LDAP-NAME         {"No revocation information available"}
 *   ID                id-ce-a-noRevAvail}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_noRevAvail: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": noRevAvail.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": noRevAvail.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_noRevAvail /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_noRevAvail /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_noRevAvail */

/* eslint-enable */
