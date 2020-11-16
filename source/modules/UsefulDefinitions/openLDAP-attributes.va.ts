/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
import { ldap_openLDAP } from "../UsefulDefinitions/ldap-openLDAP.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { ldap_openLDAP } from "../UsefulDefinitions/ldap-openLDAP.va";

/* START_OF_SYMBOL_DEFINITION openLDAP_attributes */
/**
 * @summary openLDAP_attributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * openLDAP-attributes ID ::= {ldap-openLDAP attributeType(3)}
 * ```
 *
 * @constant
 */
export const openLDAP_attributes: ID = new _OID(
    [/* attributeType */ 3],
    ldap_openLDAP
);
/* END_OF_SYMBOL_DEFINITION openLDAP_attributes */

/* eslint-enable */
