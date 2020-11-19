/* eslint-disable */
import {
    CommonName,
    _decode_CommonName,
    _encode_CommonName,
} from "../MTSAbstractService/CommonName.ta";
import { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
export {
    CommonName,
    _decode_CommonName,
    _encode_CommonName,
} from "../MTSAbstractService/CommonName.ta";
export { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION common_name */
/**
 * @summary common_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * common-name EXTENSION-ATTRIBUTE ::= {CommonName
 *                                      IDENTIFIED BY  1
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<CommonName>}
 * @implements {EXTENSION_ATTRIBUTE<CommonName>}
 */
export const common_name: EXTENSION_ATTRIBUTE<CommonName> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_CommonName,
    },
    encoderFor: {
        "&Type": _encode_CommonName,
    },
    "&id": 1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION common_name */

/* eslint-enable */
