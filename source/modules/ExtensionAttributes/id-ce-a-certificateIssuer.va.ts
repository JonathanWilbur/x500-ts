/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_ce } from "../UsefulDefinitions/id-ce.va";
export { id_ce } from "../UsefulDefinitions/id-ce.va";

/* START_OF_SYMBOL_DEFINITION id_ce_a_certificateIssuer */
/**
 * @summary id_ce_a_certificateIssuer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-certificateIssuer                  OBJECT IDENTIFIER ::= {id-ce 29 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_certificateIssuer: OBJECT_IDENTIFIER = new _OID(
    [29, 1],
    id_ce
);
/* END_OF_SYMBOL_DEFINITION id_ce_a_certificateIssuer */

/* eslint-enable */
