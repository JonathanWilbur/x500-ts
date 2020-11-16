/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { id_ea } from "../AlgorithmObjectIdentifiers/id-ea.va";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
export { id_ea } from "../AlgorithmObjectIdentifiers/id-ea.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";

/* START_OF_SYMBOL_DEFINITION id_ea_rsa */
/**
 * @summary id_ea_rsa
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ea-rsa               ID ::= {id-ea 1}
 * ```
 *
 * @constant
 */
export const id_ea_rsa: ID = new _OID([1], id_ea);
/* END_OF_SYMBOL_DEFINITION id_ea_rsa */

/* eslint-enable */
