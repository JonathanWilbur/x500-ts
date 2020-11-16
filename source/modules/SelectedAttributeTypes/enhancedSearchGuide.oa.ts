/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { enhancedGuide } from "../SelectedAttributeTypes/enhancedGuide.oa";
import {
    _decode_EnhancedGuide,
    _encode_EnhancedGuide,
} from "../SelectedAttributeTypes/EnhancedGuide.ta";
import { id_at_enhancedSearchGuide } from "../SelectedAttributeTypes/id-at-enhancedSearchGuide.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { enhancedGuide } from "../SelectedAttributeTypes/enhancedGuide.oa";
export {
    EnhancedGuide,
    _decode_EnhancedGuide,
    _encode_EnhancedGuide,
} from "../SelectedAttributeTypes/EnhancedGuide.ta";
export { id_at_enhancedSearchGuide } from "../SelectedAttributeTypes/id-at-enhancedSearchGuide.va";

/* START_OF_SYMBOL_DEFINITION enhancedSearchGuide */
/**
 * @summary enhancedSearchGuide
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * enhancedSearchGuide ATTRIBUTE ::= {
 *   WITH SYNTAX              EnhancedGuide
 *   LDAP-SYNTAX              enhancedGuide.&id
 *   LDAP-NAME                {"enhancedSearchGuide"}
 *   ID                       id-at-enhancedSearchGuide }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const enhancedSearchGuide: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_EnhancedGuide,
    },
    encoderFor: {
        "&Type": _encode_EnhancedGuide,
    },
    "&ldapSyntax": enhancedGuide["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_enhancedSearchGuide /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION enhancedSearchGuide */

/* eslint-enable */