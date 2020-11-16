/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va";
import { ID } from "../UsefulDefinitions/ID.ta";
export { ds } from "../UsefulDefinitions/ds.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION object */
/**
 * @summary object
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * object                                   ID ::= {ds 10}
 * ```
 *
 * @constant
 */
export const object: ID = new _OID([10], ds);
/* END_OF_SYMBOL_DEFINITION object */

/* eslint-enable */
