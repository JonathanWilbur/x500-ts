/**
 * `IncrementalStepRefresh ::= SEQUENCE {
 *   sDSEChanges
 *     CHOICE {add     [0]  SDSEContent,
 *             remove  NULL,
 *             modify  [1]  ContentChange,
 *             ...} OPTIONAL,
 *   subordinateUpdates  SEQUENCE SIZE (1..MAX) OF SubordinateChanges OPTIONAL }`
 */
