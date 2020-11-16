/* eslint-disable */
import { joint_iso_itu_t, ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION ds */
/**
 * @summary ds
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ds ID ::= {joint-iso-itu-t ds(5)}
 * ```
 *
 * @constant
 */
export const ds: ID = new _OID([/* ds */ 5], joint_iso_itu_t);
/* END_OF_SYMBOL_DEFINITION ds */

/* eslint-enable */
