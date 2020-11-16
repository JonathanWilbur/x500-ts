/* eslint-disable */
import {
    _decode_DSEType,
    _encode_DSEType,
} from "../DSAOperationalAttributeTypes/DSEType.ta";
import { id_doa_dseType } from "../DSAOperationalAttributeTypes/id-doa-dseType.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { bitStringMatch } from "../SelectedAttributeTypes/bitStringMatch.oa";
export {
    DSEType,
    DSEType_admPoint /* IMPORTED_BIT */,
    DSEType_alias /* IMPORTED_BIT */,
    DSEType_cp /* IMPORTED_BIT */,
    DSEType_ditBridge /* IMPORTED_BIT */,
    DSEType_dsSubentry /* IMPORTED_BIT */,
    DSEType_entry /* IMPORTED_BIT */,
    DSEType_familyMember /* IMPORTED_BIT */,
    DSEType_glue /* IMPORTED_BIT */,
    DSEType_immSupr /* IMPORTED_BIT */,
    DSEType_nssr /* IMPORTED_BIT */,
    DSEType_rhob /* IMPORTED_BIT */,
    DSEType_root /* IMPORTED_BIT */,
    DSEType_sa /* IMPORTED_BIT */,
    DSEType_shadow /* IMPORTED_BIT */,
    DSEType_subentry /* IMPORTED_BIT */,
    DSEType_subr /* IMPORTED_BIT */,
    DSEType_supr /* IMPORTED_BIT */,
    DSEType_xr /* IMPORTED_BIT */,
    _decode_DSEType,
    _encode_DSEType,
} from "../DSAOperationalAttributeTypes/DSEType.ta";
export { id_doa_dseType } from "../DSAOperationalAttributeTypes/id-doa-dseType.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { bitStringMatch } from "../SelectedAttributeTypes/bitStringMatch.oa";

/* START_OF_SYMBOL_DEFINITION dseType */
/**
 * @summary dseType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dseType ATTRIBUTE ::= {
 *   WITH SYNTAX             DSEType
 *   EQUALITY MATCHING RULE  bitStringMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   dSAOperation
 *   ID                      id-doa-dseType }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const dseType: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DSEType,
    },
    encoderFor: {
        "&Type": _encode_DSEType,
    },
    "&equality-match": bitStringMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_dSAOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_dseType /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dseType */

/* eslint-enable */
