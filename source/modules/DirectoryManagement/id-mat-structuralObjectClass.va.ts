/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_structuralObjectClass */
/**
 * @summary id_mat_structuralObjectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-structuralObjectClass OBJECT IDENTIFIER ::= {id-mat 145}
 * ```
 *
 * @constant
 */
export const id_mat_structuralObjectClass: OBJECT_IDENTIFIER = new _OID(
    [145],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_structuralObjectClass */

/* eslint-enable */
