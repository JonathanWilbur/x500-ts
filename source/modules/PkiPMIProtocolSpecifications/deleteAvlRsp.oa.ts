/* eslint-disable */
import {
    _decode_DeleteAvlRsp,
    _encode_DeleteAvlRsp,
} from "../PkiPMIProtocolSpecifications/DeleteAvlRsp.ta";
import { id_deleteAvlRsp } from "../PkiPMIProtocolSpecifications/id-deleteAvlRsp.va";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";
export {
    DeleteAvlRsp,
    _decode_DeleteAvlRsp,
    _encode_DeleteAvlRsp,
} from "../PkiPMIProtocolSpecifications/DeleteAvlRsp.ta";
export { id_deleteAvlRsp } from "../PkiPMIProtocolSpecifications/id-deleteAvlRsp.va";
export { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";

/* START_OF_SYMBOL_DEFINITION deleteAvlRsp */
/**
 * @summary deleteAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deleteAvlRsp WRAPPED-PDU ::= {
 *                  DeleteAvlRsp
 *   IDENTIFIED BY  id-deleteAvlRsp }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const deleteAvlRsp: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_DeleteAvlRsp,
    },
    encoderFor: {
        "&Type": _encode_DeleteAvlRsp,
    },
    "&id": id_deleteAvlRsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION deleteAvlRsp */

/* eslint-enable */
