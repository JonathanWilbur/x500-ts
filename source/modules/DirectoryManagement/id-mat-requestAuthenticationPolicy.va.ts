/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_requestAuthenticationPolicy */
/**
 * @summary id_mat_requestAuthenticationPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-requestAuthenticationPolicy OBJECT IDENTIFIER ::= {id-mat 50}
 * ```
 *
 * @constant
 */
export const id_mat_requestAuthenticationPolicy: OBJECT_IDENTIFIER = new _OID(
    [50],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_requestAuthenticationPolicy */

/* eslint-enable */
