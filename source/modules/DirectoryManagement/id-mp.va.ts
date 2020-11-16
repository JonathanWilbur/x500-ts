/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_mgt } from "../UsefulDefinitions/id-mgt.va";
export { id_mgt } from "../UsefulDefinitions/id-mgt.va";

/* START_OF_SYMBOL_DEFINITION id_mp */
/**
 * @summary id_mp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp OBJECT IDENTIFIER ::= {id-mgt 4}
 * ```
 *
 * @constant
 */
export const id_mp: OBJECT_IDENTIFIER = new _OID([4], id_mgt);
/* END_OF_SYMBOL_DEFINITION id_mp */

/* eslint-enable */
