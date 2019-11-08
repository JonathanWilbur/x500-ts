import { ASN1Element } from "asn1-ts";

/**
 * `SubSchemaSyntax ::=
 *   SEQUENCE OF
 *     SEQUENCE {name       [1]  Name, --  Name of the subschema subentry for the subschema
 *               subSchema
 *                 [2]  SEQUENCE {structureRules
 *                                  [1]  SEQUENCE OF DITStructureRuleDescription
 *                                    OPTIONAL,
 *                                contentRules
 *                                  [2]  SEQUENCE OF DITContentRuleDescription
 *                                    OPTIONAL,
 *                                matchingRules
 *                                  [3]  SEQUENCE OF MatchingRuleDescription
 *                                    OPTIONAL,
 *                                attributeTypes
 *                                  [4]  SEQUENCE OF AttributeTypeDescription
 *                                    OPTIONAL,
 *                                objectClasses
 *                                  [5]  SEQUENCE OF ObjectClassDescription
 *                                    OPTIONAL,
 *                                nameForms
 *                                  [6]  SEQUENCE OF NameFormDescription OPTIONAL,
 *                                matchRuleUses
 *                                  [7]  SEQUENCE OF MatchingRuleUseDescription
 *                                    OPTIONAL}}`
 */
type SubSchemaSyntax = ASN1Element[];
export default SubSchemaSyntax;
