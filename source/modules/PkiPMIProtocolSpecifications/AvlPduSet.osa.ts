/* eslint-disable */
import { addAvlReq } from "../PkiPMIProtocolSpecifications/addAvlReq.oa";
import { addAvlRsp } from "../PkiPMIProtocolSpecifications/addAvlRsp.oa";
import { certReplaceReq } from "../PkiPMIProtocolSpecifications/certReplaceReq.oa";
import { certReplaceRsp } from "../PkiPMIProtocolSpecifications/certReplaceRsp.oa";
import { certReq } from "../PkiPMIProtocolSpecifications/certReq.oa";
import { certRsp } from "../PkiPMIProtocolSpecifications/certRsp.oa";
import { certSubscribeReq } from "../PkiPMIProtocolSpecifications/certSubscribeReq.oa";
import { certSubscribeRsp } from "../PkiPMIProtocolSpecifications/certSubscribeRsp.oa";
import { certUnsubscribeReq } from "../PkiPMIProtocolSpecifications/certUnsubscribeReq.oa";
import { certUnsubscribeRsp } from "../PkiPMIProtocolSpecifications/certUnsubscribeRsp.oa";
import { deleteAvlReq } from "../PkiPMIProtocolSpecifications/deleteAvlReq.oa";
import { deleteAvlRsp } from "../PkiPMIProtocolSpecifications/deleteAvlRsp.oa";
import { rejectAVL } from "../PkiPMIProtocolSpecifications/rejectAVL.oa";
import { rejectCAsubscribe } from "../PkiPMIProtocolSpecifications/rejectCAsubscribe.oa";
import { replaceAvlReq } from "../PkiPMIProtocolSpecifications/replaceAvlReq.oa";
import { replaceAvlRsp } from "../PkiPMIProtocolSpecifications/replaceAvlRsp.oa";
import { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";
export { addAvlReq } from "../PkiPMIProtocolSpecifications/addAvlReq.oa";
export { addAvlRsp } from "../PkiPMIProtocolSpecifications/addAvlRsp.oa";
export { certReplaceReq } from "../PkiPMIProtocolSpecifications/certReplaceReq.oa";
export { certReplaceRsp } from "../PkiPMIProtocolSpecifications/certReplaceRsp.oa";
export { certReq } from "../PkiPMIProtocolSpecifications/certReq.oa";
export { certRsp } from "../PkiPMIProtocolSpecifications/certRsp.oa";
export { certSubscribeReq } from "../PkiPMIProtocolSpecifications/certSubscribeReq.oa";
export { certSubscribeRsp } from "../PkiPMIProtocolSpecifications/certSubscribeRsp.oa";
export { certUnsubscribeReq } from "../PkiPMIProtocolSpecifications/certUnsubscribeReq.oa";
export { certUnsubscribeRsp } from "../PkiPMIProtocolSpecifications/certUnsubscribeRsp.oa";
export { deleteAvlReq } from "../PkiPMIProtocolSpecifications/deleteAvlReq.oa";
export { deleteAvlRsp } from "../PkiPMIProtocolSpecifications/deleteAvlRsp.oa";
export { rejectAVL } from "../PkiPMIProtocolSpecifications/rejectAVL.oa";
export { rejectCAsubscribe } from "../PkiPMIProtocolSpecifications/rejectCAsubscribe.oa";
export { replaceAvlReq } from "../PkiPMIProtocolSpecifications/replaceAvlReq.oa";
export { replaceAvlRsp } from "../PkiPMIProtocolSpecifications/replaceAvlRsp.oa";
export { WRAPPED_PDU } from "../PkiPmiWrapper/WRAPPED-PDU.oca";

/* START_OF_SYMBOL_DEFINITION AvlPduSet */
/**
 * @summary AvlPduSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AvlPduSet WRAPPED-PDU ::= {
 *   certReq |
 *   certRsp |
 *   addAvlReq |
 *   addAvlRsp |
 *   replaceAvlReq |
 *   replaceAvlRsp |
 *   deleteAvlReq |
 *   deleteAvlRsp |
 *   rejectAVL |
 *   certSubscribeReq |
 *   certSubscribeRsp |
 *   certUnsubscribeReq |
 *   certUnsubscribeRsp |
 *   certReplaceReq |
 *   certReplaceRsp |
 *   rejectCAsubscribe,
 *   ... }
 * ```
 *
 * @constant
 * @type {WRAPPED_PDU[]}
 *
 */
export const AvlPduSet: WRAPPED_PDU[] = [
    certReq,
    certRsp,
    addAvlReq,
    addAvlRsp,
    replaceAvlReq,
    replaceAvlRsp,
    deleteAvlReq,
    deleteAvlRsp,
    rejectAVL,
    certSubscribeReq,
    certSubscribeRsp,
    certUnsubscribeReq,
    certUnsubscribeRsp,
    certReplaceReq,
    certReplaceRsp,
    rejectCAsubscribe,
];
/* END_OF_SYMBOL_DEFINITION AvlPduSet */

/* eslint-enable */
