/**
 * `CountryName ::= [APPLICATION 1]  CHOICE {
 *   x121-dcc-code         NumericString(SIZE (ub-country-name-numeric-length)),
 *   iso-3166-alpha2-code  PrintableString(SIZE (ub-country-name-alpha-length)) }`
 */
type CountryName = string;
export default CountryName;
