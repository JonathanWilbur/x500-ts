/* eslint-disable */
import {
    _decode_CertUnsubscribeRsp,
    _encode_CertUnsubscribeRsp,
} from "../PkiPMIProtocolSpecifications/CertUnsubscribeRsp.ta";
import { id_certUnsubscribeRsp } from "../PkiPMIProtocolSpecifications/id-certUnsubscribeRsp.va";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";
export {
    CertUnsubscribeRsp,
    _decode_CertUnsubscribeRsp,
    _encode_CertUnsubscribeRsp,
} from "../PkiPMIProtocolSpecifications/CertUnsubscribeRsp.ta";
export { id_certUnsubscribeRsp } from "../PkiPMIProtocolSpecifications/id-certUnsubscribeRsp.va";
export { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";

/* START_OF_SYMBOL_DEFINITION certUnsubscribeRsp */
/**
 * @summary certUnsubscribeRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certUnsubscribeRsp WRAPPED-PDU ::= {
 *                  CertUnsubscribeRsp
 *   IDENTIFIED BY  id-certUnsubscribeRsp }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const certUnsubscribeRsp: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertUnsubscribeRsp,
    },
    encoderFor: {
        "&Type": _encode_CertUnsubscribeRsp,
    },
    "&id": id_certUnsubscribeRsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certUnsubscribeRsp */

/* eslint-enable */
