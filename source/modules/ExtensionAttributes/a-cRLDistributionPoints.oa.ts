/* eslint-disable */
import { cRLDistributionPoints } from "../CertificateExtensions/cRLDistributionPoints.oa";
import { id_asx_cRLDistributionPoints } from "../ExtensionAttributes/id-asx-cRLDistributionPoints.va";
import { id_ce_a_cRLDistributionPoints } from "../ExtensionAttributes/id-ce-a-cRLDistributionPoints.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { cRLDistributionPoints } from "../CertificateExtensions/cRLDistributionPoints.oa";
export { id_asx_cRLDistributionPoints } from "../ExtensionAttributes/id-asx-cRLDistributionPoints.va";
export { id_ce_a_cRLDistributionPoints } from "../ExtensionAttributes/id-ce-a-cRLDistributionPoints.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_cRLDistributionPoints */
/**
 * @summary a_cRLDistributionPoints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-cRLDistributionPoints ATTRIBUTE ::= {
 *   WITH SYNTAX       cRLDistributionPoints.&ExtnType
 *   LDAP-SYNTAX       id-asx-cRLDistributionPoints
 *   LDAP-NAME         {"CRL distribution points"}
 *   ID                id-ce-a-cRLDistributionPoints}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_cRLDistributionPoints: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": cRLDistributionPoints.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": cRLDistributionPoints.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_cRLDistributionPoints /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_cRLDistributionPoints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_cRLDistributionPoints */

/* eslint-enable */
