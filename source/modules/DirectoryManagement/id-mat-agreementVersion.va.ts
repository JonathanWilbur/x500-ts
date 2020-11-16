/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_agreementVersion */
/**
 * @summary id_mat_agreementVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-agreementVersion OBJECT IDENTIFIER ::= {id-mat 89}
 * ```
 *
 * @constant
 */
export const id_mat_agreementVersion: OBJECT_IDENTIFIER = new _OID(
    [89],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_agreementVersion */

/* eslint-enable */
