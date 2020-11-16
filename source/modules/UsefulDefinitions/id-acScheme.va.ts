/* eslint-disable */
import { accessControlSchemes } from "../UsefulDefinitions/accessControlSchemes.va";
import { ID } from "../UsefulDefinitions/ID.ta";
export { accessControlSchemes } from "../UsefulDefinitions/accessControlSchemes.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION id_acScheme */
/**
 * @summary id_acScheme
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-acScheme                              ID ::= accessControlSchemes
 * ```
 *
 * @constant
 */
export const id_acScheme: ID = accessControlSchemes;
/* END_OF_SYMBOL_DEFINITION id_acScheme */

/* eslint-enable */
