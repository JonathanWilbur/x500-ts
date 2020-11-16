/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_UniversalLocalPostalAttributes,
    _encode_UniversalLocalPostalAttributes,
} from "../PkiPmiExternalDataTypes/UniversalLocalPostalAttributes.ta";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
export {
    UniversalLocalPostalAttributes,
    _decode_UniversalLocalPostalAttributes,
    _encode_UniversalLocalPostalAttributes,
} from "../PkiPmiExternalDataTypes/UniversalLocalPostalAttributes.ta";

/* START_OF_SYMBOL_DEFINITION universal_local_postal_attributes */
/**
 * @summary universal_local_postal_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-local-postal-attributes EXTENSION-ATTRIBUTE ::= {
 *                  UniversalLocalPostalAttributes
 *   IDENTIFIED BY  40 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_local_postal_attributes: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalLocalPostalAttributes,
    },
    encoderFor: {
        "&Type": _encode_UniversalLocalPostalAttributes,
    },
    "&id": 40 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION universal_local_postal_attributes */

/* eslint-enable */
