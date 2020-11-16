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

/* START_OF_SYMBOL_DEFINITION id_hmacWithSHA256 */
/**
 * @summary id_hmacWithSHA256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hmacWithSHA256       ID ::= { digestAlgorithm 9 }
 * ```
 *
 * @constant
 */
export const id_hmacWithSHA256: ID = new _OID([9], digestAlgorithm);
/* END_OF_SYMBOL_DEFINITION id_hmacWithSHA256 */

/* eslint-enable */
