import { ASN1Element } from "asn1-ts";

/**
 * `Code ::= CHOICE {
 *   local   INTEGER,
 *   global  OBJECT IDENTIFIER,
 *   ... }`
 */
type Code = ASN1Element;
export default Code;
