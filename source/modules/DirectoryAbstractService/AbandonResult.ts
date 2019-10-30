import { BERElement } from "asn1-ts";

/**
 * `AbandonResult ::= CHOICE {
 *   null          NULL,
 *   information   OPTIONALLY-PROTECTED-SEQ { AbandonResultData },
 *   ... }`
 */
type AbandonResult = BERElement;
export default AbandonResult;
