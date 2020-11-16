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

/* START_OF_SYMBOL_DEFINITION id_sha3_512 */
/**
 * @summary id_sha3_512
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha3-512             ID ::= { hashAlgs 10 }
 * ```
 *
 * @constant
 */
export const id_sha3_512: ID = new _OID([10], hashAlgs);
/* END_OF_SYMBOL_DEFINITION id_sha3_512 */

/* eslint-enable */
