/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va";
import { ID } from "../UsefulDefinitions/ID.ta";
export { ds } from "../UsefulDefinitions/ds.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION attributeSet */
/**
 * @summary attributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeSet                             ID ::= {ds 7}
 * ```
 *
 * @constant
 */
export const attributeSet: ID = new _OID([7], ds);
/* END_OF_SYMBOL_DEFINITION attributeSet */

/* eslint-enable */
