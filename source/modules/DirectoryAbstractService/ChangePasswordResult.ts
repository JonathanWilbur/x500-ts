import { BERElement } from "asn1-ts";

/**
 * `ChangePasswordResult ::= CHOICE {
 *   null        NULL,
 *   information OPTIONALLY-PROTECTED-SEQ { ChangePasswordResultData },
 *   ...}`
 */
type ChangePasswordResult = BERElement;
export default ChangePasswordResult;
