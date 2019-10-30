/**
 * `UpdateProblem ::= INTEGER {
 *   namingViolation                   (1),
 *   objectClassViolation              (2),
 *   notAllowedOnNonLeaf               (3),
 *   notAllowedOnRDN                   (4),
 *   entryAlreadyExists                (5),
 *   affectsMultipleDSAs               (6),
 *   objectClassModificationProhibited (7),
 *   noSuchSuperior                    (8),
 *   notAncestor                       (9),
 *   parentNotAncestor                 (10),
 *   hierarchyRuleViolation            (11),
 *   familyRuleViolation               (12),
 *   insufficientPasswordQuality       (13),
 *   passwordInHistory                 (14),
 *   noPasswordSlot                    (15) }`
 */
enum UpdateProblem {
    namingViolation = 1,
    objectClassViolation = 2,
    notAllowedOnNonLeaf = 3,
    notAllowedOnRDN = 4,
    entryAlreadyExists = 5,
    affectsMultipleDSAs = 6,
    objectClassModificationProhibited = 7,
    noSuchSuperior = 8,
    notAncestor = 9,
    parentNotAncestor = 10,
    hierarchyRuleViolation = 11,
    familyRuleViolation = 12,
    insufficientPasswordQuality = 13,
    passwordInHistory = 14,
    noPasswordSlot = 15,
}

export default UpdateProblem;
