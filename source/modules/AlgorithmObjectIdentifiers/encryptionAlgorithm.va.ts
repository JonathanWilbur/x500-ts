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

/* START_OF_SYMBOL_DEFINITION encryptionAlgorithm */
/**
 * @summary encryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * encryptionAlgorithm     ID ::= {algorithm 1}
 * ```
 *
 * @constant
 */
export const encryptionAlgorithm: ID = new _OID([1], algorithm);
/* END_OF_SYMBOL_DEFINITION encryptionAlgorithm */

/* eslint-enable */
