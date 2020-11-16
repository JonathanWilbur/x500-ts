/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mgt } from "../UsefulDefinitions/id-mgt.va";
export { id_mgt } from "../UsefulDefinitions/id-mgt.va";

/* START_OF_SYMBOL_DEFINITION id_moc */
/**
 * @summary id_moc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc OBJECT IDENTIFIER ::= {id-mgt 2}
 * ```
 *
 * @constant
 */
export const id_moc: OBJECT_IDENTIFIER = new _OID([2], id_mgt);
/* END_OF_SYMBOL_DEFINITION id_moc */

/* eslint-enable */
