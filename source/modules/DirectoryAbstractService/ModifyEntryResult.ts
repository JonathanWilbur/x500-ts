import { BERElement } from "asn1-ts";

/**
 * `ModifyEntryResult ::= CHOICE {
 *   null         NULL,
 *   information  OPTIONALLY-PROTECTED-SEQ { ModifyEntryResultData },
 *   ... }`
 */
type ModifyEntryResult = BERElement;
export default ModifyEntryResult;
