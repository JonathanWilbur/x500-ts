import Certificate from "./Certificate";

/**
 * `CrossCertificates ::= SET SIZE (1..MAX) OF Certificate`
 */
type CrossCertificates = Certificate[];
export default CrossCertificates;
