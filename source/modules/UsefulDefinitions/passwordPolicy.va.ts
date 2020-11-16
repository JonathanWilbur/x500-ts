/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
import { module_ } from "../UsefulDefinitions/module.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { module_ } from "../UsefulDefinitions/module.va";

/* START_OF_SYMBOL_DEFINITION passwordPolicy */
/**
 * @summary passwordPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * passwordPolicy                           ID ::= {module passwordPolicy(39) 9}
 * ```
 *
 * @constant
 */
export const passwordPolicy: ID = new _OID(
    [/* passwordPolicy */ 39, 9],
    module_
);
/* END_OF_SYMBOL_DEFINITION passwordPolicy */

/* eslint-enable */
