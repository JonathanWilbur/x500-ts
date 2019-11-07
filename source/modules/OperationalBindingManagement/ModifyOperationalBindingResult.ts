import { ASN1Element } from "asn1-ts";

/**
 * `ModifyOperationalBindingResult ::= CHOICE {
 *   null            NULL,
 *   protected  [1]  OPTIONALLY-PROTECTED-SEQ{ ModifyOperationalBindingResultData },
 *   ... }`
 */
type ModifyOperationalBindingResult = ASN1Element;
export default ModifyOperationalBindingResult;
