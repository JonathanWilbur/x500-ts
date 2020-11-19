/* eslint-disable */
import {
    DSEType,
    _decode_DSEType,
    _encode_DSEType,
} from "../DSAOperationalAttributeTypes/DSEType.ta";
import { id_doa_dseType } from "../DSAOperationalAttributeTypes/id-doa-dseType.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta";
import { bitStringMatch } from "../SelectedAttributeTypes/bitStringMatch.oa";
export {
    admPoint /* IMPORTED_SHORT_NAMED_BIT */,
    alias /* IMPORTED_SHORT_NAMED_BIT */,
    cp /* IMPORTED_SHORT_NAMED_BIT */,
    ditBridge /* IMPORTED_SHORT_NAMED_BIT */,
    DSEType,
    DSEType_admPoint /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_alias /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_cp /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_ditBridge /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_dsSubentry /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_entry /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_familyMember /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_glue /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_immSupr /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_nssr /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_rhob /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_root /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_sa /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_shadow /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_subentry /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_subr /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_supr /* IMPORTED_LONG_NAMED_BIT */,
    DSEType_xr /* IMPORTED_LONG_NAMED_BIT */,
    dsSubentry /* IMPORTED_SHORT_NAMED_BIT */,
    entry /* IMPORTED_SHORT_NAMED_BIT */,
    familyMember /* IMPORTED_SHORT_NAMED_BIT */,
    glue /* IMPORTED_SHORT_NAMED_BIT */,
    immSupr /* IMPORTED_SHORT_NAMED_BIT */,
    nssr /* IMPORTED_SHORT_NAMED_BIT */,
    rhob /* IMPORTED_SHORT_NAMED_BIT */,
    root /* IMPORTED_SHORT_NAMED_BIT */,
    sa /* IMPORTED_SHORT_NAMED_BIT */,
    shadow /* IMPORTED_SHORT_NAMED_BIT */,
    subentry /* IMPORTED_SHORT_NAMED_BIT */,
    subr /* IMPORTED_SHORT_NAMED_BIT */,
    supr /* IMPORTED_SHORT_NAMED_BIT */,
    xr /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_DSEType,
    _encode_DSEType,
} from "../DSAOperationalAttributeTypes/DSEType.ta";
export { id_doa_dseType } from "../DSAOperationalAttributeTypes/id-doa-dseType.va";
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
 * @type {ATTRIBUTE<DSEType>}
 * @implements {ATTRIBUTE<DSEType>}
 */
export const dseType: ATTRIBUTE<DSEType> = {
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
    "&usage": dSAOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_doa_dseType /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dseType */

/* eslint-enable */
