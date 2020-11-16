/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
import { module_ } from "../UsefulDefinitions/module.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { module_ } from "../UsefulDefinitions/module.va";

/* START_OF_SYMBOL_DEFINITION ldapSystemSchema */
/**
 * @summary ldapSystemSchema
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldapSystemSchema                         ID ::= {module ldapSystemSchema(38) 9}
 * ```
 *
 * @constant
 */
export const ldapSystemSchema: ID = new _OID(
    [/* ldapSystemSchema */ 38, 9],
    module_
);
/* END_OF_SYMBOL_DEFINITION ldapSystemSchema */

/* eslint-enable */
