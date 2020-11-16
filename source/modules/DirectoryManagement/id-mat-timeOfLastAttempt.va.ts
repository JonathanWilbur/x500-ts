/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_timeOfLastAttempt */
/**
 * @summary id_mat_timeOfLastAttempt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-timeOfLastAttempt OBJECT IDENTIFIER ::= {id-mat 82}
 * ```
 *
 * @constant
 */
export const id_mat_timeOfLastAttempt: OBJECT_IDENTIFIER = new _OID(
    [82],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_timeOfLastAttempt */

/* eslint-enable */
