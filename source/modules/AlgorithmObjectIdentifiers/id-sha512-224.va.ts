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

/* START_OF_SYMBOL_DEFINITION id_sha512_224 */
/**
 * @summary id_sha512_224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha512-224           ID ::= { hashAlgs 5 }
 * ```
 *
 * @constant
 */
export const id_sha512_224: ID = new _OID([5], hashAlgs);
/* END_OF_SYMBOL_DEFINITION id_sha512_224 */

/* eslint-enable */
