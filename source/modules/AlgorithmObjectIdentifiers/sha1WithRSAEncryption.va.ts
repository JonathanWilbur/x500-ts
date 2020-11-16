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

/* START_OF_SYMBOL_DEFINITION sha1WithRSAEncryption */
/**
 * @summary sha1WithRSAEncryption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sha1WithRSAEncryption   ID ::= { pkcs-1 sha1WithRSAEncryption(5) }
 * ```
 *
 * @constant
 */
export const sha1WithRSAEncryption: ID = new _OID(
    [/* sha1WithRSAEncryption */ 5],
    pkcs_1
);
/* END_OF_SYMBOL_DEFINITION sha1WithRSAEncryption */

/* eslint-enable */
