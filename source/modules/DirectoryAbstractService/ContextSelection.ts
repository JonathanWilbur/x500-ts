import { BERElement } from "asn1-ts";

/**
 * `ContextSelection ::= CHOICE {
 *   allContexts       NULL,
 *   selectedContexts  SET SIZE (1..MAX) OF TypeAndContextAssertion,
 *   ... }`
 */
type ContextSelection = BERElement;
export default ContextSelection;
