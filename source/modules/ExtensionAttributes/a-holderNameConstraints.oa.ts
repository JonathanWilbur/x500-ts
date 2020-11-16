/* eslint-disable */
import { holderNameConstraints } from "../AttributeCertificateDefinitions/holderNameConstraints.oa";
import { id_asx_holderNameConstraints } from "../ExtensionAttributes/id-asx-holderNameConstraints.va";
import { id_ce_a_holderNameConstraints } from "../ExtensionAttributes/id-ce-a-holderNameConstraints.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { holderNameConstraints } from "../AttributeCertificateDefinitions/holderNameConstraints.oa";
export { id_asx_holderNameConstraints } from "../ExtensionAttributes/id-asx-holderNameConstraints.va";
export { id_ce_a_holderNameConstraints } from "../ExtensionAttributes/id-ce-a-holderNameConstraints.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_holderNameConstraints */
/**
 * @summary a_holderNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-holderNameConstraints ATTRIBUTE ::= {
 *   WITH SYNTAX       holderNameConstraints.&ExtnType
 *   LDAP-SYNTAX       id-asx-holderNameConstraints
 *   LDAP-NAME         {"Holder name constraints"}
 *   ID                id-ce-a-holderNameConstraints}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_holderNameConstraints: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": holderNameConstraints.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": holderNameConstraints.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_holderNameConstraints /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_holderNameConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_holderNameConstraints */

/* eslint-enable */
