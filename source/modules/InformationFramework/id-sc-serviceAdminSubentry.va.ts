/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_sc } from "../UsefulDefinitions/id-sc.va";
export { id_sc } from "../UsefulDefinitions/id-sc.va";

/* START_OF_SYMBOL_DEFINITION id_sc_serviceAdminSubentry */
/**
 * @summary id_sc_serviceAdminSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sc-serviceAdminSubentry             OBJECT IDENTIFIER ::= {id-sc 4}
 * ```
 *
 * @constant
 */
export const id_sc_serviceAdminSubentry: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_sc
);
/* END_OF_SYMBOL_DEFINITION id_sc_serviceAdminSubentry */

/* eslint-enable */
