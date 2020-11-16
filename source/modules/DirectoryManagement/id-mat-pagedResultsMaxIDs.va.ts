/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_pagedResultsMaxIDs */
/**
 * @summary id_mat_pagedResultsMaxIDs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-pagedResultsMaxIDs OBJECT IDENTIFIER ::= {id-mat 64}
 * ```
 *
 * @constant
 */
export const id_mat_pagedResultsMaxIDs: OBJECT_IDENTIFIER = new _OID(
    [64],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_pagedResultsMaxIDs */

/* eslint-enable */
