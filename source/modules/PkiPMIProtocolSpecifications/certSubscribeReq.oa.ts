/* eslint-disable */
import {
    _decode_CertSubscribeReq,
    _encode_CertSubscribeReq,
} from "../PkiPMIProtocolSpecifications/CertSubscribeReq.ta";
import { id_certSubscribeReq } from "../PkiPMIProtocolSpecifications/id-certSubscribeReq.va";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";
export {
    CertSubscribeReq,
    _decode_CertSubscribeReq,
    _encode_CertSubscribeReq,
} from "../PkiPMIProtocolSpecifications/CertSubscribeReq.ta";
export { id_certSubscribeReq } from "../PkiPMIProtocolSpecifications/id-certSubscribeReq.va";
export { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";

/* START_OF_SYMBOL_DEFINITION certSubscribeReq */
/**
 * @summary certSubscribeReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certSubscribeReq WRAPPED-PDU ::= {
 *                  CertSubscribeReq
 *   IDENTIFIED BY  id-certSubscribeReq }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const certSubscribeReq: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertSubscribeReq,
    },
    encoderFor: {
        "&Type": _encode_CertSubscribeReq,
    },
    "&id": id_certSubscribeReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certSubscribeReq */

/* eslint-enable */
