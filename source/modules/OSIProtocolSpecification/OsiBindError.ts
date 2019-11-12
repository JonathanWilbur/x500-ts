import { ASN1Element } from "asn1-ts";

/**
 * `OsiBindError{APPLICATION-CONTEXT:Protocols} ::= CHOICE {
 *   normal-mode-parameters  SEQUENCE {
 *     protocol-version               [0]  IMPLICIT BIT STRING {version-1(0)}
 *                                           DEFAULT {version-1},
 *     responding-presentation-selector
 *                                    [3]  IMPLICIT Presentation-selector OPTIONAL,
 *     presentation-context-definition-result-list
 *                                    [5]  IMPLICIT Result-list OPTIONAL,
 *     provider-reason                [10] IMPLICIT Provider-reason OPTIONAL,
 *     user-data                           CHOICE {
 *       fully-encoded-data  [APPLICATION 1] IMPLICIT SEQUENCE SIZE (1) OF SEQUENCE {
 *         transfer-syntax-name                Transfer-syntax-name   OPTIONAL,
 *         presentation-context-identifier     Presentation-context-identifier,
 *         presentation-data-values            CHOICE {
 *           single-ASN1-type               [0]
 *                      ABSTRACT-SYNTAX.&Type(AAREerr-apdu{{Protocols}})}}} OPTIONAL}}`
 */
type OsiBindError = ASN1Element;
export default OsiBindError;
