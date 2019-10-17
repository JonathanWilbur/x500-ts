import AllowedAttributeAssignment from "./AllowedAttributeAssignment";

/**
 * `AllowedAttributeAssignments ::= SET OF SEQUENCE {
 *   attributes              [0]  SET OF CHOICE {
 *     attributeType           [0]  AttributeType,
 *     attributeTypeandValues  [1]  Attribute{{SupportedAttributes}},
 *     ... },
 *   holderDomain            [1]  GeneralName,
 *   ... }`
 */
type AllowedAttributeAssignments = AllowedAttributeAssignment[];
export default AllowedAttributeAssignments;
