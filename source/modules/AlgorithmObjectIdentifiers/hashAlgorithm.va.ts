/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
import { algorithm } from "../UsefulDefinitions/algorithm.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";
export { algorithm } from "../UsefulDefinitions/algorithm.va";

/* START_OF_SYMBOL_DEFINITION hashAlgorithm */
/**
 * @summary hashAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hashAlgorithm           ID ::= {algorithm 2}
 * ```
 *
 * @constant
 */
export const hashAlgorithm: ID = new _OID([2], algorithm);
/* END_OF_SYMBOL_DEFINITION hashAlgorithm */

/* eslint-enable */
