import CertPolicyId from "./CertPolicyId";

/**
 * `CertPolicySet ::= SEQUENCE SIZE (1..MAX) OF CertPolicyId`
 */
type CertPolicySet = CertPolicyId[];
export default CertPolicySet;
