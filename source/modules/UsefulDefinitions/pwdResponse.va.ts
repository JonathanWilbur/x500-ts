/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION pwdResponse */
/**
 * @summary pwdResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdResponse                            ID ::= {id-lc 1}
 * ```
 *
 * @constant
 */
export const pwdResponse: ID = new _OID([1], id_lc);
/* END_OF_SYMBOL_DEFINITION pwdResponse */

/* eslint-enable */
