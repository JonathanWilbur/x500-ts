/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_oc } from "../UsefulDefinitions/id-oc.va";
export { id_oc } from "../UsefulDefinitions/id-oc.va";

/* START_OF_SYMBOL_DEFINITION id_oc_userSecurityInformation */
/**
 * @summary id_oc_userSecurityInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-oc-userSecurityInformation  OBJECT IDENTIFIER ::= {id-oc 18}
 * ```
 *
 * @constant
 */
export const id_oc_userSecurityInformation: OBJECT_IDENTIFIER = new _OID(
    [18],
    id_oc
);
/* END_OF_SYMBOL_DEFINITION id_oc_userSecurityInformation */

/* eslint-enable */
