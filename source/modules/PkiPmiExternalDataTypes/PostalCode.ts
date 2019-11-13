/**
 * `PostalCode ::= CHOICE {
 *   numeric-code    NumericString(SIZE (1..ub-postal-code-length)),
 *   printable-code  PrintableString(SIZE (1..ub-postal-code-length)) }`
 */
type PostalCode = string;
export default PostalCode;
