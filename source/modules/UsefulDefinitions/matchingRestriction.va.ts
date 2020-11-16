/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va";
import { ID } from "../UsefulDefinitions/ID.ta";
export { ds } from "../UsefulDefinitions/ds.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION matchingRestriction */
/**
 * @summary matchingRestriction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * matchingRestriction                      ID ::= {ds 36}
 * ```
 *
 * @constant
 */
export const matchingRestriction: ID = new _OID([36], ds);
/* END_OF_SYMBOL_DEFINITION matchingRestriction */

/* eslint-enable */
