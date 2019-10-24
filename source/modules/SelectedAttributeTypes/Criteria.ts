import { DERElement } from "asn1-ts";

/**
 * `Criteria ::= CHOICE {
 *   type  [0]  CriteriaItem,
 *   and   [1]  SET OF Criteria,
 *   or    [2]  SET OF Criteria,
 *   not   [3]  Criteria,
 *   ... }`
 */
type Criteria = DERElement;
export default Criteria;
