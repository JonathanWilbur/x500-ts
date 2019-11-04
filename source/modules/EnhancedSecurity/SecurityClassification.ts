/**
 * `SecurityClassification ::= INTEGER {
 *   unmarked      (0),
 *   unclassified  (1),
 *   restricted    (2),
 *   confidential  (3),
 *   secret        (4),
 *   top-secret    (5)}`
 */
enum SecurityClassification {
    unmarked      = 0,
    unclassified  = 1,
    restricted    = 2,
    confidential  = 3,
    secret        = 4,
    top_secret    = 5,
}

export default SecurityClassification;
