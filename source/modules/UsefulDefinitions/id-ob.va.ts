/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta";
import { operationalBinding } from "../UsefulDefinitions/operationalBinding.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { operationalBinding } from "../UsefulDefinitions/operationalBinding.va";

/* START_OF_SYMBOL_DEFINITION id_ob */
/**
 * @summary id_ob
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ob                                    ID ::= operationalBinding
 * ```
 *
 * @constant
 */
export const id_ob: ID = operationalBinding;
/* END_OF_SYMBOL_DEFINITION id_ob */

/* eslint-enable */
