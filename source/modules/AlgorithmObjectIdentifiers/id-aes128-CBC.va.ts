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

/* START_OF_SYMBOL_DEFINITION id_aes128_CBC */
/**
 * @summary id_aes128_CBC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aes128-CBC           ID ::= { aes 2 }
 * ```
 *
 * @constant
 */
export const id_aes128_CBC: ID = new _OID([2], aes);
/* END_OF_SYMBOL_DEFINITION id_aes128_CBC */

/* eslint-enable */
