/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_at_presentationAddress } from "../SelectedAttributeTypes/id-at-presentationAddress.va";
import { presentationAddr } from "../SelectedAttributeTypes/presentationAddr.oa";
import {
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from "../SelectedAttributeTypes/PresentationAddress.ta";
import { presentationAddressMatch } from "../SelectedAttributeTypes/presentationAddressMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
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
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const presentationAddress: ATTRIBUTE = {
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
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION presentationAddress */

/* eslint-enable */
