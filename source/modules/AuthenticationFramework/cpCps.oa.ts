/* eslint-disable */
import { certificatePolicy } from "../AuthenticationFramework/certificatePolicy.oa";
import { certificationPracticeStmt } from "../AuthenticationFramework/certificationPracticeStmt.oa";
import { id_oc_cpCps } from "../AuthenticationFramework/id-oc-cpCps.va";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";
export { certificatePolicy } from "../AuthenticationFramework/certificatePolicy.oa";
export { certificationPracticeStmt } from "../AuthenticationFramework/certificationPracticeStmt.oa";
export { id_oc_cpCps } from "../AuthenticationFramework/id-oc-cpCps.va";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca";

/* START_OF_SYMBOL_DEFINITION cpCps */
/**
 * @summary cpCps
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cpCps OBJECT-CLASS ::= {
 *   SUBCLASS OF         {top}
 *   KIND                auxiliary
 *   MAY CONTAIN         {certificatePolicy |
 *                        certificationPracticeStmt}
 *   LDAP-NAME           {"cpCps"}
 *   LDAP-DESC           "Certificate Policy and Certification Practice Statement"
 *   ID                  id-oc-cpCps }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const cpCps: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": undefined,
    "&kind":
        InformationFramework.ObjectClassKind_auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [
        certificatePolicy,
        certificationPracticeStmt,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&ldapDesc":
        "Certificate Policy and Certification Practice Statement" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_cpCps /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION cpCps */

/* eslint-enable */
