/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_sizeLimitExceeded */
/**
 * @summary id_mat_sizeLimitExceeded
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-sizeLimitExceeded OBJECT IDENTIFIER ::= {id-mat 20}
 * ```
 *
 * @constant
 */
export const id_mat_sizeLimitExceeded: OBJECT_IDENTIFIER = new _OID(
    [20],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_sizeLimitExceeded */

/* eslint-enable */
