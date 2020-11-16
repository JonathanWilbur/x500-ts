/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_remoteAccessPoint */
/**
 * @summary id_mat_remoteAccessPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-remoteAccessPoint OBJECT IDENTIFIER ::= {id-mat 71}
 * ```
 *
 * @constant
 */
export const id_mat_remoteAccessPoint: OBJECT_IDENTIFIER = new _OID(
    [71],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_remoteAccessPoint */

/* eslint-enable */
