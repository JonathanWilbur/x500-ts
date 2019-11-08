import { ASN1Element } from "asn1-ts";

/**
 * `RTSE-apdus ::= CHOICE {
 *   rtorq-apdu  [16] IMPLICIT RTORQapdu,
 *   rtoac-apdu  [17] IMPLICIT RTOACapdu,
 *   rtorj-apdu  [18] IMPLICIT RTORJapdu,
 *   rttp-apdu   RTTPapdu,
 *   rttr-apdu   RTTRapdu,
 *   rtab-apdu   [22] IMPLICIT RTABapdu
 * }`
 */
type RTSE_apdus = ASN1Element;
export default RTSE_apdus;
