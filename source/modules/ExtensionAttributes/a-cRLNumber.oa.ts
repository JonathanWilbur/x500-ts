/* eslint-disable */
import { cRLNumber } from "../CertificateExtensions/cRLNumber.oa";
import { id_asx_cRLNumber } from "../ExtensionAttributes/id-asx-cRLNumber.va";
import { id_ce_a_cRLNumber } from "../ExtensionAttributes/id-ce-a-cRLNumber.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { cRLNumber } from "../CertificateExtensions/cRLNumber.oa";
export { id_asx_cRLNumber } from "../ExtensionAttributes/id-asx-cRLNumber.va";
export { id_ce_a_cRLNumber } from "../ExtensionAttributes/id-ce-a-cRLNumber.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_cRLNumber */
/**
 * @summary a_cRLNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-cRLNumber ATTRIBUTE ::= {
 *   WITH SYNTAX       cRLNumber.&ExtnType
 *   LDAP-SYNTAX       id-asx-cRLNumber
 *   LDAP-NAME         {"CRL Number"}
 *   ID                id-ce-a-cRLNumber}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_cRLNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": cRLNumber.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": cRLNumber.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_cRLNumber /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_cRLNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_cRLNumber */

/* eslint-enable */
