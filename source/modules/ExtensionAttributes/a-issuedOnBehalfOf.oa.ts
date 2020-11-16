/* eslint-disable */
import { issuedOnBehalfOf } from "../AttributeCertificateDefinitions/issuedOnBehalfOf.oa";
import { id_asx_issuedOnBehalfOf } from "../ExtensionAttributes/id-asx-issuedOnBehalfOf.va";
import { id_ce_a_issuedOnBehalfOf } from "../ExtensionAttributes/id-ce-a-issuedOnBehalfOf.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { issuedOnBehalfOf } from "../AttributeCertificateDefinitions/issuedOnBehalfOf.oa";
export { id_asx_issuedOnBehalfOf } from "../ExtensionAttributes/id-asx-issuedOnBehalfOf.va";
export { id_ce_a_issuedOnBehalfOf } from "../ExtensionAttributes/id-ce-a-issuedOnBehalfOf.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_issuedOnBehalfOf */
/**
 * @summary a_issuedOnBehalfOf
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-issuedOnBehalfOf ATTRIBUTE ::= {
 *   WITH SYNTAX       issuedOnBehalfOf.&ExtnType
 *   LDAP-SYNTAX       id-asx-issuedOnBehalfOf
 *   LDAP-NAME         {"Issued on behalf of"}
 *   ID                id-ce-a-issuedOnBehalfOf}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_issuedOnBehalfOf: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": issuedOnBehalfOf.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": issuedOnBehalfOf.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_issuedOnBehalfOf /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_issuedOnBehalfOf /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_issuedOnBehalfOf */

/* eslint-enable */
