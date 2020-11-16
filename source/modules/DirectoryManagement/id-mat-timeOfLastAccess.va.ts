/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_timeOfLastAccess */
/**
 * @summary id_mat_timeOfLastAccess
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-timeOfLastAccess OBJECT IDENTIFIER ::= {id-mat 87}
 * ```
 *
 * @constant
 */
export const id_mat_timeOfLastAccess: OBJECT_IDENTIFIER = new _OID(
    [87],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_timeOfLastAccess */

/* eslint-enable */
