/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_TeletexPersonalName,
    _encode_TeletexPersonalName,
} from "../MTSAbstractService/TeletexPersonalName.ta";
export { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
export {
    TeletexPersonalName,
    _decode_TeletexPersonalName,
    _encode_TeletexPersonalName,
} from "../MTSAbstractService/TeletexPersonalName.ta";

/* START_OF_SYMBOL_DEFINITION teletex_personal_name */
/**
 * @summary teletex_personal_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * teletex-personal-name EXTENSION-ATTRIBUTE ::= {
 *   TeletexPersonalName
 *   IDENTIFIED BY  4
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const teletex_personal_name: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TeletexPersonalName,
    },
    encoderFor: {
        "&Type": _encode_TeletexPersonalName,
    },
    "&id": 4 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION teletex_personal_name */

/* eslint-enable */
