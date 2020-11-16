/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va";
import { ID } from "../UsefulDefinitions/ID.ta";
export { ds } from "../UsefulDefinitions/ds.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION passwordQuality */
/**
 * @summary passwordQuality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * passwordQuality                          ID ::= {ds 39}
 * ```
 *
 * @constant
 */
export const passwordQuality: ID = new _OID([39], ds);
/* END_OF_SYMBOL_DEFINITION passwordQuality */

/* eslint-enable */
