import { DERElement } from "asn1-ts";

/**
 * LocaleContextSyntax ::= CHOICE {
 *   localeID1  OBJECT IDENTIFIER,
 *   localeID2  UnboundedDirectoryString,
 *   ... }
 */
type LocaleContextSyntax = DERElement;
export default LocaleContextSyntax;
