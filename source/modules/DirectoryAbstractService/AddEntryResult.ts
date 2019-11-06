import { ASN1Element } from "asn1-ts";

/**
 * `AddEntryResult ::= CHOICE {
 *   null          NULL,
 *   information   OPTIONALLY-PROTECTED-SEQ { AddEntryResultData },
 *   ... }`
 */
type AddEntryResult = ASN1Element;
export default AddEntryResult;
