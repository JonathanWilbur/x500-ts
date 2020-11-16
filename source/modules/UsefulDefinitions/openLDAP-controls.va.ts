/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
import { ldap_openLDAP } from "../UsefulDefinitions/ldap-openLDAP.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { ldap_openLDAP } from "../UsefulDefinitions/ldap-openLDAP.va";

/* START_OF_SYMBOL_DEFINITION openLDAP_controls */
/**
 * @summary openLDAP_controls
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * openLDAP-controls   ID ::= {ldap-openLDAP controls(10)}
 * ```
 *
 * @constant
 */
export const openLDAP_controls: ID = new _OID(
    [/* controls */ 10],
    ldap_openLDAP
);
/* END_OF_SYMBOL_DEFINITION openLDAP_controls */

/* eslint-enable */
