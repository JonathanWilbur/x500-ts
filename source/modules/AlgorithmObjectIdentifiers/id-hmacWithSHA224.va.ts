/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { digestAlgorithm } from "../AlgorithmObjectIdentifiers/digestAlgorithm.va";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
export { digestAlgorithm } from "../AlgorithmObjectIdentifiers/digestAlgorithm.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";

/* START_OF_SYMBOL_DEFINITION id_hmacWithSHA224 */
/**
 * @summary id_hmacWithSHA224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA224       ID ::= { digestAlgorithm 8 }
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA224: ID = new _OID([8], digestAlgorithm);
/* END_OF_SYMBOL_DEFINITION id_hmacWithSHA224 */

/* eslint-enable */
