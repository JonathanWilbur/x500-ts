/* eslint-disable */
import { timeSpecification } from "../AttributeCertificateDefinitions/timeSpecification.oa";
import { id_asx_timeSpecification } from "../ExtensionAttributes/id-asx-timeSpecification.va";
import { id_ce_a_timeSpecification } from "../ExtensionAttributes/id-ce-a-timeSpecification.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { timeSpecification } from "../AttributeCertificateDefinitions/timeSpecification.oa";
export { id_asx_timeSpecification } from "../ExtensionAttributes/id-asx-timeSpecification.va";
export { id_ce_a_timeSpecification } from "../ExtensionAttributes/id-ce-a-timeSpecification.va";
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

/* START_OF_SYMBOL_DEFINITION a_timeSpecification */
/**
 * @summary a_timeSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * a-timeSpecification ATTRIBUTE ::= {
 *   WITH SYNTAX       timeSpecification.&ExtnType
 *   LDAP-SYNTAX       id-asx-timeSpecification
 *   LDAP-NAME         {"Time specification"}
 *   ID                id-ce-a-timeSpecification}
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<typeof timeSpecification["&ExtnType"]>}
 * @implements {ATTRIBUTE<typeof timeSpecification["&ExtnType"]>}
 */
export const a_timeSpecification: ATTRIBUTE<
    typeof timeSpecification["&ExtnType"]
> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": timeSpecification.decoderFor["&ExtnType"],
    },
    encoderFor: {
        "&Type": timeSpecification.encoderFor["&ExtnType"],
    },
    "&ldapSyntax": id_asx_timeSpecification /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_ce_a_timeSpecification /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION a_timeSpecification */

/* eslint-enable */
