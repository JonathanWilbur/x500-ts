/**
 * `JoinArgument ::= SEQUENCE {
 *   joinBaseObject  [0]  Name,
 *   domainLocalID   [1]  DomainLocalID OPTIONAL,
 *   joinSubset      [2]  ENUMERATED {
 *     baseObject   (0),
 *     oneLevel     (1),
 *     wholeSubtree (2),
 *     ... } DEFAULT baseObject,
 *   joinFilter      [3]  Filter OPTIONAL,
 *   joinAttributes  [4]  SEQUENCE SIZE (1..MAX) OF JoinAttPair OPTIONAL,
 *   joinSelection   [5]  EntryInformationSelection,
 *   ... }`
 */
