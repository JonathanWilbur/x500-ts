/* eslint-disable */
import { id_rejectAVL } from "../PkiPMIProtocolSpecifications/id-rejectAVL.va";
import {
    _decode_RejectAVL,
    _encode_RejectAVL,
} from "../PkiPMIProtocolSpecifications/RejectAVL.ta";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";
export { id_rejectAVL } from "../PkiPMIProtocolSpecifications/id-rejectAVL.va";
export {
    RejectAVL,
    _decode_RejectAVL,
    _encode_RejectAVL,
} from "../PkiPMIProtocolSpecifications/RejectAVL.ta";
export { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";

/* START_OF_SYMBOL_DEFINITION rejectAVL */
/**
 * @summary rejectAVL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rejectAVL  WRAPPED-PDU ::= {
 *                  RejectAVL
 *   IDENTIFIED BY  id-rejectAVL }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const rejectAVL: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_RejectAVL,
    },
    encoderFor: {
        "&Type": _encode_RejectAVL,
    },
    "&id": id_rejectAVL /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION rejectAVL */

/* eslint-enable */
