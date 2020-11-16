/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
import { module_ } from "../UsefulDefinitions/module.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { module_ } from "../UsefulDefinitions/module.va";

/* START_OF_SYMBOL_DEFINITION opBindingOIDs */
/**
 * @summary opBindingOIDs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * opBindingOIDs                            ID ::= {module opBindingOIDs(19) 9}
 * ```
 *
 * @constant
 */
export const opBindingOIDs: ID = new _OID([/* opBindingOIDs */ 19, 9], module_);
/* END_OF_SYMBOL_DEFINITION opBindingOIDs */

/* eslint-enable */
