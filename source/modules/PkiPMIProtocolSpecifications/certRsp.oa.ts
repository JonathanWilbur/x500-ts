/* eslint-disable */
import {
    _decode_CertRsp,
    _encode_CertRsp,
} from "../PkiPMIProtocolSpecifications/CertRsp.ta";
import { id_certRsp } from "../PkiPMIProtocolSpecifications/id-certRsp.va";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";
export {
    CertRsp,
    _decode_CertRsp,
    _encode_CertRsp,
} from "../PkiPMIProtocolSpecifications/CertRsp.ta";
export { id_certRsp } from "../PkiPMIProtocolSpecifications/id-certRsp.va";
export { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";

/* START_OF_SYMBOL_DEFINITION certRsp */
/**
 * @summary certRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certRsp WRAPPED-PDU ::= {
 *                 CertRsp
 *   IDENTIFIED BY id-certRsp }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU}
 * @implements {WRAPPED_PDU}
 */
export const certRsp: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertRsp,
    },
    encoderFor: {
        "&Type": _encode_CertRsp,
    },
    "&id": id_certRsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certRsp */

/* eslint-enable */
