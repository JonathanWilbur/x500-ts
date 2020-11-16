/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mat } from "../DirectoryManagement/id-mat.va";
export { id_mat } from "../DirectoryManagement/id-mat.va";

/* START_OF_SYMBOL_DEFINITION id_mat_matchingRuleUse */
/**
 * @summary id_mat_matchingRuleUse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat-matchingRuleUse OBJECT IDENTIFIER ::= {id-mat 135}
 * ```
 *
 * @constant
 */
export const id_mat_matchingRuleUse: OBJECT_IDENTIFIER = new _OID(
    [135],
    id_mat
);
/* END_OF_SYMBOL_DEFINITION id_mat_matchingRuleUse */

/* eslint-enable */
