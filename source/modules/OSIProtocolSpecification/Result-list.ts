import ResultListItem from "./ResultListItem";

/**
 * `Result-list ::= SEQUENCE SIZE (2) OF SEQUENCE {
 *     result                [0] IMPLICIT Result,
 *     transfer-syntax-name  [1] IMPLICIT Transfer-syntax-name   OPTIONAL,
 *     provider-reason       [2] IMPLICIT INTEGER {
 *       reason-not-specified                     (0),
 *       abstract-syntax-not-supported            (1),
 *       proposed-transfer-syntaxes-not-supported (2)} OPTIONAL}`
 */
type Result_list = [ ResultListItem, ResultListItem ];
export default Result_list;
