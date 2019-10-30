/**
 * `AttributeErrorData ::= SET {
 *   object   [0]  Name,
 *   problems [1]  SET OF SEQUENCE {
 *     problem  [0]  AttributeProblem,
 *     type     [1]  AttributeType,
 *     value    [2]  AttributeValue OPTIONAL,
 *     ...},
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResults }`
 */
