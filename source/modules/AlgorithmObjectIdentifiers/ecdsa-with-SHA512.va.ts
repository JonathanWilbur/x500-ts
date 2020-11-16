/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ansi_x9_62 } from "../AlgorithmObjectIdentifiers/ansi-x9-62.va";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
export { ansi_x9_62 } from "../AlgorithmObjectIdentifiers/ansi-x9-62.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";

/* START_OF_SYMBOL_DEFINITION ecdsa_with_SHA512 */
/**
 * @summary ecdsa_with_SHA512
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ecdsa-with-SHA512       ID ::= { ansi-x9-62 signatures(4) ecdsa-with-SHA2(3) 4 }
 * ```
 *
 * @constant
 */
export const ecdsa_with_SHA512: ID = new _OID(
    [/* signatures */ 4, /* ecdsa-with-SHA2 */ 3, 4],
    ansi_x9_62
);
/* END_OF_SYMBOL_DEFINITION ecdsa_with_SHA512 */

/* eslint-enable */
