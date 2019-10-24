/**
 * CharacterMatchTypes ::= ENUMERATED {
 *   characterExact      (0),
 *   characterCaseIgnore (1),
 *   characterMapped     (2),
 *   ... }
 */
enum CharacterMatchTypes {
    characterExact      = 0,
    characterCaseIgnore = 1,
    characterMapped     = 2,
}

export default CharacterMatchTypes;
