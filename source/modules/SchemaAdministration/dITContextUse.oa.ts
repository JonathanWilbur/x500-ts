/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    _decode_DITContextUseDescription,
    _encode_DITContextUseDescription,
} from "../SchemaAdministration/DITContextUseDescription.ta";
import { id_soa_dITContextUse } from "../SchemaAdministration/id-soa-dITContextUse.va";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    DITContextUseDescription,
    _decode_DITContextUseDescription,
    _encode_DITContextUseDescription,
} from "../SchemaAdministration/DITContextUseDescription.ta";
export { id_soa_dITContextUse } from "../SchemaAdministration/id-soa-dITContextUse.va";
export { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa";

/* START_OF_SYMBOL_DEFINITION dITContextUse */
/**
 * @summary dITContextUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dITContextUse ATTRIBUTE ::= {
 *   WITH SYNTAX             DITContextUseDescription
 *   EQUALITY MATCHING RULE  objectIdentifierFirstComponentMatch
 *   USAGE                   directoryOperation
 *   ID                      id-soa-dITContextUse }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const dITContextUse: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DITContextUseDescription,
    },
    encoderFor: {
        "&Type": _encode_DITContextUseDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_soa_dITContextUse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION dITContextUse */

/* eslint-enable */
