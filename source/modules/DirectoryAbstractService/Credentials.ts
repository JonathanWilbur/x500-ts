import { BERElement } from "asn1-ts"

/**
 * `Credentials ::= CHOICE {
 *   simple             [0]  SimpleCredentials,
 *   strong             [1]  StrongCredentials,
 *   externalProcedure  [2]  EXTERNAL,
 *   spkm               [3]  SpkmCredentials,
 *   sasl               [4]  SaslCredentials,
 *   ... }`
 */
type Credentials = BERElement;
export default Credentials;
