/**
 * `PwdResponseValue ::= SEQUENCE {
 *   warning CHOICE {
 *     timeLeft        [0]  INTEGER (0..MAX),
 *     graceRemaining  [1]  INTEGER (0..MAX),
 *     ... } OPTIONAL,
 *   error   ENUMERATED {
 *     passwordExpired  (0),
 *     changeAfterReset (1),
 *     ... } OPTIONAL}`
 */
