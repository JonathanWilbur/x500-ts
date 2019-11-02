import { ASN1Element } from "asn1-ts";

/**
 * `ContextSelection ::= CHOICE {
 *   allContexts       NULL,
 *   selectedContexts  SET SIZE (1..MAX) OF TypeAndContextAssertion,
 *   ... }`
 */
type ContextSelection = ASN1Element;
export default ContextSelection;
