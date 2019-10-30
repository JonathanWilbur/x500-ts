import { BERElement } from "asn1-ts";

/**
 * `ModifyDNResult ::= CHOICE {
 *   null         NULL,
 *   information  OPTIONALLY-PROTECTED-SEQ { ModifyDNResultData },
 *   ... }`
 */
type ModifyDNResult = BERElement;
export default ModifyDNResult;
