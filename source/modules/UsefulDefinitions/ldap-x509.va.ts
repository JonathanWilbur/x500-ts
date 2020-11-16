/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
import { ldap_dir } from "../UsefulDefinitions/ldap-dir.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { ldap_dir } from "../UsefulDefinitions/ldap-dir.va";

/* START_OF_SYMBOL_DEFINITION ldap_x509 */
/**
 * @summary ldap_x509
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-x509           ID ::= {ldap-dir x509(15)}
 * ```
 *
 * @constant
 */
export const ldap_x509: ID = new _OID([/* x509 */ 15], ldap_dir);
/* END_OF_SYMBOL_DEFINITION ldap_x509 */

/* eslint-enable */
