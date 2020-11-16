/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_supportedApplicationContexts */
/**
 * @summary id_mat_supportedApplicationContexts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-supportedApplicationContexts OBJECT IDENTIFIER ::= {id-mat 69}
 * ```
 *
 * @constant
 */
export const id_mat_supportedApplicationContexts: OBJECT_IDENTIFIER = new _OID(
    [69],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_supportedApplicationContexts */

/* eslint-enable */
