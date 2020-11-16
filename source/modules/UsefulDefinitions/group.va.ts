/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va";
import { ID } from "../UsefulDefinitions/ID.ta";
export { ds } from "../UsefulDefinitions/ds.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION group */
/**
 * @summary group
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * group                                    ID ::= {ds 16}
 * ```
 *
 * @constant
 */
export const group: ID = new _OID([16], ds);
/* END_OF_SYMBOL_DEFINITION group */

/* eslint-enable */
