/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_accessControlScheme */
/**
 * @summary id_mat_accessControlScheme
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-accessControlScheme OBJECT IDENTIFIER ::= {id-mat 119}
 * ```
 *
 * @constant
 */
export const id_mat_accessControlScheme: OBJECT_IDENTIFIER = new _OID(
    [119],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_accessControlScheme */

/* eslint-enable */
