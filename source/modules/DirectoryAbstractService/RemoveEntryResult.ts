import { ASN1Element } from "asn1-ts";

/**
 * `RemoveEntryResult ::= CHOICE {
 *   null          NULL,
 *   information   OPTIONALLY-PROTECTED-SEQ { RemoveEntryResultData },
 *   ... }`
 */
type RemoveEntryResult = ASN1Element;
export default RemoveEntryResult;
