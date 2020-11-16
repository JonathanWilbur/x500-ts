/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
import { ldap_wall } from "../UsefulDefinitions/ldap-wall.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { ldap_wall } from "../UsefulDefinitions/ldap-wall.va";

/* START_OF_SYMBOL_DEFINITION ldap_dynExt */
/**
 * @summary ldap_dynExt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-dynExt         ID ::= {ldap-wall 101 119}
 * ```
 *
 * @constant
 */
export const ldap_dynExt: ID = new _OID([101, 119], ldap_wall);
/* END_OF_SYMBOL_DEFINITION ldap_dynExt */

/* eslint-enable */
