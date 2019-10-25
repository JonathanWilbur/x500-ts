import { DERElement } from "asn1-ts";

/**
 * `SenderDhInfo ::= CHOICE {
 *   senderStaticInfo   [0] SenderStaticInfo,
 *   senderDhPublicKey  [1] SenderDhPublicKey,
 *   ... }`
 */
type SenderDhInfo = DERElement;
export default SenderDhInfo;
