import { BERElement } from "asn1-ts";

/**
 * `RemoveEntryResult ::= CHOICE {
 *   null          NULL,
 *   information   OPTIONALLY-PROTECTED-SEQ { RemoveEntryResultData },
 *   ... }`
 */
type RemoveEntryResult = BERElement;
export default RemoveEntryResult;
