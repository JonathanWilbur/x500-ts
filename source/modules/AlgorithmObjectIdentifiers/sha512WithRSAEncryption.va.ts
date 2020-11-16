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

/* START_OF_SYMBOL_DEFINITION sha512WithRSAEncryption */
/**
 * @summary sha512WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha512WithRSAEncryption ID ::= { pkcs-1 sha512WithRSAEncryption(13) }
 * ```
 *
 * @constant
 */
export const sha512WithRSAEncryption: ID = new _OID(
    [/* sha512WithRSAEncryption */ 13],
    pkcs_1
);
/* END_OF_SYMBOL_DEFINITION sha512WithRSAEncryption */

/* eslint-enable */
