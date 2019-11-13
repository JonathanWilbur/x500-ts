import { ASN1Element } from "asn1-ts";

/**
 * `TBrequest ::= CHOICE {
 *   caCert      [0] PKCertIdentifier,
 *   subjectCert [1] PKCertIdentifier,
 *   ... }`
 */
type TBrequest = ASN1Element;
export default TBrequest;
