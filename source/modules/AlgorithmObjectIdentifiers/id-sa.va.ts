/* eslint-disable */
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
import { signatureAlgorithm } from "../AlgorithmObjectIdentifiers/signatureAlgorithm.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";
export { signatureAlgorithm } from "../AlgorithmObjectIdentifiers/signatureAlgorithm.va";

/* START_OF_SYMBOL_DEFINITION id_sa */
/**
 * @summary id_sa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sa                   ID ::= signatureAlgorithm
 * ```
 *
 * @constant
 */
export const id_sa: ID = signatureAlgorithm;
/* END_OF_SYMBOL_DEFINITION id_sa */

/* eslint-enable */
