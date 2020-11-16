/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
import { module_ } from "../UsefulDefinitions/module.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { module_ } from "../UsefulDefinitions/module.va";

/* START_OF_SYMBOL_DEFINITION distributedOperations */
/**
 * @summary distributedOperations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * distributedOperations                    ID ::= {module distributedOperations(3) 9}
 * ```
 *
 * @constant
 */
export const distributedOperations: ID = new _OID(
    [/* distributedOperations */ 3, 9],
    module_
);
/* END_OF_SYMBOL_DEFINITION distributedOperations */

/* eslint-enable */
