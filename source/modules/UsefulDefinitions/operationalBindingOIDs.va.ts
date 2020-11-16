/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
import { module_ } from "../UsefulDefinitions/module.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { module_ } from "../UsefulDefinitions/module.va";

/* START_OF_SYMBOL_DEFINITION operationalBindingOIDs */
/**
 * @summary operationalBindingOIDs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * operationalBindingOIDs                ID ::= {module 25}
 * ```
 *
 * @constant
 */
export const operationalBindingOIDs: ID = new _OID([25], module_);
/* END_OF_SYMBOL_DEFINITION operationalBindingOIDs */

/* eslint-enable */
