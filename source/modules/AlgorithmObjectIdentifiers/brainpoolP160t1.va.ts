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

/* START_OF_SYMBOL_DEFINITION brainpoolP160t1 */
/**
 * @summary brainpoolP160t1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP160t1 ID ::= { versionOne 2 }
 * ```
 *
 * @constant
 */
export const brainpoolP160t1: ID = new _OID([2], versionOne);
/* END_OF_SYMBOL_DEFINITION brainpoolP160t1 */

/* eslint-enable */
