/**
 * `ModifyRights ::= SET OF SEQUENCE {
 *   item      CHOICE {
 *     entry      [0]  NULL,
 *     attribute  [1]  AttributeType,
 *     value      [2]  AttributeValueAssertion,
 *     ...},
 *   permission   [3]  BIT STRING {
 *     add     (0),
 *     remove  (1),
 *     rename  (2),
 *     move    (3)},
 *   ... }`
 */
