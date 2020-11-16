/* eslint-disable */
import { id_replaceAvlReq } from "../PkiPMIProtocolSpecifications/id-replaceAvlReq.va";
import {
    _decode_ReplaceAvlReq,
    _encode_ReplaceAvlReq,
} from "../PkiPMIProtocolSpecifications/ReplaceAvlReq.ta";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";
export { id_replaceAvlReq } from "../PkiPMIProtocolSpecifications/id-replaceAvlReq.va";
export {
    ReplaceAvlReq,
    _decode_ReplaceAvlReq,
    _encode_ReplaceAvlReq,
} from "../PkiPMIProtocolSpecifications/ReplaceAvlReq.ta";
export { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";

/* START_OF_SYMBOL_DEFINITION replaceAvlReq */
/**
 * @summary replaceAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * replaceAvlReq WRAPPED-PDU ::= {
 *                  ReplaceAvlReq
 *   IDENTIFIED BY  id-replaceAvlReq }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const replaceAvlReq: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_ReplaceAvlReq,
    },
    encoderFor: {
        "&Type": _encode_ReplaceAvlReq,
    },
    "&id": id_replaceAvlReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION replaceAvlReq */

/* eslint-enable */
