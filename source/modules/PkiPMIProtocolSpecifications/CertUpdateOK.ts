import { ASN1Element } from "asn1-ts";

/**
 * `CertUpdateOK ::= SEQUENCE (SIZE (1..MAX)) OF CHOICE {
 *   ok        [0] SEQUENCE {
 *     subject       Name,
 *     serialNumber  CertificateSerialNumber,
 *     ... },
 *   not-ok    [1] SEQUENCE {
 *     status        CASP-CertStatusCode,
 *     ... },
 *   ... }`
 */
type CertUpdateOK = ASN1Element[];
export default CertUpdateOK;
