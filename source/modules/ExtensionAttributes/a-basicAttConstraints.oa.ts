/* eslint-disable */
import { basicAttConstraints } from "../AttributeCertificateDefinitions/basicAttConstraints.oa";
import { id_asx_basicAttConstraints } from "../ExtensionAttributes/id-asx-basicAttConstraints.va";
import { id_ce_a_basicAttConstraints } from "../ExtensionAttributes/id-ce-a-basicAttConstraints.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { basicAttConstraints } from "../AttributeCertificateDefinitions/basicAttConstraints.oa";
export { id_asx_basicAttConstraints } from "../ExtensionAttributes/id-asx-basicAttConstraints.va";
export { id_ce_a_basicAttConstraints } from "../ExtensionAttributes/id-ce-a-basicAttConstraints.va";
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

/* START_OF_SYMBOL_DEFINITION a_basicAttConstraints */
/**
 * @summary a_basicAttConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-basicAttConstraints ATTRIBUTE ::= {
 *   WITH SYNTAX       basicAttConstraints.&ExtnType
 *   LDAP-SYNTAX       id-asx-basicAttConstraints
 *   LDAP-NAME         {"Basic attribute constraints"}
 *   ID                id-ce-a-basicAttConstraints}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof basicAttConstraints["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof basicAttConstraints["&ExtnType"]>}
 */
export const a_basicAttConstraints: ATTRIBUTE<
    typeof basicAttConstraints["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": basicAttConstraints.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": basicAttConstraints.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_basicAttConstraints /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_basicAttConstraints /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_basicAttConstraints */

/* eslint-enable */
