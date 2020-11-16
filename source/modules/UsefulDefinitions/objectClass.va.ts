/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va";
import { ID } from "../UsefulDefinitions/ID.ta";
export { ds } from "../UsefulDefinitions/ds.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION objectClass */
/**
 * @summary objectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * objectClass                              ID ::= {ds 6}
 * ```
 *
 * @constant
 */
export const objectClass: ID = new _OID([6], ds);
/* END_OF_SYMBOL_DEFINITION objectClass */

/* eslint-enable */
