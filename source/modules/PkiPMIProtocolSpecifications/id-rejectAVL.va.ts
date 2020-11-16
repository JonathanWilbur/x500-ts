/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_cmsct } from "../UsefulDefinitions/id-cmsct.va";
export { id_cmsct } from "../UsefulDefinitions/id-cmsct.va";

/* START_OF_SYMBOL_DEFINITION id_rejectAVL */
/**
 * @summary id_rejectAVL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-rejectAVL            OBJECT IDENTIFIER ::= {id-cmsct 10}
 * ```
 *
 * @constant
 */
export const id_rejectAVL: OBJECT_IDENTIFIER = new _OID([10], id_cmsct);
/* END_OF_SYMBOL_DEFINITION id_rejectAVL */

/* eslint-enable */
