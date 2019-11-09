/**
 * `CertReplaceReq ::= SEQUENCE {
 *   COMPONENTS OF CASPcommonComponents,
 *   certs         SEQUENCE (SIZE (1..MAX)) OF SEQUENCE {
 *     old           CertificateSerialNumber,
 *     new           Certificate,
 *     ... },
 *   ... }`
 */
