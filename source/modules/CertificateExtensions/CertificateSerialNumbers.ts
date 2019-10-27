import CertificateSerialNumber from "../AuthenticationFramework/CertificateSerialNumber";

/**
 * `CertificateSerialNumbers ::= SEQUENCE SIZE (1..MAX) OF CertificateSerialNumber`
 */
type CertificateSerialNumbers = CertificateSerialNumber[];
export default CertificateSerialNumbers;
