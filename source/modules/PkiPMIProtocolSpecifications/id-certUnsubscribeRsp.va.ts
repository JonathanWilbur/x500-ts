/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_cmsct } from "../UsefulDefinitions/id-cmsct.va";
export { id_cmsct } from "../UsefulDefinitions/id-cmsct.va";

/* START_OF_SYMBOL_DEFINITION id_certUnsubscribeRsp */
/**
 * @summary id_certUnsubscribeRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-certUnsubscribeRsp   OBJECT IDENTIFIER ::= {id-cmsct 14}
 * ```
 *
 * @constant
 */
export const id_certUnsubscribeRsp: OBJECT_IDENTIFIER = new _OID(
    [14],
    id_cmsct
);
/* END_OF_SYMBOL_DEFINITION id_certUnsubscribeRsp */

/* eslint-enable */
