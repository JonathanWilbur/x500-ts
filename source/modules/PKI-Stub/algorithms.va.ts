/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ds } from "../PKI-Stub/ds.va";
export { ds } from "../PKI-Stub/ds.va";

/* START_OF_SYMBOL_DEFINITION algorithms */
/**
 * @summary algorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * algorithms           OBJECT IDENTIFIER ::= {ds 44}
 * ```
 *
 * @constant
 */
export const algorithms: OBJECT_IDENTIFIER = new _OID([44], ds);
/* END_OF_SYMBOL_DEFINITION algorithms */

/* eslint-enable */
