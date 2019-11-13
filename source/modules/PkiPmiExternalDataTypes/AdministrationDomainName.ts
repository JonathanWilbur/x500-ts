/**
 * `AdministrationDomainName ::= [APPLICATION 2]  CHOICE {
 *   numeric    NumericString(SIZE (0..ub-domain-name-length)),
 *   printable  PrintableString(SIZE (0..ub-domain-name-length)) }`
 */
type AdministrationDomainName = string;
export default AdministrationDomainName;
