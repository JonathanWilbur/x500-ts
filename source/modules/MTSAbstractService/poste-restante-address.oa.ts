/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_PosteRestanteAddress,
    _encode_PosteRestanteAddress,
} from "../MTSAbstractService/PosteRestanteAddress.ta";
export { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
export {
    PosteRestanteAddress,
    _decode_PosteRestanteAddress,
    _encode_PosteRestanteAddress,
} from "../MTSAbstractService/PosteRestanteAddress.ta";

/* START_OF_SYMBOL_DEFINITION poste_restante_address */
/**
 * @summary poste_restante_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * poste-restante-address EXTENSION-ATTRIBUTE ::= {
 *   PosteRestanteAddress
 *   IDENTIFIED BY  19
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const poste_restante_address: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PosteRestanteAddress,
    },
    encoderFor: {
        "&Type": _encode_PosteRestanteAddress,
    },
    "&id": 19 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION poste_restante_address */

/* eslint-enable */
