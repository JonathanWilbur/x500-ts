/**
 * `ChainingResults ::= SET {
 *   info                [0]  DomainInfo OPTIONAL,
 *   crossReferences     [1]  SEQUENCE SIZE (1..MAX) OF CrossReference OPTIONAL,
 *   securityParameters  [2]  SecurityParameters DEFAULT {},
 *   alreadySearched     [3]  Exclusions OPTIONAL,
 *   ... }`
 */
