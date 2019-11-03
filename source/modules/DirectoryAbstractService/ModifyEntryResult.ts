import { ASN1Element } from "asn1-ts";

/**
 * `ModifyEntryResult ::= CHOICE {
 *   null         NULL,
 *   information  OPTIONALLY-PROTECTED-SEQ { ModifyEntryResultData },
 *   ... }`
 */
type ModifyEntryResult = ASN1Element;
export default ModifyEntryResult;
