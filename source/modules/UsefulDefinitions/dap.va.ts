/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
import { module_ } from "../UsefulDefinitions/module.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { module_ } from "../UsefulDefinitions/module.va";

/* START_OF_SYMBOL_DEFINITION dap */
/**
 * @summary dap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dap                                      ID ::= {module dap(11) 9}
 * ```
 *
 * @constant
 */
export const dap: ID = new _OID([/* dap */ 11, 9], module_);
/* END_OF_SYMBOL_DEFINITION dap */

/* eslint-enable */
