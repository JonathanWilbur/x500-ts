/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
import { rsadsi } from "../AlgorithmObjectIdentifiers/rsadsi.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";
export { rsadsi } from "../AlgorithmObjectIdentifiers/rsadsi.va";

/* START_OF_SYMBOL_DEFINITION digestAlgorithm */
/**
 * @summary digestAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * digestAlgorithm         ID ::= { rsadsi digestAlgorithm(2) }
 * ```
 *
 * @constant
 */
export const digestAlgorithm: ID = new _OID([/* digestAlgorithm */ 2], rsadsi);
/* END_OF_SYMBOL_DEFINITION digestAlgorithm */

/* eslint-enable */
