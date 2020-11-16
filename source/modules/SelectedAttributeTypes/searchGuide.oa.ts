/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { guide } from "../SelectedAttributeTypes/guide.oa";
import {
    _decode_Guide,
    _encode_Guide,
} from "../SelectedAttributeTypes/Guide.ta";
import { id_at_searchGuide } from "../SelectedAttributeTypes/id-at-searchGuide.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { guide } from "../SelectedAttributeTypes/guide.oa";
export {
    Guide,
    _decode_Guide,
    _encode_Guide,
} from "../SelectedAttributeTypes/Guide.ta";
export { id_at_searchGuide } from "../SelectedAttributeTypes/id-at-searchGuide.va";

/* START_OF_SYMBOL_DEFINITION searchGuide */
/**
 * @summary searchGuide
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * searchGuide ATTRIBUTE ::= {
 *   WITH SYNTAX              Guide
 *   LDAP-SYNTAX              guide.&id
 *   LDAP-NAME                {"searchGuide"}
 *   ID                       id-at-searchGuide }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const searchGuide: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Guide,
    },
    encoderFor: {
        "&Type": _encode_Guide,
    },
    "&ldapSyntax": guide["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": undefined,
    "&id": id_at_searchGuide /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION searchGuide */

/* eslint-enable */
