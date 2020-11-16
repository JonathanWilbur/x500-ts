/* eslint-disable */
import { privateKeyUsagePeriod } from "../CertificateExtensions/privateKeyUsagePeriod.oa";
import { id_asx_privateKeyUsagePeriod } from "../ExtensionAttributes/id-asx-privateKeyUsagePeriod.va";
import { id_ce_a_privateKeyUsagePeriod } from "../ExtensionAttributes/id-ce-a-privateKeyUsagePeriod.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { privateKeyUsagePeriod } from "../CertificateExtensions/privateKeyUsagePeriod.oa";
export { id_asx_privateKeyUsagePeriod } from "../ExtensionAttributes/id-asx-privateKeyUsagePeriod.va";
export { id_ce_a_privateKeyUsagePeriod } from "../ExtensionAttributes/id-ce-a-privateKeyUsagePeriod.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION a_privateKeyUsagePeriod */
/**
 * @summary a_privateKeyUsagePeriod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-privateKeyUsagePeriod ATTRIBUTE ::= {
 *   WITH SYNTAX       privateKeyUsagePeriod.&ExtnType
 *   LDAP-SYNTAX       id-asx-privateKeyUsagePeriod
 *   LDAP-NAME         {"Private Key Usage Period"}
 *   ID                id-ce-a-privateKeyUsagePeriod }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const a_privateKeyUsagePeriod: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": privateKeyUsagePeriod.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": privateKeyUsagePeriod.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_privateKeyUsagePeriod /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_privateKeyUsagePeriod /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_privateKeyUsagePeriod */

/* eslint-enable */
