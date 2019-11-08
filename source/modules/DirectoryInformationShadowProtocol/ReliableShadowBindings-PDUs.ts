import { ASN1Element } from "asn1-ts";

/**
 * `ReliableShadowBinding-PDUs ::= CHOICE {
 *   rTS     [0]  RTSE-apdus,
 *   bind    Bind{dSAShadowBind},
 *   unbind  Unbind{dSAShadowUnbind}
 * }`
 */
type ReliableShadowBinding_PDUs = ASN1Element;
export default ReliableShadowBinding_PDUs;
