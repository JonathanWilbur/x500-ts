/* eslint-disable */
import { sOAIdentifier } from "../AttributeCertificateDefinitions/sOAIdentifier.oa";
import { id_asx_sOAIdentifier } from "../ExtensionAttributes/id-asx-sOAIdentifier.va";
import { id_ce_a_sOAIdentifier } from "../ExtensionAttributes/id-ce-a-sOAIdentifier.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { sOAIdentifier } from "../AttributeCertificateDefinitions/sOAIdentifier.oa";
export { id_asx_sOAIdentifier } from "../ExtensionAttributes/id-asx-sOAIdentifier.va";
export { id_ce_a_sOAIdentifier } from "../ExtensionAttributes/id-ce-a-sOAIdentifier.va";
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

/* START_OF_SYMBOL_DEFINITION a_sOAIdentifier */
/**
 * @summary a_sOAIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-sOAIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX       sOAIdentifier.&ExtnType
 *   LDAP-SYNTAX       id-asx-sOAIdentifier
 *   LDAP-NAME         {"SOA identifier"}
 *   ID                id-ce-a-sOAIdentifier}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof sOAIdentifier["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof sOAIdentifier["&ExtnType"]>}
 */
export const a_sOAIdentifier: ATTRIBUTE<typeof sOAIdentifier["&ExtnType"]> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": sOAIdentifier.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": sOAIdentifier.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_sOAIdentifier /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_sOAIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_sOAIdentifier */

/* eslint-enable */
