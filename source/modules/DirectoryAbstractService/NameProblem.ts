/**
 * `NameProblem ::= INTEGER {
 *   noSuchObject              (1),
 *   aliasProblem              (2),
 *   invalidAttributeSyntax    (3),
 *   aliasDereferencingProblem (4)
 *   -- not to be used         (5)-- }`
 */
enum NameProblem {
    noSuchObject = 1,
    aliasProblem = 2,
    invalidAttributeSyntax = 3,
    aliasDereferencingProblem = 4,
    // not to be used = 5
}

export default NameProblem;
