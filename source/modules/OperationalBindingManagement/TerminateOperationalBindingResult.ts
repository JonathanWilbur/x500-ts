import { ASN1Element } from "asn1-ts";

/**
 * `TerminateOperationalBindingResult ::= CHOICE {
 *   null            NULL,
 *   protected  [1]  OPTIONALLY-PROTECTED-SEQ{ TerminateOperationalBindingResultData },
 *   ... }`
 */
type TerminateOperationalBindingResult = ASN1Element;
export default TerminateOperationalBindingResult;
