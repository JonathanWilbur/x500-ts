import { ASN1Element } from "asn1-ts";

/**
 * `Signer ::= CHOICE {
 *   thisEntry   [0]  EXPLICIT ThisEntry,
 *   thirdParty  [1]  SpecificallyIdentified,
 *   ... }`
 */
type Signer = ASN1Element;
export default Signer;
