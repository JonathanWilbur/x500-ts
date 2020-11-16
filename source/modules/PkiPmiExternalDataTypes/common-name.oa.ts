/* eslint-disable */
import {
    _decode_CommonName,
    _encode_CommonName,
} from "../PkiPmiExternalDataTypes/CommonName.ta";
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
export {
    CommonName,
    _decode_CommonName,
    _encode_CommonName,
} from "../PkiPmiExternalDataTypes/CommonName.ta";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";

/* START_OF_SYMBOL_DEFINITION common_name */
/**
 * @summary common_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * common-name EXTENSION-ATTRIBUTE ::= {
 *                  CommonName
 *   IDENTIFIED BY  1 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const common_name: EXTENSION_ATTRIBUTE = {
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
