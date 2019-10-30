import { ASN1Element } from "asn1-ts";

/**
 * `InvokeId ::= CHOICE {
 *   present  INTEGER,
 *   absent   NULL,
 *   ... }`
 */
type InvokeId = ASN1Element;
export default InvokeId;
