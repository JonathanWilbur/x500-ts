/**
 * `PrivateDomainName ::= CHOICE {
 *   numeric    NumericString(SIZE (1..ub-domain-name-length)),
 *   printable  PrintableString(SIZE (1..ub-domain-name-length)) }`
 */
type PrivateDomainName = string;
export default PrivateDomainName;
