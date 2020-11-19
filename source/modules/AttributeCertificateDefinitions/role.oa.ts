/* eslint-disable */
import { id_at_role } from "../AttributeCertificateDefinitions/id-at-role.va";
import {
    RoleSyntax,
    _decode_RoleSyntax,
    _encode_RoleSyntax,
} from "../AttributeCertificateDefinitions/RoleSyntax.ta";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
export { id_at_role } from "../AttributeCertificateDefinitions/id-at-role.va";
export {
    RoleSyntax,
    _decode_RoleSyntax,
    _encode_RoleSyntax,
} from "../AttributeCertificateDefinitions/RoleSyntax.ta";
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

/* START_OF_SYMBOL_DEFINITION role */
/**
 * @summary role
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * role ATTRIBUTE ::= {
 *   WITH SYNTAX  RoleSyntax
 *   ID           id-at-role }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<RoleSyntax>}
 * @implements {ATTRIBUTE<RoleSyntax>}
 */
export const role: ATTRIBUTE<RoleSyntax> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_RoleSyntax,
    },
    encoderFor: {
        "&Type": _encode_RoleSyntax,
    },
    "&id": id_at_role /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION role */

/* eslint-enable */
