/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_maxEntriesReturned */
/**
 * @summary id_mat_maxEntriesReturned
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-maxEntriesReturned OBJECT IDENTIFIER ::= {id-mat 106}
 * ```
 *
 * @constant
 */
export const id_mat_maxEntriesReturned: OBJECT_IDENTIFIER = new _OID(
    [106],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_maxEntriesReturned */

/* eslint-enable */
