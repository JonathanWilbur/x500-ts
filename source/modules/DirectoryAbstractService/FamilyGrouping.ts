/**
 * `FamilyGrouping ::= ENUMERATED {
 *   entryOnly     (1),
 *   compoundEntry (2),
 *   strands       (3),
 *   multiStrand   (4),
 *   ... }`
 */
enum FamilyGrouping {
    entryOnly = 1,
    compoundEntry = 2,
    strands = 3,
    multiStrand = 4,
}

export default FamilyGrouping;
