/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ce } from "../UsefulDefinitions/id-ce.va";
export { id_ce } from "../UsefulDefinitions/id-ce.va";

/* START_OF_SYMBOL_DEFINITION id_ce_certificatePolicies */
/**
 * @summary id_ce_certificatePolicies
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-certificatePolicies                OBJECT IDENTIFIER ::= {id-ce 32}
 * ```
 *
 * @constant
 */
export const id_ce_certificatePolicies: OBJECT_IDENTIFIER = new _OID(
    [32],
    id_ce
);
/* END_OF_SYMBOL_DEFINITION id_ce_certificatePolicies */

/* eslint-enable */
