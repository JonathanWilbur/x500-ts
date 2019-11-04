import { ASN1Element } from "asn1-ts";

/**
 * `ClassAttributes ::= CHOICE {
 *   allAttributes  NULL,
 *   include        [0]  AttributeTypes,
 *   exclude        [1]  AttributeTypes,
 *   ... }`
 */
type ClassAttributes = ASN1Element;
export default ClassAttributes;
