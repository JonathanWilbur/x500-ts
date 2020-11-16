/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
import { ldap_wall } from "../UsefulDefinitions/ldap-wall.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { ldap_wall } from "../UsefulDefinitions/ldap-wall.va";

/* START_OF_SYMBOL_DEFINITION ldap_match */
/**
 * @summary ldap_match
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-match          ID ::= {ldap-wall 109 114}
 * ```
 *
 * @constant
 */
export const ldap_match: ID = new _OID([109, 114], ldap_wall);
/* END_OF_SYMBOL_DEFINITION ldap_match */

/* eslint-enable */
