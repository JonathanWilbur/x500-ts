import { ASN1Element } from "asn1-ts";

/**
 * `TBresponse ::= CHOICE {
 *   success [0]  TBOK,
 *   failure [1]  TBerror,
 *   ... }`
 */
type TBresponse = ASN1Element;
export default TBresponse;
