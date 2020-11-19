/* eslint-disable */
import { cRLDistributionPoints } from "../CertificateExtensions/cRLDistributionPoints.oa";
import { id_asx_cRLDistributionPoints } from "../ExtensionAttributes/id-asx-cRLDistributionPoints.va";
import { id_ce_a_cRLDistributionPoints } from "../ExtensionAttributes/id-ce-a-cRLDistributionPoints.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { cRLDistributionPoints } from "../CertificateExtensions/cRLDistributionPoints.oa";
export { id_asx_cRLDistributionPoints } from "../ExtensionAttributes/id-asx-cRLDistributionPoints.va";
export { id_ce_a_cRLDistributionPoints } from "../ExtensionAttributes/id-ce-a-cRLDistributionPoints.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca";

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
 * @type {ATTRIBUTE<typeof cRLDistributionPoints["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof cRLDistributionPoints["&ExtnType"]>}
 */
export const a_cRLDistributionPoints: ATTRIBUTE<
    typeof cRLDistributionPoints["&ExtnType"]
> = {
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
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_cRLDistributionPoints */

/* eslint-enable */
