/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
export { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";

/* START_OF_SYMBOL_DEFINITION id_shake128_len */
/**
 * @summary id_shake128_len
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-shake128-len         ID ::= { hashAlgs 17 }
 * ```
 *
 * @constant
 */
export const id_shake128_len: ID = new _OID([17], hashAlgs);
/* END_OF_SYMBOL_DEFINITION id_shake128_len */

/* eslint-enable */
