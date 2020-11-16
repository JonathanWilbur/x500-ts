/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_specificKnowledge */
/**
 * @summary id_mat_specificKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-specificKnowledge OBJECT IDENTIFIER ::= {id-mat 144}
 * ```
 *
 * @constant
 */
export const id_mat_specificKnowledge: OBJECT_IDENTIFIER = new _OID(
    [144],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_specificKnowledge */

/* eslint-enable */
