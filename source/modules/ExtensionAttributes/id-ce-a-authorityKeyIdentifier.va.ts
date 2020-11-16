/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ce } from "../UsefulDefinitions/id-ce.va";
export { id_ce } from "../UsefulDefinitions/id-ce.va";

/* START_OF_SYMBOL_DEFINITION id_ce_a_authorityKeyIdentifier */
/**
 * @summary id_ce_a_authorityKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-authorityKeyIdentifier             OBJECT IDENTIFIER ::= {id-ce 35 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_authorityKeyIdentifier: OBJECT_IDENTIFIER = new _OID(
    [35, 1],
    id_ce
);
/* END_OF_SYMBOL_DEFINITION id_ce_a_authorityKeyIdentifier */

/* eslint-enable */
