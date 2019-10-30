import { BERElement } from "asn1-ts";

/**
 * `AdministerPasswordResult ::= CHOICE {
 *   null NULL,
 *   information OPTIONALLY-PROTECTED-SEQ { AdministerPasswordResultData },
 *   ...}`
 */
type AdministerPasswordResult = BERElement;
export default AdministerPasswordResult;
