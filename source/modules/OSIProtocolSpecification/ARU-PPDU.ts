/**
 * `ARU-PPDU ::= CHOICE {
 *   normal-mode-parameters     [0] IMPLICIT SEQUENCE {
 *     presentation-context-identifier-list
 *                                     [0] IMPLICIT Presentation-context-identifier-list,
 *     user-data                           CHOICE {
 *       fully-encoded-data [APPLICATION 1]  IMPLICIT SEQUENCE SIZE(1..MAX) OF SEQUENCE {
 *         presentation-context-identifier     Presentation-context-identifier,
 *         presentation-data-values            CHOICE {
 *           single-ASN1-type               [0]  ABSTRACT-SYNTAX.&Type(ABRT-apdu)}}}}}`
 */
