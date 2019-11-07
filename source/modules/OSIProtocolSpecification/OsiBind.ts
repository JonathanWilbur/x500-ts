/**
 * `OsiBind{APPLICATION-CONTEXT:Protocols} ::= SET {
 *   mode-selector                  [0]  IMPLICIT SET {
 *     mode-value                     [0]  IMPLICIT INTEGER(1)},
 *   normal-mode-parameters         [2]  IMPLICIT SEQUENCE {
 *     protocol-version               [0]  IMPLICIT BIT STRING {version-1(0)}
 *                                           DEFAULT {version-1},
 *     calling-presentation-selector  [1]  IMPLICIT Presentation-selector OPTIONAL,
 *     called-presentation-selector   [2]  IMPLICIT Presentation-selector OPTIONAL,
 *     presentation-context-definition-list
 *                                    [4]  IMPLICIT Context-list,
 *     user-data                           CHOICE {
 *       fully-encoded-data  [APPLICATION 1] IMPLICIT SEQUENCE SIZE (1) OF SEQUENCE {
 *         transfer-syntax-name              Transfer-syntax-name OPTIONAL,
 *         presentation-context-identifier   Presentation-context-identifier,
 *         presentation-data-values          CHOICE {
 *           single-ASN1-type             [0]  ABSTRACT-SYNTAX.&Type
 *                                              (AARQ-apdu{{Protocols}})}}}}}`
 */
