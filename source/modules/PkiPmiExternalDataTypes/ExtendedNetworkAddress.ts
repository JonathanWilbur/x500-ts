import { ASN1Element } from "asn1-ts";

/**
 * `ExtendedNetworkAddress ::= CHOICE {
 *   e163-4-address    SEQUENCE {
 *     number       [0]  NumericString(SIZE (1..ub-e163-4-number-length)),
 *     sub-address  [1]  NumericString(SIZE (1..ub-e163-4-sub-address-length))
 *                   OPTIONAL},
 *   psap-address [0]  PresentationAddress }`
 */
type ExtendedNetworkAddress = ASN1Element;
export default ExtendedNetworkAddress;
