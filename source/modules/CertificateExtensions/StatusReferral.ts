import { DERElement } from "asn1-ts";

/**
 * `StatusReferral ::= CHOICE {
 *   cRLReferral    [0]  CRLReferral,
 *   otherReferral  [1]  INSTANCE OF OTHER-REFERRAL,
 *   ... }`
 */
type StatusReferral = DERElement;
export default StatusReferral;
