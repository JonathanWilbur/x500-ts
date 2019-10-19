import PolicyInformation from "./PolicyInformation";

/**
 * `CertificatePoliciesSyntax ::= SEQUENCE SIZE (1..MAX) OF PolicyInformation`
 */
type CertificatePoliciesSyntax = PolicyInformation[];
export default CertificatePoliciesSyntax;
