import AttributeMapping from "./AttributeMapping";

/**
 * `AttributeMappings ::= SET OF CHOICE {
 *   typeMappings      [0]  SEQUENCE {
 *     local             [0]  AttributeType,
 *     remote            [1]  AttributeType,
 *     ... },
 *   typeValueMappings [1]  SEQUENCE {
 *     local             [0]  AttributeTypeAndValue,
 *     remote            [1]  AttributeTypeAndValue,
 *     ... } }`
 */
type AttributeMappings = AttributeMapping[];
export default AttributeMappings;
