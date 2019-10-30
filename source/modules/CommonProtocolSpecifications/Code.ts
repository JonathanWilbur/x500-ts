import { BERElement } from "asn1-ts";

/**
 * `Code ::= CHOICE {
 *   local   INTEGER,
 *   global  OBJECT IDENTIFIER,
 *   ... }`
 */
type Code = BERElement;
export default Code;
