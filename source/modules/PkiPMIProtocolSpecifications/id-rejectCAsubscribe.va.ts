/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_cmsct } from "../UsefulDefinitions/id-cmsct.va";
export { id_cmsct } from "../UsefulDefinitions/id-cmsct.va";

/* START_OF_SYMBOL_DEFINITION id_rejectCAsubscribe */
/**
 * @summary id_rejectCAsubscribe
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-rejectCAsubscribe    OBJECT IDENTIFIER ::= {id-cmsct 19}
 * ```
 *
 * @constant
 */
export const id_rejectCAsubscribe: OBJECT_IDENTIFIER = new _OID([19], id_cmsct);
/* END_OF_SYMBOL_DEFINITION id_rejectCAsubscribe */

/* eslint-enable */
