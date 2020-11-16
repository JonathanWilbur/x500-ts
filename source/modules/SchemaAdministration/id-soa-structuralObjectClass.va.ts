/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_soa } from "../UsefulDefinitions/id-soa.va";
export { id_soa } from "../UsefulDefinitions/id-soa.va";

/* START_OF_SYMBOL_DEFINITION id_soa_structuralObjectClass */
/**
 * @summary id_soa_structuralObjectClass
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-soa-structuralObjectClass  OBJECT IDENTIFIER ::= {id-soa 9}
 * ```
 *
 * @constant
 */
export const id_soa_structuralObjectClass: OBJECT_IDENTIFIER = new _OID(
    [9],
    id_soa
);
/* END_OF_SYMBOL_DEFINITION id_soa_structuralObjectClass */

/* eslint-enable */
