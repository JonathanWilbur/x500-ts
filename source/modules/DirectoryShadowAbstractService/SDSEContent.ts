/**
 * `SDSEContent ::= SEQUENCE {
 *   sDSEType          SDSEType,
 *   subComplete       [0]  BOOLEAN DEFAULT FALSE,
 *   attComplete       [1]  BOOLEAN OPTIONAL,
 *   attributes        SET OF Attribute{{SupportedAttributes}},
 *   attValIncomplete  SET OF AttributeType DEFAULT {},
 *   ...}`
 */
