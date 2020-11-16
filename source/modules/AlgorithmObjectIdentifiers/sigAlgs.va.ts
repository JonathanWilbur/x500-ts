/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
import { nistAlgorithms } from "../AlgorithmObjectIdentifiers/nistAlgorithms.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";
export { nistAlgorithms } from "../AlgorithmObjectIdentifiers/nistAlgorithms.va";

/* START_OF_SYMBOL_DEFINITION sigAlgs */
/**
 * @summary sigAlgs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sigAlgs                 ID ::= { nistAlgorithms 3 }
 * ```
 *
 * @constant
 */
export const sigAlgs: ID = new _OID([3], nistAlgorithms);
/* END_OF_SYMBOL_DEFINITION sigAlgs */

/* eslint-enable */
