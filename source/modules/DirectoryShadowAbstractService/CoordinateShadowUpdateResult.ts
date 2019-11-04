import { ASN1Element } from "asn1-ts";

/**
 * `CoordinateShadowUpdateResult ::= CHOICE {
 *   null         NULL,
 *   information  OPTIONALLY-PROTECTED{ CoordinateShadowUpdateResultData },
 *   ...}`
 */
type CoordinateShadowUpdateResult = ASN1Element;
export default CoordinateShadowUpdateResult;
