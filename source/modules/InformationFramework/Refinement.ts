import { DERElement } from "asn1-ts";

/**
 * `Refinement ::= CHOICE {
 *   item  [0]  OBJECT-CLASS.&id,
 *   and   [1]  SET SIZE (1..MAX) OF Refinement,
 *   or    [2]  SET SIZE (1..MAX) OF Refinement,
 *   not   [3]  Refinement,
 *   ... }`
 */
type Refinement = DERElement;
export default Refinement;
