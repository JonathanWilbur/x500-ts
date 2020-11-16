/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va";
import { ID } from "../UsefulDefinitions/ID.ta";
export { ds } from "../UsefulDefinitions/ds.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION managementObject */
/**
 * @summary managementObject
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * managementObject                         ID ::= {ds 30}
 * ```
 *
 * @constant
 */
export const managementObject: ID = new _OID([30], ds);
/* END_OF_SYMBOL_DEFINITION managementObject */

/* eslint-enable */
