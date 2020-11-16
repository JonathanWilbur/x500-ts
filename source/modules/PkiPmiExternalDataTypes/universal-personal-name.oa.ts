/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_UniversalPersonalName,
    _encode_UniversalPersonalName,
} from "../PkiPmiExternalDataTypes/UniversalPersonalName.ta";
export { EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca";
export {
    UniversalPersonalName,
    _decode_UniversalPersonalName,
    _encode_UniversalPersonalName,
} from "../PkiPmiExternalDataTypes/UniversalPersonalName.ta";

/* START_OF_SYMBOL_DEFINITION universal_personal_name */
/**
 * @summary universal_personal_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-personal-name EXTENSION-ATTRIBUTE ::= {
 *                  UniversalPersonalName
 *   IDENTIFIED BY  26 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_personal_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalPersonalName,
    },
    encoderFor: {
        "&Type": _encode_UniversalPersonalName,
    },
    "&id": 26 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION universal_personal_name */

/* eslint-enable */
