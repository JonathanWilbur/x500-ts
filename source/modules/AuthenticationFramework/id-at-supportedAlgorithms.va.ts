/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_at } from "../UsefulDefinitions/id-at.va";
export { id_at } from "../UsefulDefinitions/id-at.va";

/* START_OF_SYMBOL_DEFINITION id_at_supportedAlgorithms */
/**
 * @summary id_at_supportedAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-supportedAlgorithms           OBJECT IDENTIFIER ::= {id-at 52}
 * ```
 *
 * @constant
 */
export const id_at_supportedAlgorithms: OBJECT_IDENTIFIER = new _OID(
    [52],
    id_at
);
/* END_OF_SYMBOL_DEFINITION id_at_supportedAlgorithms */

/* eslint-enable */
