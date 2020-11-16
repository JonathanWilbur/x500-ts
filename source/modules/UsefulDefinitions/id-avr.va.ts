/* eslint-disable */
import { avRestriction } from "../UsefulDefinitions/avRestriction.va";
import { ID } from "../UsefulDefinitions/ID.ta";
export { avRestriction } from "../UsefulDefinitions/avRestriction.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION id_avr */
/**
 * @summary id_avr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-avr                                   ID ::= avRestriction
 * ```
 *
 * @constant
 */
export const id_avr: ID = avRestriction;
/* END_OF_SYMBOL_DEFINITION id_avr */

/* eslint-enable */
