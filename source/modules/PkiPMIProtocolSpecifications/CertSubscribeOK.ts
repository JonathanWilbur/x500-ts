import { ASN1Element } from "asn1-ts";

/**
 * `CertSubscribeOK ::= SEQUENCE (SIZE (1..MAX)) OF CHOICE {
 *   ok       [0] SEQUENCE {
 *     cert         Certificate,
 *     status       CertStatus,
 *     revokeReason CRLReason OPTIONAL,
 *     ... },
 *   not-ok   [1] SEQUENCE {
 *     status       CASP-CertStatusCode,
 *     ... },
 *   ... }`
 */
type CertSubscribeOK = ASN1Element[];
export default CertSubscribeOK;
