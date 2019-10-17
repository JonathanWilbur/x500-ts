import CertPolicyId from "./CertPolicyId";

/**
 * `AcceptableCertPoliciesSyntax ::= SEQUENCE SIZE (1..MAX) OF CertPolicyId`
 */
type AcceptableCertPoliciesSyntax = CertPolicyId;
export default AcceptableCertPoliciesSyntax;
