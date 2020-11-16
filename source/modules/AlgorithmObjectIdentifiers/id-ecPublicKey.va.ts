/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ansi_x9_62 } from "../AlgorithmObjectIdentifiers/ansi-x9-62.va";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
export { ansi_x9_62 } from "../AlgorithmObjectIdentifiers/ansi-x9-62.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";

/* START_OF_SYMBOL_DEFINITION id_ecPublicKey */
/**
 * @summary id_ecPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ecPublicKey          ID ::= { ansi-x9-62 keyType(2) 1 }
 * ```
 *
 * @constant
 */
export const id_ecPublicKey: ID = new _OID([/* keyType */ 2, 1], ansi_x9_62);
/* END_OF_SYMBOL_DEFINITION id_ecPublicKey */

/* eslint-enable */
