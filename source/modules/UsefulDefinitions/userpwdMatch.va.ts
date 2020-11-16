/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION userpwdMatch */
/**
 * @summary userpwdMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userpwdMatch                           ID ::= {id-ls 0}
 * ```
 *
 * @constant
 */
export const userpwdMatch: ID = new _OID([0], id_ls);
/* END_OF_SYMBOL_DEFINITION userpwdMatch */

/* eslint-enable */
