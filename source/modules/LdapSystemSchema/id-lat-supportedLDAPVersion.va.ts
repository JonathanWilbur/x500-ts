/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_lat } from "../UsefulDefinitions/id-lat.va";
export { id_lat } from "../UsefulDefinitions/id-lat.va";

/* START_OF_SYMBOL_DEFINITION id_lat_supportedLDAPVersion */
/**
 * @summary id_lat_supportedLDAPVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-lat-supportedLDAPVersion               OBJECT IDENTIFIER ::= {id-lat 15}
 * ```
 *
 * @constant
 */
export const id_lat_supportedLDAPVersion: OBJECT_IDENTIFIER = new _OID(
    [15],
    id_lat
);
/* END_OF_SYMBOL_DEFINITION id_lat_supportedLDAPVersion */

/* eslint-enable */
