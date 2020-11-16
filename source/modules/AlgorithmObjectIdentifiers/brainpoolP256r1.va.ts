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

/* START_OF_SYMBOL_DEFINITION brainpoolP256r1 */
/**
 * @summary brainpoolP256r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * brainpoolP256r1 ID ::= { versionOne 7 }
 * ```
 *
 * @constant
 */
export const brainpoolP256r1: ID = new _OID([7], versionOne);
/* END_OF_SYMBOL_DEFINITION brainpoolP256r1 */

/* eslint-enable */
