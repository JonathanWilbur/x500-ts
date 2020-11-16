/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
import { sigAlgs } from "../AlgorithmObjectIdentifiers/sigAlgs.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";
export { sigAlgs } from "../AlgorithmObjectIdentifiers/sigAlgs.va";

/* START_OF_SYMBOL_DEFINITION id_dsa_with_sha256 */
/**
 * @summary id_dsa_with_sha256
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-dsa-with-sha256      ID ::= { sigAlgs 2 }
 * ```
 *
 * @constant
 */
export const id_dsa_with_sha256: ID = new _OID([2], sigAlgs);
/* END_OF_SYMBOL_DEFINITION id_dsa_with_sha256 */

/* eslint-enable */
