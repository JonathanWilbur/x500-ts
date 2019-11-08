import { ASN1Element } from "asn1-ts";

/**
 * `IDM-PDU{IDM-PROTOCOL:protocol} ::= CHOICE {
 *   bind         [0]  IdmBind{{protocol}},
 *   bindResult   [1]  IdmBindResult{{protocol}},
 *   bindError    [2]  IdmBindError{{protocol}},
 *   request      [3]  Request{{protocol.&Operations}},
 *   result       [4]  IdmResult{{protocol.&Operations}},
 *   error        [5]  Error{{protocol.&Operations}},
 *   reject       [6]  IdmReject,
 *   unbind       [7]  Unbind,
 *   abort        [8]  Abort,
 *   startTLS     [9]  StartTLS,
 *   tLSResponse  [10] TLSResponse,
 *   ... }`
 */
type IDM_PDU = ASN1Element;
export default IDM_PDU;

