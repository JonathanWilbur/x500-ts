import { BERElement } from "asn1-ts";

/**
 * `DSACredentials  ::=  CHOICE  {
 *   simple             [0]  SimpleCredentials,
 *   strong             [1]  StrongCredentials,
 *   externalProcedure  [2]  EXTERNAL,
 *   spkm               [3]  SpkmCredentials,
 *   ... }`
 */
type DSACredentials = BERElement;
export default DSACredentials;
