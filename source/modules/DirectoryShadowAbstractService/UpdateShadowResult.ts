import { ASN1Element } from "asn1-ts";

/**
 * `UpdateShadowResult ::= CHOICE {
 *   null         NULL,
 *   information OPTIONALLY-PROTECTED{ UpdateShadowResultData },
 *   ...}`
 */
type UpdateShadowResult = ASN1Element;
export default UpdateShadowResult;
