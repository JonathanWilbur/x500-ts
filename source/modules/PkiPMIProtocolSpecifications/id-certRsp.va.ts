/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_cmsct } from "../UsefulDefinitions/id-cmsct.va";
export { id_cmsct } from "../UsefulDefinitions/id-cmsct.va";

/* START_OF_SYMBOL_DEFINITION id_certRsp */
/**
 * @summary id_certRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-certRsp              OBJECT IDENTIFIER ::= {id-cmsct 1}
 * ```
 *
 * @constant
 */
export const id_certRsp: OBJECT_IDENTIFIER = new _OID([1], id_cmsct);
/* END_OF_SYMBOL_DEFINITION id_certRsp */

/* eslint-enable */
