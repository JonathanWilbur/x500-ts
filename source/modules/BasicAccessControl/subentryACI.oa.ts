/* eslint-disable */
import {
    _decode_ACIItem,
    _encode_ACIItem,
} from "../BasicAccessControl/ACIItem.ta";
import { id_aca_subentryACI } from "../BasicAccessControl/id-aca-subentryACI.va";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { directoryStringFirstComponentMatch } from "../SelectedAttributeTypes/directoryStringFirstComponentMatch.oa";
export {
    ACIItem,
    _decode_ACIItem,
    _encode_ACIItem,
} from "../BasicAccessControl/ACIItem.ta";
export { id_aca_subentryACI } from "../BasicAccessControl/id-aca-subentryACI.va";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { directoryStringFirstComponentMatch } from "../SelectedAttributeTypes/directoryStringFirstComponentMatch.oa";

/* START_OF_SYMBOL_DEFINITION subentryACI */
/**
 * @summary subentryACI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subentryACI ATTRIBUTE ::= {
 *   WITH SYNTAX             ACIItem
 *   EQUALITY MATCHING RULE  directoryStringFirstComponentMatch
 *   USAGE                   directoryOperation
 *   ID                      id-aca-subentryACI }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const subentryACI: ATTRIBUTE = {
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
    "&id": id_aca_subentryACI /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION subentryACI */

/* eslint-enable */
