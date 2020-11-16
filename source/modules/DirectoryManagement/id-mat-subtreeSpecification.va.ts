/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_subtreeSpecification */
/**
 * @summary id_mat_subtreeSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-subtreeSpecification OBJECT IDENTIFIER ::= {id-mat 147}
 * ```
 *
 * @constant
 */
export const id_mat_subtreeSpecification: OBJECT_IDENTIFIER = new _OID(
    [147],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_subtreeSpecification */

/* eslint-enable */
