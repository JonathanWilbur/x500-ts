/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_PostalCode,
    _encode_PostalCode,
} from "../PkiPmiExternalDataTypes/PostalCode.ta";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
export {
    PostalCode,
    _decode_PostalCode,
    _encode_PostalCode,
} from "../PkiPmiExternalDataTypes/PostalCode.ta";

/* START_OF_SYMBOL_DEFINITION postal_code */
/**
 * @summary postal_code
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * postal-code EXTENSION-ATTRIBUTE ::= {
 *                  PostalCode
 *   IDENTIFIED BY  9 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const postal_code: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PostalCode,
    },
    encoderFor: {
        "&Type": _encode_PostalCode,
    },
    "&id": 9 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION postal_code */

/* eslint-enable */
