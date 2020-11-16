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

/* START_OF_SYMBOL_DEFINITION id_shake256_len */
/**
 * @summary id_shake256_len
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-shake256-len         ID ::= { hashAlgs 18 }
 * ```
 *
 * @constant
 */
export const id_shake256_len: ID = new _OID([18], hashAlgs);
/* END_OF_SYMBOL_DEFINITION id_shake256_len */

/* eslint-enable */
