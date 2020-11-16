/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mgt } from "../UsefulDefinitions/id-mgt.va";
export { id_mgt } from "../UsefulDefinitions/id-mgt.va";

/* START_OF_SYMBOL_DEFINITION id_mpa */
/**
 * @summary id_mpa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mpa OBJECT IDENTIFIER ::= {id-mgt 5}
 * ```
 *
 * @constant
 */
export const id_mpa: OBJECT_IDENTIFIER = new _OID([5], id_mgt);
/* END_OF_SYMBOL_DEFINITION id_mpa */

/* eslint-enable */
