/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta";
import { ldap_match } from "../UsefulDefinitions/ldap-match.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { ldap_match } from "../UsefulDefinitions/ldap-match.va";

/* START_OF_SYMBOL_DEFINITION id_lmr */
/**
 * @summary id_lmr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lmr                                   ID ::= ldap-match
 * ```
 *
 * @constant
 */
export const id_lmr: ID = ldap_match;
/* END_OF_SYMBOL_DEFINITION id_lmr */

/* eslint-enable */
