/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
import { ldap_wall } from "../UsefulDefinitions/ldap-wall.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { ldap_wall } from "../UsefulDefinitions/ldap-wall.va";

/* START_OF_SYMBOL_DEFINITION ldap_syntax */
/**
 * @summary ldap_syntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-syntax         ID ::= {ldap-wall 115 121 1}
 * ```
 *
 * @constant
 */
export const ldap_syntax: ID = new _OID([115, 121, 1], ldap_wall);
/* END_OF_SYMBOL_DEFINITION ldap_syntax */

/* eslint-enable */
