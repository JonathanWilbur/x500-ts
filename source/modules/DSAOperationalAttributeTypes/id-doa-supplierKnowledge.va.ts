/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_doa } from "../UsefulDefinitions/id-doa.va";
export { id_doa } from "../UsefulDefinitions/id-doa.va";

/* START_OF_SYMBOL_DEFINITION id_doa_supplierKnowledge */
/**
 * @summary id_doa_supplierKnowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-doa-supplierKnowledge        OBJECT IDENTIFIER ::= {id-doa 5}
 * ```
 *
 * @constant
 */
export const id_doa_supplierKnowledge: OBJECT_IDENTIFIER = new _OID(
    [5],
    id_doa
);
/* END_OF_SYMBOL_DEFINITION id_doa_supplierKnowledge */

/* eslint-enable */
