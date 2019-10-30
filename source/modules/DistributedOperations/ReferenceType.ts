/**
 * `ReferenceType ::= ENUMERATED {
 *   superior               (1),
 *   subordinate            (2),
 *   cross                  (3),
 *   nonSpecificSubordinate (4),
 *   supplier               (5),
 *   master                 (6),
 *   immediateSuperior      (7),
 *   self                   (8),
 *   ditBridge              (9),
 *   ... }`
 */
enum ReferenceType {
    superior                = 1,
    subordinate             = 2,
    cross                   = 3,
    nonSpecificSubordinate  = 4,
    supplier                = 5,
    master                  = 6,
    immediateSuperior       = 7,
    self                    = 8,
    ditBridge               = 9,
}

export default ReferenceType;
