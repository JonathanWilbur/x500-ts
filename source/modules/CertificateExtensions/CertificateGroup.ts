import { DERElement } from "asn1-ts";

/**
 * `CertificateGroup ::= CHOICE {
 *   serialNumbers      [0]  CertificateSerialNumbers,
 *   serialNumberRange  [1]  CertificateGroupNumberRange,
 *   nameSubtree        [2]  GeneralName,
 *   ... }`
 */
type CertificateGroup = DERElement;
export default CertificateGroup;
