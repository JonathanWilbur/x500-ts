import { DERElement } from "asn1-ts";

/**
 * `RevokedCertificateGroup ::= CHOICE {
 *   serialNumberRange  NumberRange,
 *   nameSubtree        GeneralName
 * }`
 */
type RevokedCertificateGroup = DERElement;
export default RevokedCertificateGroup;
