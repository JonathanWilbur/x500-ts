/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
import { module_ } from "../UsefulDefinitions/module.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { module_ } from "../UsefulDefinitions/module.va";

/* START_OF_SYMBOL_DEFINITION authenticationFramework */
/**
 * @summary authenticationFramework
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authenticationFramework                  ID ::= {module authenticationFramework(7) 9}
 * ```
 *
 * @constant
 */
export const authenticationFramework: ID = new _OID(
    [/* authenticationFramework */ 7, 9],
    module_
);
/* END_OF_SYMBOL_DEFINITION authenticationFramework */

/* eslint-enable */
