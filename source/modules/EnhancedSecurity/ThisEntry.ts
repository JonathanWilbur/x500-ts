import { ASN1Element } from "asn1-ts";

/**
 * `ThisEntry ::= CHOICE {
 *   onlyOne   NULL,
 *   specific  IssuerAndSerialNumber,
 *   ... }`
 */
type ThisEntry = ASN1Element;
export default ThisEntry;
