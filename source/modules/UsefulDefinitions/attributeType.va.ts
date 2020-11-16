/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va";
import { ID } from "../UsefulDefinitions/ID.ta";
export { ds } from "../UsefulDefinitions/ds.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION attributeType */
/**
 * @summary attributeType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeType                            ID ::= {ds 4}
 * ```
 *
 * @constant
 */
export const attributeType: ID = new _OID([4], ds);
/* END_OF_SYMBOL_DEFINITION attributeType */

/* eslint-enable */
