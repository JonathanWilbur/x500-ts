/**
 * `PartialOutcomeQualifier ::= SET {
 *   limitProblem                  [0]  LimitProblem OPTIONAL,
 *   unexplored                    [1]  SET SIZE (1..MAX) OF ContinuationReference OPTIONAL,
 *   unavailableCriticalExtensions [2]  BOOLEAN DEFAULT FALSE,
 *   unknownErrors                 [3]  SET SIZE (1..MAX) OF ABSTRACT-SYNTAX.&Type OPTIONAL,
 *   queryReference                [4]  OCTET STRING OPTIONAL,
 *   overspecFilter                [5]  Filter OPTIONAL,
 *   notification                  [6]  SEQUENCE SIZE (1..MAX) OF
 *                                        Attribute{{SupportedAttributes}} OPTIONAL,
 *   entryCount                         CHOICE {
 *     bestEstimate                  [7]  INTEGER,
 *     lowEstimate                   [8]  INTEGER,
 *     exact                         [9]  INTEGER,
 *     ...} OPTIONAL
 *   --                            [10] Not to be used -- }`
 */
