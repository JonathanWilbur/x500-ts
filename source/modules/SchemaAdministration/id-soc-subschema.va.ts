/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_soc } from "../UsefulDefinitions/id-soc.va";
export { id_soc } from "../UsefulDefinitions/id-soc.va";

/* START_OF_SYMBOL_DEFINITION id_soc_subschema */
/**
 * @summary id_soc_subschema
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-soc-subschema OBJECT IDENTIFIER ::= {id-soc 1}
 * ```
 *
 * @constant
 */
export const id_soc_subschema: OBJECT_IDENTIFIER = new _OID([1], id_soc);
/* END_OF_SYMBOL_DEFINITION id_soc_subschema */

/* eslint-enable */
