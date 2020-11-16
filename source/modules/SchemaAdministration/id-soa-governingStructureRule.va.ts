/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_soa } from "../UsefulDefinitions/id-soa.va";
export { id_soa } from "../UsefulDefinitions/id-soa.va";

/* START_OF_SYMBOL_DEFINITION id_soa_governingStructureRule */
/**
 * @summary id_soa_governingStructureRule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-soa-governingStructureRule OBJECT IDENTIFIER ::= {id-soa 10}
 * ```
 *
 * @constant
 */
export const id_soa_governingStructureRule: OBJECT_IDENTIFIER = new _OID(
    [10],
    id_soa
);
/* END_OF_SYMBOL_DEFINITION id_soa_governingStructureRule */

/* eslint-enable */
