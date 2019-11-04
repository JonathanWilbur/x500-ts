/**
 * `ContentChange ::= SEQUENCE {
 *   rename
 *     CHOICE {newRDN  RelativeDistinguishedName,
 *             newDN   DistinguishedName} OPTIONAL,
 *   attributeChanges
 *     CHOICE {replace  [0]  SET SIZE (1..MAX) OF Attribute{{SupportedAttributes}},
 *             changes  [1]  SEQUENCE SIZE (1..MAX) OF EntryModification} OPTIONAL,
 *   sDSEType          SDSEType,
 *   subComplete       [2]  BOOLEAN DEFAULT FALSE,
 *   attComplete       [3]  BOOLEAN OPTIONAL,
 *   attValIncomplete  SET OF AttributeType DEFAULT {},
 *   ... }`
 */
