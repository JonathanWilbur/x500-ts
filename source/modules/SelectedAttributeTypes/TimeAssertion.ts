import { DERElement } from "asn1-ts";

/**
 * `TimeAssertion ::= CHOICE {
 *   now             NULL,
 *   at              GeneralizedTime,
 *   between         SEQUENCE {
 *     startTime  [0]  GeneralizedTime,
 *     endTime    [1]  GeneralizedTime OPTIONAL,
 *     entirely        BOOLEAN DEFAULT FALSE,
 *     ...},
 *   ... }`
 */
type TimeAssertion = DERElement;
export default TimeAssertion;
