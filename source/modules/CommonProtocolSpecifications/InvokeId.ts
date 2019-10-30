import { BERElement } from "asn1-ts";

/**
 * `InvokeId ::= CHOICE {
 *   present  INTEGER,
 *   absent   NULL,
 *   ... }`
 */
type InvokeId = BERElement;
export default InvokeId;
