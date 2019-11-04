import { ASN1Element } from "asn1-ts";

/**
 * `RefreshInformation ::= CHOICE {
 *   noRefresh      NULL,
 *   total          [0]  TotalRefresh,
 *   incremental    [1]  IncrementalRefresh,
 *   otherStrategy       EXTERNAL,
 *   ...}`
 */
type RefreshInformation = ASN1Element;
export default RefreshInformation;
