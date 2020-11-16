/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_affectsMultipleDSAs */
/**
 * @summary id_mat_affectsMultipleDSAs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-affectsMultipleDSAs OBJECT IDENTIFIER ::= {id-mat 17}
 * ```
 *
 * @constant
 */
export const id_mat_affectsMultipleDSAs: OBJECT_IDENTIFIER = new _OID(
    [17],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_affectsMultipleDSAs */

/* eslint-enable */
