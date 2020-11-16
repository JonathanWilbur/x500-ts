/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION userPwdHisoricMatch */
/**
 * @summary userPwdHisoricMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * userPwdHisoricMatch                    ID ::= {id-ls 1}
 * ```
 *
 * @constant
 */
export const userPwdHisoricMatch: ID = new _OID([1], id_ls);
/* END_OF_SYMBOL_DEFINITION userPwdHisoricMatch */

/* eslint-enable */
