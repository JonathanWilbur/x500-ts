/* eslint-disable */
import {
    CertReplaceRsp,
    _decode_CertReplaceRsp,
    _encode_CertReplaceRsp,
} from "../PkiPMIProtocolSpecifications/CertReplaceRsp.ta";
import { id_certReplaceRsp } from "../PkiPMIProtocolSpecifications/id-certReplaceRsp.va";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";
export {
    CertReplaceRsp,
    _decode_CertReplaceRsp,
    _encode_CertReplaceRsp,
} from "../PkiPMIProtocolSpecifications/CertReplaceRsp.ta";
export { id_certReplaceRsp } from "../PkiPMIProtocolSpecifications/id-certReplaceRsp.va";
export { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";

/* START_OF_SYMBOL_DEFINITION certReplaceRsp */
/**
 * @summary certReplaceRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certReplaceRsp WRAPPED-PDU ::= {
 *                  CertReplaceRsp
 *   IDENTIFIED BY  id-certReplaceRsp }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU<CertReplaceRsp>}
 * @implements {WRAPPED_PDU<CertReplaceRsp>}
 */
export const certReplaceRsp: WRAPPED_PDU = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_CertReplaceRsp,
    },
    encoderFor: {
        "&Type": _encode_CertReplaceRsp,
    },
    "&id": id_certReplaceRsp /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION certReplaceRsp */

/* eslint-enable */
