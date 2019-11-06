/**
 * Note that this has no real specification in this module. This was created
 * only for convenience.
 *
 * `KnowledgeType ::= ENUMERATED {
 *     master (0),
 *     shadow (1),
 *     both   (2)}`
 */
enum KnowledgeType {
    master = 0,
    shadow = 1,
    both = 2,
}

export default KnowledgeType;
