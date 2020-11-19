/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
import { id_at_presentationAddress } from "../SelectedAttributeTypes/id-at-presentationAddress.va";
import { presentationAddr } from "../SelectedAttributeTypes/presentationAddr.oa";
import {
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from "../SelectedAttributeTypes/PresentationAddress.ta";
import { presentationAddressMatch } from "../SelectedAttributeTypes/presentationAddressMatch.oa";
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
export { id_at_presentationAddress } from "../SelectedAttributeTypes/id-at-presentationAddress.va";
export { presentationAddr } from "../SelectedAttributeTypes/presentationAddr.oa";
export {
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from "../SelectedAttributeTypes/PresentationAddress.ta";
export { presentationAddressMatch } from "../SelectedAttributeTypes/presentationAddressMatch.oa";

/* START_OF_SYMBOL_DEFINITION presentationAddress */
/**
 * @summary presentationAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * presentationAddress ATTRIBUTE ::= {
 *   WITH SYNTAX              PresentationAddress
 *   EQUALITY MATCHING RULE   presentationAddressMatch
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              presentationAddr.&id
 *   LDAP-NAME                {"presentationAddress"}
 *   ID                       id-at-presentationAddress }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PresentationAddress>}
 * @implements {ATTRIBUTE<PresentationAddress>}
 */
export const presentationAddress: ATTRIBUTE<PresentationAddress> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PresentationAddress,
    },
    encoderFor: {
        "&Type": _encode_PresentationAddress,
    },
    "&equality-match": presentationAddressMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": presentationAddr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_presentationAddress /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION presentationAddress */

/* eslint-enable */
