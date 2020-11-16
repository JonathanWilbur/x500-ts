/* eslint-disable */
import { id_replaceAvlRsp } from "../PkiPMIProtocolSpecifications/id-replaceAvlRsp.va";
import {
    _decode_ReplaceAvlRsp,
    _encode_ReplaceAvlRsp,
} from "../PkiPMIProtocolSpecifications/ReplaceAvlRsp.ta";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";
export { id_replaceAvlRsp } from "../PkiPMIProtocolSpecifications/id-replaceAvlRsp.va";
export {
    ReplaceAvlRsp,
    _decode_ReplaceAvlRsp,
    _encode_ReplaceAvlRsp,
} from "../PkiPMIProtocolSpecifications/ReplaceAvlRsp.ta";
export { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";

/* START_OF_SYMBOL_DEFINITION replaceAvlRsp */
/**
 * @summary replaceAvlRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * replaceAvlRsp WRAPPED-PDU ::= {
 *                  ReplaceAvlRsp
 *   IDENTIFIED BY  id-replaceAvlRsp }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const replaceAvlRsp: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_ReplaceAvlRsp,
    },
    encoderFor: {
        "&Type": _encode_ReplaceAvlRsp,
    },
    "&id": id_replaceAvlRsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION replaceAvlRsp */

/* eslint-enable */
