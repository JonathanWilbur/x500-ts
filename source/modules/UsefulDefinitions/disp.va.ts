/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
import { module_ } from "../UsefulDefinitions/module.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { module_ } from "../UsefulDefinitions/module.va";

/* START_OF_SYMBOL_DEFINITION disp */
/**
 * @summary disp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * disp                                     ID ::= {module disp(16) 7}
 * ```
 *
 * @constant
 */
export const disp: ID = new _OID([/* disp */ 16, 7], module_);
/* END_OF_SYMBOL_DEFINITION disp */

/* eslint-enable */
