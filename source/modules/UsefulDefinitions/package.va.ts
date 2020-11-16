/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va";
import { ID } from "../UsefulDefinitions/ID.ta";
export { ds } from "../UsefulDefinitions/ds.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION package_ */
/**
 * @summary package_
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * package                                  ID ::= {ds 27}
 * ```
 *
 * @constant
 */
export const package_: ID = new _OID([27], ds);
/* END_OF_SYMBOL_DEFINITION package_ */

/* eslint-enable */
