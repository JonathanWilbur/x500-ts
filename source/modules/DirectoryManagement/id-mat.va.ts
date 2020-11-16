/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mgt } from "../UsefulDefinitions/id-mgt.va";
export { id_mgt } from "../UsefulDefinitions/id-mgt.va";

/* START_OF_SYMBOL_DEFINITION id_mat */
/**
 * @summary id_mat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat OBJECT IDENTIFIER ::= {id-mgt 1}
 * ```
 *
 * @constant
 */
export const id_mat: OBJECT_IDENTIFIER = new _OID([1], id_mgt);
/* END_OF_SYMBOL_DEFINITION id_mat */

/* eslint-enable */
