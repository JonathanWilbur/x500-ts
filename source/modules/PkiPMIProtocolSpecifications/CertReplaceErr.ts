/**
 * `CertReplaceErr ::= SEQUENCE {
 *   code        CHOICE {
 *     signedData     [0]  SignedData-error,
 *     envelopedData  [1]  EnvelopedData-error,
 *     casp           [2]  CASP-error,
 *     ... },
 *   ... }`
 */
