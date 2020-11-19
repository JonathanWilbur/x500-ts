/* eslint-disable */
import {
    CertReq,
    _decode_CertReq,
    _encode_CertReq,
} from "../PkiPMIProtocolSpecifications/CertReq.ta";
import { id_certReq } from "../PkiPMIProtocolSpecifications/id-certReq.va";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";
export {
    CertReq,
    _decode_CertReq,
    _encode_CertReq,
} from "../PkiPMIProtocolSpecifications/CertReq.ta";
export { id_certReq } from "../PkiPMIProtocolSpecifications/id-certReq.va";
export { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";

/* START_OF_SYMBOL_DEFINITION certReq */
/**
 * @summary certReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certReq WRAPPED-PDU ::= {
 *                 CertReq
 *   IDENTIFIED BY id-certReq }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU<CertReq>}
 * @implements {WRAPPED_PDU<CertReq>}
 */
export const certReq: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertReq,
    },
    encoderFor: {
        "&Type": _encode_CertReq,
    },
    "&id": id_certReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certReq */

/* eslint-enable */
