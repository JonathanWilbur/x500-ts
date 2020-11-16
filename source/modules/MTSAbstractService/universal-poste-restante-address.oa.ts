/* eslint-disable */
import { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
import {
    _decode_UniversalPosteRestanteAddress,
    _encode_UniversalPosteRestanteAddress,
} from "../MTSAbstractService/UniversalPosteRestanteAddress.ta";
export { EXTENSION_ATTRIBUTE } from "../MTSAbstractService/EXTENSION-ATTRIBUTE.oca";
export {
    UniversalPosteRestanteAddress,
    _decode_UniversalPosteRestanteAddress,
    _encode_UniversalPosteRestanteAddress,
} from "../MTSAbstractService/UniversalPosteRestanteAddress.ta";

/* START_OF_SYMBOL_DEFINITION universal_poste_restante_address */
/**
 * @summary universal_poste_restante_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-poste-restante-address EXTENSION-ATTRIBUTE ::= {
 *   UniversalPosteRestanteAddress
 *   IDENTIFIED BY  38
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE}
 * @implements {EXTENSION_ATTRIBUTE}
 */
export const universal_poste_restante_address: EXTENSION_ATTRIBUTE = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalPosteRestanteAddress,
    },
    encoderFor: {
        "&Type": _encode_UniversalPosteRestanteAddress,
    },
    "&id": 38 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION universal_poste_restante_address */

/* eslint-enable */
