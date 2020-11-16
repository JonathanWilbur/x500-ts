/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va";
import { ID } from "../UsefulDefinitions/ID.ta";
export { ds } from "../UsefulDefinitions/ds.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION administrativeRoles */
/**
 * @summary administrativeRoles
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * administrativeRoles                      ID ::= {ds 23}
 * ```
 *
 * @constant
 */
export const administrativeRoles: ID = new _OID([23], ds);
/* END_OF_SYMBOL_DEFINITION administrativeRoles */

/* eslint-enable */
