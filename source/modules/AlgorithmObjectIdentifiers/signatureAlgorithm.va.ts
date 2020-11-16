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

/* START_OF_SYMBOL_DEFINITION signatureAlgorithm */
/**
 * @summary signatureAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signatureAlgorithm      ID ::= {algorithm 3}
 * ```
 *
 * @constant
 */
export const signatureAlgorithm: ID = new _OID([3], algorithm);
/* END_OF_SYMBOL_DEFINITION signatureAlgorithm */

/* eslint-enable */
