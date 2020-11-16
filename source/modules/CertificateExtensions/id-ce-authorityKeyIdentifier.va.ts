/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ce } from "../UsefulDefinitions/id-ce.va";
export { id_ce } from "../UsefulDefinitions/id-ce.va";

/* START_OF_SYMBOL_DEFINITION id_ce_authorityKeyIdentifier */
/**
 * @summary id_ce_authorityKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-authorityKeyIdentifier             OBJECT IDENTIFIER ::= {id-ce 35}
 * ```
 *
 * @constant
 */
export const id_ce_authorityKeyIdentifier: OBJECT_IDENTIFIER = new _OID(
    [35],
    id_ce
);
/* END_OF_SYMBOL_DEFINITION id_ce_authorityKeyIdentifier */

/* eslint-enable */
