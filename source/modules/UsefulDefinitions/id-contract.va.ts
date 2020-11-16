/* eslint-disable */
import { contract } from "../UsefulDefinitions/contract.va";
import { ID } from "../UsefulDefinitions/ID.ta";
export { contract } from "../UsefulDefinitions/contract.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION id_contract */
/**
 * @summary id_contract
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-contract                              ID ::= contract
 * ```
 *
 * @constant
 */
export const id_contract: ID = contract;
/* END_OF_SYMBOL_DEFINITION id_contract */

/* eslint-enable */
