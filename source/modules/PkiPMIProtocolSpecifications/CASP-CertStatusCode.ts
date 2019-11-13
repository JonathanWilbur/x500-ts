/**
 * `CASP-CertStatusCode ::= ENUMERATED {
 *   noReason       (1),
 *   unknownCert    (2),
 *   ... }`
 */
enum CASP_CertStatusCode {
    noReason = 1,
    unknownCert = 2,
}

export default CASP_CertStatusCode;
