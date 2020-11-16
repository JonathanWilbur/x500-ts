/* eslint-disable */
import {
    _decode_AddAvlRsp,
    _encode_AddAvlRsp,
} from "../PkiPMIProtocolSpecifications/AddAvlRsp.ta";
import { id_addAvlRsp } from "../PkiPMIProtocolSpecifications/id-addAvlRsp.va";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";
export {
    AddAvlRsp,
    _decode_AddAvlRsp,
    _encode_AddAvlRsp,
} from "../PkiPMIProtocolSpecifications/AddAvlRsp.ta";
export { id_addAvlRsp } from "../PkiPMIProtocolSpecifications/id-addAvlRsp.va";
export { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";

/* START_OF_SYMBOL_DEFINITION addAvlRsp */
/**
 * @summary addAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * addAvlRsp WRAPPED-PDU ::= {
 *                  AddAvlRsp
 *   IDENTIFIED BY  id-addAvlRsp }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const addAvlRsp: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_AddAvlRsp,
    },
    encoderFor: {
        "&Type": _encode_AddAvlRsp,
    },
    "&id": id_addAvlRsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION addAvlRsp */

/* eslint-enable */
