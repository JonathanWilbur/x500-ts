/**
 * `CertificationPath ::= SEQUENCE {
 *   userKeyId          [0]  OCTET STRING OPTIONAL,
 *   userCertif         [1]  Certificate OPTIONAL,
 *   verifKeyId         [2]  OCTET STRING OPTIONAL,
 *   userVerifCertif    [3]  Certificate OPTIONAL,
 *   theCACertificates  [4]  SEQUENCE OF CertificatePair OPTIONAL
 * } -- Presence of [2] or [3] implies that [0] or [1] must also be
 * -- present.  Presence of [4] implies that at least one of [0], [1],
 * -- [2], and [3] must also be present.`
 */
