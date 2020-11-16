/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
import { usgov } from "../AlgorithmObjectIdentifiers/usgov.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";
export { usgov } from "../AlgorithmObjectIdentifiers/usgov.va";

/* START_OF_SYMBOL_DEFINITION dodAlgorithms */
/**
 * @summary dodAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dodAlgorithms           ID ::= { usgov dod(2) infosec(1) algorithms(1) }
 * ```
 *
 * @constant
 */
export const dodAlgorithms: ID = new _OID(
    [/* dod */ 2, /* infosec */ 1, /* algorithms */ 1],
    usgov
);
/* END_OF_SYMBOL_DEFINITION dodAlgorithms */

/* eslint-enable */
