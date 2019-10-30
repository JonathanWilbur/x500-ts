/**
 * `EntryInformation ::= SEQUENCE {
 *   name                  Name,
 *   fromEntry             BOOLEAN DEFAULT TRUE,
 *   information           SET SIZE (1..MAX) OF CHOICE {
 *     attributeType         AttributeType,
 *     attribute             Attribute{{SupportedAttributes}},
 *     ...} OPTIONAL,
 *   incompleteEntry  [3]  BOOLEAN DEFAULT FALSE, -- not in first edition systems
 *   partialName      [4]  BOOLEAN DEFAULT FALSE, -- not in first or second edition systems
 *   derivedEntry     [5]  BOOLEAN DEFAULT FALSE, -- not in pre-fourth edition systems --
 *   ... }`
 */
