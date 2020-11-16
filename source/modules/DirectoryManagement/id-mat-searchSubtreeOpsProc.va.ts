/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_searchSubtreeOpsProc */
/**
 * @summary id_mat_searchSubtreeOpsProc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-searchSubtreeOpsProc OBJECT IDENTIFIER ::= {id-mat 31}
 * ```
 *
 * @constant
 */
export const id_mat_searchSubtreeOpsProc: OBJECT_IDENTIFIER = new _OID(
    [31],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_searchSubtreeOpsProc */

/* eslint-enable */
