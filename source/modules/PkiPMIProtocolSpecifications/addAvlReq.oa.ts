/* eslint-disable */
import {
    _decode_AddAvlReq,
    _encode_AddAvlReq,
} from "../PkiPMIProtocolSpecifications/AddAvlReq.ta";
import { id_addAvlReq } from "../PkiPMIProtocolSpecifications/id-addAvlReq.va";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";
export {
    AddAvlReq,
    _decode_AddAvlReq,
    _encode_AddAvlReq,
} from "../PkiPMIProtocolSpecifications/AddAvlReq.ta";
export { id_addAvlReq } from "../PkiPMIProtocolSpecifications/id-addAvlReq.va";
export { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";

/* START_OF_SYMBOL_DEFINITION addAvlReq */
/**
 * @summary addAvlReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * addAvlReq WRAPPED-PDU ::= {
 *                 AddAvlReq
 *   IDENTIFIED BY id-addAvlReq }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const addAvlReq: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_AddAvlReq,
    },
    encoderFor: {
        "&Type": _encode_AddAvlReq,
    },
    "&id": id_addAvlReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION addAvlReq */

/* eslint-enable */
