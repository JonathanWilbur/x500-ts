/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
import { module_ } from "../UsefulDefinitions/module.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { module_ } from "../UsefulDefinitions/module.va";

/* START_OF_SYMBOL_DEFINITION extensionAttributes */
/**
 * @summary extensionAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extensionAttributes                      ID ::= {module extensionAttributes(41) 9}
 * ```
 *
 * @constant
 */
export const extensionAttributes: ID = new _OID(
    [/* extensionAttributes */ 41, 9],
    module_
);
/* END_OF_SYMBOL_DEFINITION extensionAttributes */

/* eslint-enable */
