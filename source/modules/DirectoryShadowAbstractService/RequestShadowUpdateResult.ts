import { ASN1Element } from "asn1-ts";

/**
 * `RequestShadowUpdateResult ::= CHOICE {
 *   null         NULL,
 *   information OPTIONALLY-PROTECTED{ RequestShadowUpdateResultData },
 *   ... }`
 */
type RequestShadowUpdateResult = ASN1Element;
export default RequestShadowUpdateResult;
