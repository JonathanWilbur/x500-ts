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

/* START_OF_SYMBOL_DEFINITION brainpoolP192t1 */
/**
 * @summary brainpoolP192t1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP192t1 ID ::= { versionOne 4 }
 * ```
 *
 * @constant
 */
export const brainpoolP192t1: ID = new _OID([4], versionOne);
/* END_OF_SYMBOL_DEFINITION brainpoolP192t1 */

/* eslint-enable */
