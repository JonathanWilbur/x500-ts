/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_createTimestamp */
/**
 * @summary id_mat_createTimestamp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-createTimestamp OBJECT IDENTIFIER ::= {id-mat 125}
 * ```
 *
 * @constant
 */
export const id_mat_createTimestamp: OBJECT_IDENTIFIER = new _OID(
    [125],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_createTimestamp */

/* eslint-enable */
