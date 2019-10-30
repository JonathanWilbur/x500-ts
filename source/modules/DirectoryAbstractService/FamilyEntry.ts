/**
 * `FamilyEntry ::= SEQUENCE {
 *   rdn            RelativeDistinguishedName,
 *   information    SEQUENCE OF CHOICE {
 *     attributeType  AttributeType,
 *     attribute      Attribute{{SupportedAttributes}},
 *     ...},
 *   family-info    SEQUENCE SIZE (1..MAX) OF FamilyEntries OPTIONAL,
 *   ... }`
 */
