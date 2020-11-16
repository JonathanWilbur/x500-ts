/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { csor } from "../AlgorithmObjectIdentifiers/csor.va";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
export { csor } from "../AlgorithmObjectIdentifiers/csor.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";

/* START_OF_SYMBOL_DEFINITION nistAlgorithms */
/**
 * @summary nistAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nistAlgorithms          ID ::= { csor nistAlgorithm(4) }
 * ```
 *
 * @constant
 */
export const nistAlgorithms: ID = new _OID([/* nistAlgorithm */ 4], csor);
/* END_OF_SYMBOL_DEFINITION nistAlgorithms */

/* eslint-enable */
