/**
 * `AttributeProblem ::= INTEGER {
 *   noSuchAttributeOrValue        (1),
 *   invalidAttributeSyntax        (2),
 *   undefinedAttributeType        (3),
 *   inappropriateMatching         (4),
 *   constraintViolation           (5),
 *   attributeOrValueAlreadyExists (6),
 *   contextViolation              (7) }`
 */
enum AttributeProblem {
    noSuchAttributeOrValue        = 1,
    invalidAttributeSyntax        = 2,
    undefinedAttributeType        = 3,
    inappropriateMatching         = 4,
    constraintViolation           = 5,
    attributeOrValueAlreadyExists = 6,
    contextViolation              = 7,
}

export default AttributeProblem;
