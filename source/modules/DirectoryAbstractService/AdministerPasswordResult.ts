import { ASN1Element } from "asn1-ts";

/**
 * `AdministerPasswordResult ::= CHOICE {
 *   null NULL,
 *   information OPTIONALLY-PROTECTED-SEQ { AdministerPasswordResultData },
 *   ...}`
 */
type AdministerPasswordResult = ASN1Element;
export default AdministerPasswordResult;
