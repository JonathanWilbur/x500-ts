import { ASN1Element } from "asn1-ts";

/**
 * `Filter ::= CHOICE {
 *   item  [0]  FilterItem,
 *   and   [1]  SET OF Filter,
 *   or    [2]  SET OF Filter,
 *   not   [3]  Filter,
 *   ... }`
 */
type Filter = ASN1Element;
export default Filter;
