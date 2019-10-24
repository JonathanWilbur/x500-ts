/**
 * `SequenceMatchType ::= ENUMERATED {
 *   sequenceExact                  (0),
 *   sequenceDeletion               (1),
 *   sequenceRestrictedDeletion     (2),
 *   sequencePermutation            (3),
 *   sequencePermutationAndDeletion (4),
 *   sequenceProviderDefined        (5),
 *   ... }`
 */
enum SequenceMatchType {
    sequenceExact = 0,
    sequenceDeletion = 1,
    sequenceRestrictedDeletion = 2,
    sequencePermutation = 3,
    sequencePermutationAndDeletion = 4,
    sequenceProviderDefined = 5,
}

export default SequenceMatchType;
