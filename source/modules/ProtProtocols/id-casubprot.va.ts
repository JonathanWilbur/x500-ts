/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_wrprot } from "../PKI_Stub/id-wrprot.va";
export { id_wrprot } from "../PKI_Stub/id-wrprot.va";

/* START_OF_SYMBOL_DEFINITION id_casubprot */
/**
 * @summary id_casubprot
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-casubprot        OBJECT IDENTIFIER ::= {id-wrprot 1}
 * ```
 *
 * @constant
 */
export const id_casubprot: OBJECT_IDENTIFIER = new _OID([1], id_wrprot);
/* END_OF_SYMBOL_DEFINITION id_casubprot */

/* eslint-enable */
