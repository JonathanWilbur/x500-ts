/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
import { module_ } from "../UsefulDefinitions/module.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { module_ } from "../UsefulDefinitions/module.va";

/* START_OF_SYMBOL_DEFINITION dop */
/**
 * @summary dop
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dop                                      ID ::= {module dop(17) 7}
 * ```
 *
 * @constant
 */
export const dop: ID = new _OID([/* dop */ 17, 7], module_);
/* END_OF_SYMBOL_DEFINITION dop */

/* eslint-enable */
