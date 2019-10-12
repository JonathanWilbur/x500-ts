/**
 * `CountryName ::= PrintableString(SIZE (2)) (CONSTRAINED BY { -- ISO 3166 alpha-2 codes only -- })`
 */
type CountryName = string;
export default CountryName;
