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

/* START_OF_SYMBOL_DEFINITION brainpoolP320t1 */
/**
 * @summary brainpoolP320t1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP320t1 ID ::= { versionOne 10 }
 * ```
 *
 * @constant
 */
export const brainpoolP320t1: ID = new _OID([10], versionOne);
/* END_OF_SYMBOL_DEFINITION brainpoolP320t1 */

/* eslint-enable */
