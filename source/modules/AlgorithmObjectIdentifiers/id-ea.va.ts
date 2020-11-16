/* eslint-disable */
import { encryptionAlgorithm } from "../AlgorithmObjectIdentifiers/encryptionAlgorithm.va";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
export { encryptionAlgorithm } from "../AlgorithmObjectIdentifiers/encryptionAlgorithm.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";

/* START_OF_SYMBOL_DEFINITION id_ea */
/**
 * @summary id_ea
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ea                   ID ::= encryptionAlgorithm
 * ```
 *
 * @constant
 */
export const id_ea: ID = encryptionAlgorithm;
/* END_OF_SYMBOL_DEFINITION id_ea */

/* eslint-enable */
