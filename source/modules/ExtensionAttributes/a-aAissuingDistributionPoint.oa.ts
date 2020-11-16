/* eslint-disable */
import { aAissuingDistributionPoint } from "../CertificateExtensions/aAissuingDistributionPoint.oa";
import { id_asx_aAissuingDistributionPoint } from "../ExtensionAttributes/id-asx-aAissuingDistributionPoint.va";
import { id_ce_a_aAissuingDistributionPoint } from "../ExtensionAttributes/id-ce-a-aAissuingDistributionPoint.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { aAissuingDistributionPoint } from "../CertificateExtensions/aAissuingDistributionPoint.oa";
export { id_asx_aAissuingDistributionPoint } from "../ExtensionAttributes/id-asx-aAissuingDistributionPoint.va";
export { id_ce_a_aAissuingDistributionPoint } from "../ExtensionAttributes/id-ce-a-aAissuingDistributionPoint.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_aAissuingDistributionPoint */
/**
 * @summary a_aAissuingDistributionPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-aAissuingDistributionPoint ATTRIBUTE ::= {
 *   WITH SYNTAX       aAissuingDistributionPoint.&ExtnType
 *   LDAP-SYNTAX       id-asx-aAissuingDistributionPoint
 *   LDAP-NAME         {"AA issuing distribution point"}
 *   ID                id-ce-a-aAissuingDistributionPoint}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_aAissuingDistributionPoint: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": aAissuingDistributionPoint.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": aAissuingDistributionPoint.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_aAissuingDistributionPoint /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_aAissuingDistributionPoint /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_aAissuingDistributionPoint */

/* eslint-enable */
