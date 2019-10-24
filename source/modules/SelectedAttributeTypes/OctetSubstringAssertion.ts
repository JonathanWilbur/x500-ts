import { DERElement } from "asn1-ts";

/**
 * OctetSubstringAssertion ::= SEQUENCE OF CHOICE {
 *   initial  [0]  OCTET STRING,
 *   any      [1]  OCTET STRING,
 *   final    [2]  OCTET STRING,
 *   ... } -- at most one initial and one final component
 */
type OctetSubstringAssertion = DERElement[];
export default OctetSubstringAssertion;
