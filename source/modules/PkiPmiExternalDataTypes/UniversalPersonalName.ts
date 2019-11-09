/**
 * `UniversalPersonalName ::= SET {
 *   surname
 *     [0]  UniversalOrBMPString{ub-universal-surname-length},
 *   -- If a language is specified within surname, then that language applies to each of the
 *   -- following optional components unless the component specifies another language.
 *   given-name
 *     [1]  UniversalOrBMPString{ub-universal-given-name-length} OPTIONAL,
 *   initials
 *     [2]  UniversalOrBMPString{ub-universal-initials-length} OPTIONAL,
 *   generation-qualifier
 *     [3]  UniversalOrBMPString{ub-universal-generation-qualifier-length} OPTIONAL }`
 */
