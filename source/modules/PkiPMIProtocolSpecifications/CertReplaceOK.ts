import { ASN1Element } from "asn1-ts";

/**
 * `CertReplaceOK ::= SEQUENCE (SIZE (1..MAX)) OF CHOICE {
 *   ok        [0] SEQUENCE {
 *     issuer        Name,
 *     serialNumber  CertificateSerialNumber,
 *     ... },
 *   not-ok    [1] SEQUENCE {
 *     status        CASP-CertStatusCode,
 *     ... },
 *   ... }`
 */
type CertReplaceOK = ASN1Element[];
export default CertReplaceOK;
