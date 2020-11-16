/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta";
import { ldap_attr } from "../UsefulDefinitions/ldap-attr.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { ldap_attr } from "../UsefulDefinitions/ldap-attr.va";

/* START_OF_SYMBOL_DEFINITION id_lat */
/**
 * @summary id_lat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lat                                   ID ::= ldap-attr
 * ```
 *
 * @constant
 */
export const id_lat: ID = ldap_attr;
/* END_OF_SYMBOL_DEFINITION id_lat */

/* eslint-enable */
