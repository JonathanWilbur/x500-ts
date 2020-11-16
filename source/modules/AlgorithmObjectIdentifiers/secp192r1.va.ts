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

/* START_OF_SYMBOL_DEFINITION secp192r1 */
/**
 * @summary secp192r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * secp192r1       ID ::= { ansi-x9-62 curves(3) prime(1) 1 }
 * ```
 *
 * @constant
 */
export const secp192r1: ID = new _OID(
    [/* curves */ 3, /* prime */ 1, 1],
    ansi_x9_62
);
/* END_OF_SYMBOL_DEFINITION secp192r1 */

/* eslint-enable */
