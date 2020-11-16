/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_not_contextCombinations } from "../SelectedAttributeTypes/id-not-contextCombinations.va";
import {
    _decode_ContextCombination,
    _encode_ContextCombination,
} from "../ServiceAdministration/ContextCombination.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_not_contextCombinations } from "../SelectedAttributeTypes/id-not-contextCombinations.va";
export {
    ContextCombination,
    _decode_ContextCombination,
    _encode_ContextCombination,
} from "../ServiceAdministration/ContextCombination.ta";

/* START_OF_SYMBOL_DEFINITION contextCombinations */
/**
 * @summary contextCombinations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contextCombinations ATTRIBUTE ::= {
 *   WITH SYNTAX              ContextCombination
 *   ID                       id-not-contextCombinations }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const contextCombinations: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ContextCombination,
    },
    encoderFor: {
        "&Type": _encode_ContextCombination,
    },
    "&id": id_not_contextCombinations /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION contextCombinations */

/* eslint-enable */
