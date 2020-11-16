/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta";
import { passwordQuality } from "../UsefulDefinitions/passwordQuality.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { passwordQuality } from "../UsefulDefinitions/passwordQuality.va";

/* START_OF_SYMBOL_DEFINITION id_pq */
/**
 * @summary id_pq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pq                                    ID ::= passwordQuality
 * ```
 *
 * @constant
 */
export const id_pq: ID = passwordQuality;
/* END_OF_SYMBOL_DEFINITION id_pq */

/* eslint-enable */
