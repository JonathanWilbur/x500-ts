import { BERElement } from "asn1-ts";

/**
 * `SpkmCredentials ::= CHOICE {
 *   req            [0]  SPKM-REQ,
 *   rep            [1]  SPKM-REP-TI,
 *   ... }`
 */
type SpkmCredentials = BERElement;
export default SpkmCredentials;
