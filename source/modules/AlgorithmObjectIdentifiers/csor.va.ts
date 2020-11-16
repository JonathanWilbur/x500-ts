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

/* START_OF_SYMBOL_DEFINITION csor */
/**
 * @summary csor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * csor                    ID ::= { usgov csor(3) }
 * ```
 *
 * @constant
 */
export const csor: ID = new _OID([/* csor */ 3], usgov);
/* END_OF_SYMBOL_DEFINITION csor */

/* eslint-enable */
