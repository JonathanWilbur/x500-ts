/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_requestsFailedCounter */
/**
 * @summary id_mat_requestsFailedCounter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-requestsFailedCounter OBJECT IDENTIFIER ::= {id-mat 86}
 * ```
 *
 * @constant
 */
export const id_mat_requestsFailedCounter: OBJECT_IDENTIFIER = new _OID(
    [86],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_requestsFailedCounter */

/* eslint-enable */
