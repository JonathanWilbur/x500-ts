/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { intSecurity } from "../UsefulDefinitions/intSecurity.va";
export { intSecurity } from "../UsefulDefinitions/intSecurity.va";

/* START_OF_SYMBOL_DEFINITION id_pkix */
/**
 * @summary id_pkix
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkix                   OBJECT IDENTIFIER ::= { intSecurity mechanisms(5) pkix(7) }
 * ```
 *
 * @constant
 */
export const id_pkix: OBJECT_IDENTIFIER = new _OID(
    [/* mechanisms */ 5, /* pkix */ 7],
    intSecurity
);
/* END_OF_SYMBOL_DEFINITION id_pkix */

/* eslint-enable */
