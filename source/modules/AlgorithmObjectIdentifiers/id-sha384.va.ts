/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
export { hashAlgs } from "../AlgorithmObjectIdentifiers/hashAlgs.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";

/* START_OF_SYMBOL_DEFINITION id_sha384 */
/**
 * @summary id_sha384
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha384               ID ::= { hashAlgs 2 }
 * ```
 *
 * @constant
 */
export const id_sha384: ID = new _OID([2], hashAlgs);
/* END_OF_SYMBOL_DEFINITION id_sha384 */

/* eslint-enable */
