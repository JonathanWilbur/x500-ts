/* eslint-disable */
import { id_rejectCAsubscribe } from "../PkiPMIProtocolSpecifications/id-rejectCAsubscribe.va";
import {
    _decode_RejectCAsubscribe,
    _encode_RejectCAsubscribe,
} from "../PkiPMIProtocolSpecifications/RejectCAsubscribe.ta";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";
export { id_rejectCAsubscribe } from "../PkiPMIProtocolSpecifications/id-rejectCAsubscribe.va";
export {
    RejectCAsubscribe,
    _decode_RejectCAsubscribe,
    _encode_RejectCAsubscribe,
} from "../PkiPMIProtocolSpecifications/RejectCAsubscribe.ta";
export { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";

/* START_OF_SYMBOL_DEFINITION rejectCAsubscribe */
/**
 * @summary rejectCAsubscribe
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rejectCAsubscribe  WRAPPED-PDU ::= {
 *                  RejectCAsubscribe
 *   IDENTIFIED BY  id-rejectCAsubscribe }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const rejectCAsubscribe: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_RejectCAsubscribe,
    },
    encoderFor: {
        "&Type": _encode_RejectCAsubscribe,
    },
    "&id": id_rejectCAsubscribe /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION rejectCAsubscribe */

/* eslint-enable */
