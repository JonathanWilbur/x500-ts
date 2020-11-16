/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va";
import { ID } from "../UsefulDefinitions/ID.ta";
export { ds } from "../UsefulDefinitions/ds.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION contract */
/**
 * @summary contract
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * contract                                 ID ::= {ds 26}
 * ```
 *
 * @constant
 */
export const contract: ID = new _OID([26], ds);
/* END_OF_SYMBOL_DEFINITION contract */

/* eslint-enable */
