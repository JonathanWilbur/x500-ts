/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_at } from "../UsefulDefinitions/id-at.va";
export { id_at } from "../UsefulDefinitions/id-at.va";

/* START_OF_SYMBOL_DEFINITION id_at_supportedPublicKeyAlgorithms */
/**
 * @summary id_at_supportedPublicKeyAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-supportedPublicKeyAlgorithms  OBJECT IDENTIFIER ::= {id-at 103}
 * ```
 *
 * @constant
 */
export const id_at_supportedPublicKeyAlgorithms: OBJECT_IDENTIFIER = new _OID(
    [103],
    id_at
);
/* END_OF_SYMBOL_DEFINITION id_at_supportedPublicKeyAlgorithms */

/* eslint-enable */
