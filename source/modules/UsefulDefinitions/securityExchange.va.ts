/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va";
import { ID } from "../UsefulDefinitions/ID.ta";
export { ds } from "../UsefulDefinitions/ds.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION securityExchange */
/**
 * @summary securityExchange
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * securityExchange                         ID ::= {ds 32}
 * ```
 *
 * @constant
 */
export const securityExchange: ID = new _OID([32], ds);
/* END_OF_SYMBOL_DEFINITION securityExchange */

/* eslint-enable */
