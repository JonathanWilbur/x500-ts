/**
 * `CountryCode3c ::= PrintableString(SIZE (3)) (CONSTRAINED BY { -- ISO 3166 alpha-3 codes only -- })`
 */
type CountryCode3c = string;
export default CountryCode3c;
