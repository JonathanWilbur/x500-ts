/* eslint-disable */
import {
    _decode_TypeAndContextAssertion,
    _encode_TypeAndContextAssertion,
} from "../DirectoryAbstractService/TypeAndContextAssertion.ta";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
import { id_oa_contextAssertionDefault } from "../InformationFramework/id-oa-contextAssertionDefault.va";
import { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa";
export {
    TypeAndContextAssertion,
    _decode_TypeAndContextAssertion,
    _encode_TypeAndContextAssertion,
} from "../DirectoryAbstractService/TypeAndContextAssertion.ta";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca";
export { id_oa_contextAssertionDefault } from "../InformationFramework/id-oa-contextAssertionDefault.va";
export { objectIdentifierFirstComponentMatch } from "../SelectedAttributeTypes/objectIdentifierFirstComponentMatch.oa";

/* START_OF_SYMBOL_DEFINITION contextAssertionDefaults */
/**
 * @summary contextAssertionDefaults
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contextAssertionDefaults ATTRIBUTE ::= {
 *   WITH SYNTAX             TypeAndContextAssertion
 *   EQUALITY MATCHING RULE  objectIdentifierFirstComponentMatch
 *   USAGE                   directoryOperation
 *   ID                      id-oa-contextAssertionDefault }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export const contextAssertionDefaults: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TypeAndContextAssertion,
    },
    encoderFor: {
        "&Type": _encode_TypeAndContextAssertion,
    },
    "&equality-match": objectIdentifierFirstComponentMatch /* OBJECT_FIELD_SETTING */,
    "&usage": AttributeUsage_directoryOperation /* OBJECT_FIELD_SETTING */,
    "&id": id_oa_contextAssertionDefault /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION contextAssertionDefaults */

/* eslint-enable */
