/* eslint-disable */
import {
    _decode_Clearance,
    _encode_Clearance,
} from "../EnhancedSecurity/Clearance.ta";
import { id_at_clearance } from "../EnhancedSecurity/id-at-clearance.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    Clearance,
    _decode_Clearance,
    _encode_Clearance,
} from "../EnhancedSecurity/Clearance.ta";
export { id_at_clearance } from "../EnhancedSecurity/id-at-clearance.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION clearance */
/**
 * @summary clearance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * clearance ATTRIBUTE ::= {
 *   WITH SYNTAX  Clearance
 *   ID           id-at-clearance }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const clearance: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Clearance,
    },
    encoderFor: {
        "&Type": _encode_Clearance,
    },
    "&id": id_at_clearance /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION clearance */

/* eslint-enable */
