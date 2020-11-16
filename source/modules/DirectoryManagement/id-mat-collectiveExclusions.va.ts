/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_collectiveExclusions */
/**
 * @summary id_mat_collectiveExclusions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-collectiveExclusions OBJECT IDENTIFIER ::= {id-mat 123}
 * ```
 *
 * @constant
 */
export const id_mat_collectiveExclusions: OBJECT_IDENTIFIER = new _OID(
    [123],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_collectiveExclusions */

/* eslint-enable */
