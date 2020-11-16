/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_cmsct } from "../UsefulDefinitions/id-cmsct.va";
export { id_cmsct } from "../UsefulDefinitions/id-cmsct.va";

/* START_OF_SYMBOL_DEFINITION id_certSubscribeReq */
/**
 * @summary id_certSubscribeReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-certSubscribeReq     OBJECT IDENTIFIER ::= {id-cmsct 11}
 * ```
 *
 * @constant
 */
export const id_certSubscribeReq: OBJECT_IDENTIFIER = new _OID([11], id_cmsct);
/* END_OF_SYMBOL_DEFINITION id_certSubscribeReq */

/* eslint-enable */
