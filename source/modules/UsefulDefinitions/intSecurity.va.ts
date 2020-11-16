/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
import { internet } from "../UsefulDefinitions/internet.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { internet } from "../UsefulDefinitions/internet.va";

/* START_OF_SYMBOL_DEFINITION intSecurity */
/**
 * @summary intSecurity
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * intSecurity         ID ::= {internet security(5)}
 * ```
 *
 * @constant
 */
export const intSecurity: ID = new _OID([/* security */ 5], internet);
/* END_OF_SYMBOL_DEFINITION intSecurity */

/* eslint-enable */
