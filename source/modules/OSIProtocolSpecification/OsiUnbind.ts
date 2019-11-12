import { ASN1Element } from "asn1-ts";

/**
 * `OsiUnbind ::= CHOICE {
 *   fully-encoded-data
 *     [APPLICATION 1] IMPLICIT SEQUENCE SIZE (1) OF SEQUENCE {
 *        presentation-context-identifier  Presentation-context-identifier,
 *        presentation-data-values     CHOICE {
 *          single-ASN1-type        [0]  ABSTRACT-SYNTAX.&Type(TheOsiUnbind)}}}`
 */
type OsiUnbind = ASN1Element;
export default OsiUnbind;
