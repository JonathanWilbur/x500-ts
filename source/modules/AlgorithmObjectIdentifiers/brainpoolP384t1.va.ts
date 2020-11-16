/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
import { versionOne } from "../AlgorithmObjectIdentifiers/versionOne.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";
export { versionOne } from "../AlgorithmObjectIdentifiers/versionOne.va";

/* START_OF_SYMBOL_DEFINITION brainpoolP384t1 */
/**
 * @summary brainpoolP384t1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP384t1 ID ::= { versionOne 12 }
 * ```
 *
 * @constant
 */
export const brainpoolP384t1: ID = new _OID([12], versionOne);
/* END_OF_SYMBOL_DEFINITION brainpoolP384t1 */

/* eslint-enable */
