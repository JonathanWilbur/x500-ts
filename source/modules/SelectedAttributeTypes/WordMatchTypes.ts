/**
 * `WordMatchTypes ::= ENUMERATED {
 *   wordExact           (0),
 *   wordTruncated       (1),
 *   wordPhonetic        (2),
 *   wordProviderDefined (3),
 *   ... }`
 */
enum WordMatchTypes {
    wordExact = 0,
    wordTruncated = 1,
    wordPhonetic = 2,
    wordProviderDefined = 3,
}

export default WordMatchTypes;
