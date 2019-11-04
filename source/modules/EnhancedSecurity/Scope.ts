import { ASN1Element } from "asn1-ts";

/**
 * `Scope ::= CHOICE {
 *   wholeEntry     [0]  NULL, -- Signature protects all attribute values in this entry
 *   selectedTypes  [1]  SelectedTypes,
 *       -- Signature protects all attribute values of the selected attribute types
 *   ... }`
 */
type Scope = ASN1Element;
export default Scope;
