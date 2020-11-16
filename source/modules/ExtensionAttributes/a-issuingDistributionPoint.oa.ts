/* eslint-disable */
import { issuingDistributionPoint } from "../CertificateExtensions/issuingDistributionPoint.oa";
import { id_asx_issuingDistributionPoint } from "../ExtensionAttributes/id-asx-issuingDistributionPoint.va";
import { id_ce_a_issuingDistributionPoint } from "../ExtensionAttributes/id-ce-a-issuingDistributionPoint.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { issuingDistributionPoint } from "../CertificateExtensions/issuingDistributionPoint.oa";
export { id_asx_issuingDistributionPoint } from "../ExtensionAttributes/id-asx-issuingDistributionPoint.va";
export { id_ce_a_issuingDistributionPoint } from "../ExtensionAttributes/id-ce-a-issuingDistributionPoint.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_issuingDistributionPoint */
/**
 * @summary a_issuingDistributionPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-issuingDistributionPoint ATTRIBUTE ::= {
 *   WITH SYNTAX       issuingDistributionPoint.&ExtnType
 *   LDAP-SYNTAX       id-asx-issuingDistributionPoint
 *   LDAP-NAME         {"Issuing distribution point"}
 *   ID                id-ce-a-issuingDistributionPoint}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_issuingDistributionPoint: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": issuingDistributionPoint.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": issuingDistributionPoint.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_issuingDistributionPoint /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_issuingDistributionPoint /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_issuingDistributionPoint */

/* eslint-enable */