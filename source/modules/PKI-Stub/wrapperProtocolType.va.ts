/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { ds } from "../PKI_Stub/ds.va";
export { ds } from "../PKI_Stub/ds.va";

/* START_OF_SYMBOL_DEFINITION wrapperProtocolType */
/**
 * @summary wrapperProtocolType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * wrapperProtocolType  OBJECT IDENTIFIER ::= {ds 43}
 * ```
 *
 * @constant
 */
export const wrapperProtocolType: OBJECT_IDENTIFIER = new _OID([43], ds);
/* END_OF_SYMBOL_DEFINITION wrapperProtocolType */

/* eslint-enable */
