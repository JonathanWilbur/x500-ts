/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import {
    _decode_ContextDescription,
    _encode_ContextDescription,
} from "../SchemaAdministration/ContextDescription.ta";
import { id_soa_contextTypes } from "../SchemaAdministration/id-soa-contextTypes.va";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export {
    ContextDescription,
    _decode_ContextDescription,
    _encode_ContextDescription,
} from "../SchemaAdministration/ContextDescription.ta";
export { id_soa_contextTypes } from "../SchemaAdministration/id-soa-contextTypes.va";
export { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa";

/* START_OF_SYMBOL_DEFINITION contextTypes */
/**
 * @summary contextTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contextTypes ATTRIBUTE ::= {
 *   WITH SYNTAX             ContextDescription
 *   EQUALITY MATCHING RULE  objectIdentifierFirstComponentMatch
 *   USAGE                   directoryOperation
 *   ID                      id-soa-contextTypes }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const contextTypes: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_ContextDescription,
    },
    encoderFor: {
        "&Type": _encode_ContextDescription,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage":
        InformationFramework.AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_soa_contextTypes /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION contextTypes */

/* eslint-enable */
