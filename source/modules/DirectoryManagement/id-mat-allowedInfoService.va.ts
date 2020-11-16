/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_allowedInfoService */
/**
 * @summary id_mat_allowedInfoService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-allowedInfoService OBJECT IDENTIFIER ::= {id-mat 101}
 * ```
 *
 * @constant
 */
export const id_mat_allowedInfoService: OBJECT_IDENTIFIER = new _OID(
    [101],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_allowedInfoService */

/* eslint-enable */
