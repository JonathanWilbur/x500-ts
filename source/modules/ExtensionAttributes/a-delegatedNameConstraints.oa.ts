/* eslint-disable */
import { delegatedNameConstraints } from "../AttributeCertificateDefinitions/delegatedNameConstraints.oa";
import { id_asx_delegatedNameConstraints } from "../ExtensionAttributes/id-asx-delegatedNameConstraints.va";
import { id_ce_a_delegatedNameConstraints } from "../ExtensionAttributes/id-ce-a-delegatedNameConstraints.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { delegatedNameConstraints } from "../AttributeCertificateDefinitions/delegatedNameConstraints.oa";
export { id_asx_delegatedNameConstraints } from "../ExtensionAttributes/id-asx-delegatedNameConstraints.va";
export { id_ce_a_delegatedNameConstraints } from "../ExtensionAttributes/id-ce-a-delegatedNameConstraints.va";
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

/* START_OF_SYMBOL_DEFINITION a_delegatedNameConstraints */
/**
 * @summary a_delegatedNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-delegatedNameConstraints ATTRIBUTE ::= {
 *   WITH SYNTAX       delegatedNameConstraints.&ExtnType
 *   LDAP-SYNTAX       id-asx-delegatedNameConstraints
 *   LDAP-NAME         {"Delegated name constraints"}
 *   ID                id-ce-a-delegatedNameConstraints}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof delegatedNameConstraints["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof delegatedNameConstraints["&ExtnType"]>}
 */
export const a_delegatedNameConstraints: ATTRIBUTE<
    typeof delegatedNameConstraints["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": delegatedNameConstraints.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": delegatedNameConstraints.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_delegatedNameConstraints /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_delegatedNameConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_delegatedNameConstraints */

/* eslint-enable */
