/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_UniversalUniquePostalName,
    _encode_UniversalUniquePostalName,
} from "../PkiPmiExternalDataTypes/UniversalUniquePostalName.ta";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
export {
    UniversalUniquePostalName,
    _decode_UniversalUniquePostalName,
    _encode_UniversalUniquePostalName,
} from "../PkiPmiExternalDataTypes/UniversalUniquePostalName.ta";

/* START_OF_SYMBOL_DEFINITION universal_unique_postal_name */
/**
 * @summary universal_unique_postal_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-unique-postal-name EXTENSION-ATTRIBUTE ::= {
 *                  UniversalUniquePostalName
 *   IDENTIFIED BY  39 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_unique_postal_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalUniquePostalName,
    },
    encoderFor: {
        "&Type": _encode_UniversalUniquePostalName,
    },
    "&id": 39 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION universal_unique_postal_name */

/* eslint-enable */
