import { ASN1Element } from "asn1-ts";

/**
 * `AbandonResult ::= CHOICE {
 *   null          NULL,
 *   information   OPTIONALLY-PROTECTED-SEQ { AbandonResultData },
 *   ... }`
 */
type AbandonResult = ASN1Element;
export default AbandonResult;
