import { DERElement } from "asn1-ts";

/**
 * `UiiFilter ::= CHOICE {
 *   item  [0]  UiiItem,
 *   and   [1]  SET OF UiiFilter,
 *   or    [2]  SET OF UiiFilter,
 *   not   [3]  UiiFilter }`
 */
type UiiFilter = DERElement;
export default UiiFilter;
