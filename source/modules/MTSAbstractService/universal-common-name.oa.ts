/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_UniversalCommonName,
    _encode_UniversalCommonName,
} from "../MTSAbstractService/UniversalCommonName.ta";
export { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
export {
    UniversalCommonName,
    _decode_UniversalCommonName,
    _encode_UniversalCommonName,
} from "../MTSAbstractService/UniversalCommonName.ta";

/* START_OF_SYMBOL_DEFINITION universal_common_name */
/**
 * @summary universal_common_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-common-name EXTENSION-ATTRIBUTE ::= {
 *   UniversalCommonName
 *   IDENTIFIED BY  24
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_common_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalCommonName,
    },
    encoderFor: {
        "&Type": _encode_UniversalCommonName,
    },
    "&id": 24 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION universal_common_name */

/* eslint-enable */
