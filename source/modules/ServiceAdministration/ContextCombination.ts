import { DERElement } from "asn1-ts";

/**
 * `ContextCombination ::= CHOICE {
 *   context  [0]  CONTEXT.&id({SupportedContexts}),
 *   and      [1]  SEQUENCE OF ContextCombination,
 *   or       [2]  SEQUENCE OF ContextCombination,
 *   not      [3]  ContextCombination,
 *   ... }`
 */
type ContextCombination = DERElement;
export default ContextCombination;
