import { DERElement } from "asn1-ts";

/**
 * `FilterItem ::= CHOICE {
 *   equality          [0]  AttributeValueAssertion,
 *   substrings        [1]  SEQUENCE {
 *     type                   ATTRIBUTE.&id({SupportedAttributes}),
 *     strings                SEQUENCE OF CHOICE {
 *       initial           [0]  ATTRIBUTE.&Type
 *                               ({SupportedAttributes}{@substrings.type}),
 *       any               [1]  ATTRIBUTE.&Type
 *                               ({SupportedAttributes}{@substrings.type}),
 *       final             [2]  ATTRIBUTE.&Type
 *                               ({SupportedAttributes}{@substrings.type}),
 *       control                Attribute{{SupportedAttributes}},
 *                     -- Used to specify interpretation of following items
 *       ... },
 *     ... },
 *   greaterOrEqual    [2]  AttributeValueAssertion,
 *   lessOrEqual       [3]  AttributeValueAssertion,
 *   present           [4]  AttributeType,
 *   approximateMatch  [5]  AttributeValueAssertion,
 *   extensibleMatch   [6]  MatchingRuleAssertion,
 *   contextPresent    [7]  AttributeTypeAssertion,
 *   ... }`
 */
type FilterItem = DERElement;
export default FilterItem;
