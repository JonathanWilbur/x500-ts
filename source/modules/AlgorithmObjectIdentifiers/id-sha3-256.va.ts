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

/* START_OF_SYMBOL_DEFINITION id_sha3_256 */
/**
 * @summary id_sha3_256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha3-256             ID ::= { hashAlgs 8 }
 * ```
 *
 * @constant
 */
export const id_sha3_256: ID = new _OID([8], hashAlgs);
/* END_OF_SYMBOL_DEFINITION id_sha3_256 */

/* eslint-enable */
