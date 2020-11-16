/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mgt } from "../UsefulDefinitions/id-mgt.va";
export { id_mgt } from "../UsefulDefinitions/id-mgt.va";

/* START_OF_SYMBOL_DEFINITION id_mac */
/**
 * @summary id_mac
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mac OBJECT IDENTIFIER ::= {id-mgt 0}
 * ```
 *
 * @constant
 */
export const id_mac: OBJECT_IDENTIFIER = new _OID([0], id_mgt);
/* END_OF_SYMBOL_DEFINITION id_mac */

/* eslint-enable */
