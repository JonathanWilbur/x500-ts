import CrossCertificates from "./CrossCertificates";

/**
 * `ForwardCertificationPath ::= SEQUENCE SIZE (1..MAX) OF CrossCertificates`
 */
type ForwardCertificationPath = CrossCertificates[];
export default ForwardCertificationPath;
