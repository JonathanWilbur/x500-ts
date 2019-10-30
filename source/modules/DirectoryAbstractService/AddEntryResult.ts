import { BERElement } from "asn1-ts";

/**
 * `AddEntryResult ::= CHOICE {
 *   null          NULL,
 *   information   OPTIONALLY-PROTECTED-SEQ { AddEntryResultData },
 *   ... }`
 */
type AddEntryResult = BERElement;
export default AddEntryResult;
