/* eslint-disable */
import { deltaCRLIndicator } from "../CertificateExtensions/deltaCRLIndicator.oa";
import { id_asx_deltaCRLIndicator } from "../ExtensionAttributes/id-asx-deltaCRLIndicator.va";
import { id_ce_a_deltaCRLIndicator } from "../ExtensionAttributes/id-ce-a-deltaCRLIndicator.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { deltaCRLIndicator } from "../CertificateExtensions/deltaCRLIndicator.oa";
export { id_asx_deltaCRLIndicator } from "../ExtensionAttributes/id-asx-deltaCRLIndicator.va";
export { id_ce_a_deltaCRLIndicator } from "../ExtensionAttributes/id-ce-a-deltaCRLIndicator.va";
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

/* START_OF_SYMBOL_DEFINITION a_deltaCRLIndicator */
/**
 * @summary a_deltaCRLIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-deltaCRLIndicator ATTRIBUTE ::= {
 *   WITH SYNTAX       deltaCRLIndicator.&ExtnType
 *   LDAP-SYNTAX       id-asx-deltaCRLIndicator
 *   LDAP-NAME         {"Delta CRL indicator"}
 *   ID                id-ce-a-deltaCRLIndicator}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof deltaCRLIndicator["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof deltaCRLIndicator["&ExtnType"]>}
 */
export const a_deltaCRLIndicator: ATTRIBUTE<
    typeof deltaCRLIndicator["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": deltaCRLIndicator.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": deltaCRLIndicator.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_deltaCRLIndicator /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_deltaCRLIndicator /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_deltaCRLIndicator */

/* eslint-enable */
