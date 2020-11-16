/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_cmsct } from "../UsefulDefinitions/id-cmsct.va";
export { id_cmsct } from "../UsefulDefinitions/id-cmsct.va";

/* START_OF_SYMBOL_DEFINITION id_certUpdateReq */
/**
 * @summary id_certUpdateReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-certUpdateReq        OBJECT IDENTIFIER ::= {id-cmsct 17}
 * ```
 *
 * @constant
 */
export const id_certUpdateReq: OBJECT_IDENTIFIER = new _OID([17], id_cmsct);
/* END_OF_SYMBOL_DEFINITION id_certUpdateReq */

/* eslint-enable */
