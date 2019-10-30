/**
 * `MatchingRuleAssertion ::= SEQUENCE {
 *   matchingRule  [1]  SET SIZE (1..MAX) OF MATCHING-RULE.&id,
 *   type          [2]  AttributeType OPTIONAL,
 *   matchValue    [3]  MATCHING-RULE.&AssertionType (CONSTRAINED BY {
 *     -- matchValue shall be a value of  type specified by the &AssertionType field of
 *     -- one of the MATCHING-RULE information objects identified by matchingRule -- }),
 *   dnAttributes  [4]  BOOLEAN DEFAULT FALSE,
 *   ... }`
 */
