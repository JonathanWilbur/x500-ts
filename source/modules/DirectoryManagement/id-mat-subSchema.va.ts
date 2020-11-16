/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_subSchema */
/**
 * @summary id_mat_subSchema
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-subSchema OBJECT IDENTIFIER ::= {id-mat 111}
 * ```
 *
 * @constant
 */
export const id_mat_subSchema: OBJECT_IDENTIFIER = new _OID([111], id_mat);
/* END_OF_SYMBOL_DEFINITION id_mat_subSchema */

/* eslint-enable */
