/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_cmsct } from "../UsefulDefinitions/id-cmsct.va";
export { id_cmsct } from "../UsefulDefinitions/id-cmsct.va";

/* START_OF_SYMBOL_DEFINITION id_certReq */
/**
 * @summary id_certReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-certReq              OBJECT IDENTIFIER ::= {id-cmsct 0}
 * ```
 *
 * @constant
 */
export const id_certReq: OBJECT_IDENTIFIER = new _OID([0], id_cmsct);
/* END_OF_SYMBOL_DEFINITION id_certReq */

/* eslint-enable */
