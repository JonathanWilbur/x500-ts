/* eslint-disable */
import {
    CertUpdateReq,
    _decode_CertUpdateReq,
    _encode_CertUpdateReq,
} from "../PkiPMIProtocolSpecifications/CertUpdateReq.ta";
import { id_certUpdateReq } from "../PkiPMIProtocolSpecifications/id-certUpdateReq.va";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";
export {
    CertUpdateReq,
    _decode_CertUpdateReq,
    _encode_CertUpdateReq,
} from "../PkiPMIProtocolSpecifications/CertUpdateReq.ta";
export { id_certUpdateReq } from "../PkiPMIProtocolSpecifications/id-certUpdateReq.va";
export { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";

/* START_OF_SYMBOL_DEFINITION certUpdateReq */
/**
 * @summary certUpdateReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certUpdateReq WRAPPED-PDU ::= {
 *                  CertUpdateReq
 *   IDENTIFIED BY  id-certUpdateReq }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU<CertUpdateReq>}
 * @implements {WRAPPED_PDU<CertUpdateReq>}
 */
export const certUpdateReq: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertUpdateReq,
    },
    encoderFor: {
        "&Type": _encode_CertUpdateReq,
    },
    "&id": id_certUpdateReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certUpdateReq */

/* eslint-enable */
