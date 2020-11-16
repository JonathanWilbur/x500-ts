/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_sc } from "../UsefulDefinitions/id-sc.va";
export { id_sc } from "../UsefulDefinitions/id-sc.va";

/* START_OF_SYMBOL_DEFINITION id_sc_accessControlSubentry */
/**
 * @summary id_sc_accessControlSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sc-accessControlSubentry            OBJECT IDENTIFIER ::= {id-sc 1}
 * ```
 *
 * @constant
 */
export const id_sc_accessControlSubentry: OBJECT_IDENTIFIER = new _OID(
    [1],
    id_sc
);
/* END_OF_SYMBOL_DEFINITION id_sc_accessControlSubentry */

/* eslint-enable */
