/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
import { internet } from "../UsefulDefinitions/internet.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { internet } from "../UsefulDefinitions/internet.va";

/* START_OF_SYMBOL_DEFINITION ldap_dir */
/**
 * @summary ldap_dir
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldap-dir            ID ::= {internet directory(1)}
 * ```
 *
 * @constant
 */
export const ldap_dir: ID = new _OID([/* directory */ 1], internet);
/* END_OF_SYMBOL_DEFINITION ldap_dir */

/* eslint-enable */
