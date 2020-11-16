/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_administrativeRole */
/**
 * @summary id_mat_administrativeRole
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-administrativeRole OBJECT IDENTIFIER ::= {id-mat 120}
 * ```
 *
 * @constant
 */
export const id_mat_administrativeRole: OBJECT_IDENTIFIER = new _OID(
    [120],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_administrativeRole */

/* eslint-enable */
