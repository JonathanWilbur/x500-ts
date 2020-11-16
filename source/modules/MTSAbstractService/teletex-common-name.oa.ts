/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_TeletexCommonName,
    _encode_TeletexCommonName,
} from "../MTSAbstractService/TeletexCommonName.ta";
export { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
export {
    TeletexCommonName,
    _decode_TeletexCommonName,
    _encode_TeletexCommonName,
} from "../MTSAbstractService/TeletexCommonName.ta";

/* START_OF_SYMBOL_DEFINITION teletex_common_name */
/**
 * @summary teletex_common_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletex-common-name EXTENSION-ATTRIBUTE ::= {TeletexCommonName
 *                                              IDENTIFIED BY  2
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const teletex_common_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TeletexCommonName,
    },
    encoderFor: {
        "&Type": _encode_TeletexCommonName,
    },
    "&id": 2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION teletex_common_name */

/* eslint-enable */
