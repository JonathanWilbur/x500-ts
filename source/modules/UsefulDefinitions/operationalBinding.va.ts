/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ds } from "../UsefulDefinitions/ds.va";
import { ID } from "../UsefulDefinitions/ID.ta";
export { ds } from "../UsefulDefinitions/ds.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION operationalBinding */
/**
 * @summary operationalBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * operationalBinding                       ID ::= {ds 19}
 * ```
 *
 * @constant
 */
export const operationalBinding: ID = new _OID([19], ds);
/* END_OF_SYMBOL_DEFINITION operationalBinding */

/* eslint-enable */
