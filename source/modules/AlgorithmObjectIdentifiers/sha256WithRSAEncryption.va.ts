/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
import { pkcs_1 } from "../AlgorithmObjectIdentifiers/pkcs-1.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";
export { pkcs_1 } from "../AlgorithmObjectIdentifiers/pkcs-1.va";

/* START_OF_SYMBOL_DEFINITION sha256WithRSAEncryption */
/**
 * @summary sha256WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha256WithRSAEncryption ID ::= { pkcs-1 sha256WithRSAEncryption(11) }
 * ```
 *
 * @constant
 */
export const sha256WithRSAEncryption: ID = new _OID(
    [/* sha256WithRSAEncryption */ 11],
    pkcs_1
);
/* END_OF_SYMBOL_DEFINITION sha256WithRSAEncryption */

/* eslint-enable */
