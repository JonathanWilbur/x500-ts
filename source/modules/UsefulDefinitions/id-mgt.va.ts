/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta";
import { managementObject } from "../UsefulDefinitions/managementObject.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { managementObject } from "../UsefulDefinitions/managementObject.va";

/* START_OF_SYMBOL_DEFINITION id_mgt */
/**
 * @summary id_mgt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mgt                                   ID ::= managementObject
 * ```
 *
 * @constant
 */
export const id_mgt: ID = managementObject;
/* END_OF_SYMBOL_DEFINITION id_mgt */

/* eslint-enable */
