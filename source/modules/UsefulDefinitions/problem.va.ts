/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va";
import { ID } from "../UsefulDefinitions/ID.ta";
export { ds } from "../UsefulDefinitions/ds.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION problem */
/**
 * @summary problem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * problem                                  ID ::= {ds 34}
 * ```
 *
 * @constant
 */
export const problem: ID = new _OID([34], ds);
/* END_OF_SYMBOL_DEFINITION problem */

/* eslint-enable */
