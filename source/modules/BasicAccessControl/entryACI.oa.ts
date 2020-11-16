/* eslint-disable */
import {
    _decode_ACIItem,
    _encode_ACIItem,
} from "../BasicAccessControl/ACIItem.ta";
import { id_aca_entryACI } from "../BasicAccessControl/id-aca-entryACI.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { directoryStringFirstComponentMatch } from "../SelectedAttributeTypes/directoryStringFirstComponentMatch.oa";
export {
    ACIItem,
    _decode_ACIItem,
    _encode_ACIItem,
} from "../BasicAccessControl/ACIItem.ta";
export { id_aca_entryACI } from "../BasicAccessControl/id-aca-entryACI.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { directoryStringFirstComponentMatch } from "../SelectedAttributeTypes/directoryStringFirstComponentMatch.oa";

/* START_OF_SYMBOL_DEFINITION entryACI */
/**
 * @summary entryACI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * entryACI ATTRIBUTE ::= {
 *   WITH SYNTAX             ACIItem
 *   EQUALITY MATCHING RULE  directoryStringFirstComponentMatch
 *   USAGE                   directoryOperation
 *   ID                      id-aca-entryACI }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const entryACI: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ACIItem,
    },
    encoderFor: {
        "&Type": _encode_ACIItem,
    },
    "&equality-match": directoryStringFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_aca_entryACI /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION entryACI */

/* eslint-enable */
