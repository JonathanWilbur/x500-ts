/* eslint-disable */
import {
    _decode_CertReplaceReq,
    _encode_CertReplaceReq,
} from "../PkiPMIProtocolSpecifications/CertReplaceReq.ta";
import { id_certReplaceReq } from "../PkiPMIProtocolSpecifications/id-certReplaceReq.va";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";
export {
    CertReplaceReq,
    _decode_CertReplaceReq,
    _encode_CertReplaceReq,
} from "../PkiPMIProtocolSpecifications/CertReplaceReq.ta";
export { id_certReplaceReq } from "../PkiPMIProtocolSpecifications/id-certReplaceReq.va";
export { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";

/* START_OF_SYMBOL_DEFINITION certReplaceReq */
/**
 * @summary certReplaceReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certReplaceReq WRAPPED-PDU ::= {
 *                  CertReplaceReq
 *   IDENTIFIED BY  id-certReplaceReq }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const certReplaceReq: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertReplaceReq,
    },
    encoderFor: {
        "&Type": _encode_CertReplaceReq,
    },
    "&id": id_certReplaceReq /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certReplaceReq */

/* eslint-enable */
