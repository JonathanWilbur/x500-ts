/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_credentials */
/**
 * @summary id_mat_credentials
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-credentials OBJECT IDENTIFIER ::= {id-mat 127}
 * ```
 *
 * @constant
 */
export const id_mat_credentials: OBJECT_IDENTIFIER = new _OID([127], id_mat);
/* END_OF_SYMBOL_DEFINITION id_mat_credentials */

/* eslint-enable */
