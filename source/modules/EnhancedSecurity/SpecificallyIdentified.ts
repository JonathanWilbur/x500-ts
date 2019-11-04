/**
 * `SpecificallyIdentified ::= SEQUENCE {
 *   name    GeneralName,
 *   issuer  GeneralName OPTIONAL,
 *   serial  CertificateSerialNumber OPTIONAL }
 *   (WITH COMPONENTS { ..., issuer PRESENT, serial PRESENT } |
 *   (WITH COMPONENTS { ..., issuer ABSENT, serial ABSENT }))`
 */
