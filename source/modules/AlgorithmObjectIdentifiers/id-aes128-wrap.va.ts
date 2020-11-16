/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { aes } from "../AlgorithmObjectIdentifiers/aes.va";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
export { aes } from "../AlgorithmObjectIdentifiers/aes.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";

/* START_OF_SYMBOL_DEFINITION id_aes128_wrap */
/**
 * @summary id_aes128_wrap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aes128-wrap          ID ::= { aes 5 }
 * ```
 *
 * @constant
 */
export const id_aes128_wrap: ID = new _OID([5], aes);
/* END_OF_SYMBOL_DEFINITION id_aes128_wrap */

/* eslint-enable */
