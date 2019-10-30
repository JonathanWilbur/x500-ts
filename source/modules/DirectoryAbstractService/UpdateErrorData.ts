/**
 * `UpdateErrorData ::= SET {
 *   problem        [0]  UpdateProblem,
 *   attributeInfo  [1]  SET SIZE (1..MAX) OF CHOICE {
 *     attributeType       AttributeType,
 *     attribute           Attribute{{SupportedAttributes}},
 *     ... } OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF       CommonResults }`
 */
