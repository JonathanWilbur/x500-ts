import { DERElement } from "asn1-ts";

/**
 * `AttributeCombination ::= CHOICE {
 *   attribute  [0]  AttributeType,
 *   and        [1]  SEQUENCE OF AttributeCombination,
 *   or         [2]  SEQUENCE OF AttributeCombination,
 *   not        [3]  AttributeCombination,
 *   ... }`
 */
type AttributeCombination = DERElement;
export default AttributeCombination;
