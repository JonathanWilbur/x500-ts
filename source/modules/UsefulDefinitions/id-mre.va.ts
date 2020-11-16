/* eslint-disable */
import { ID } from "../UsefulDefinitions/ID.ta";
import { matchingRestriction } from "../UsefulDefinitions/matchingRestriction.va";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";
export { matchingRestriction } from "../UsefulDefinitions/matchingRestriction.va";

/* START_OF_SYMBOL_DEFINITION id_mre */
/**
 * @summary id_mre
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mre                                   ID ::= matchingRestriction
 * ```
 *
 * @constant
 */
export const id_mre: ID = matchingRestriction;
/* END_OF_SYMBOL_DEFINITION id_mre */

/* eslint-enable */
