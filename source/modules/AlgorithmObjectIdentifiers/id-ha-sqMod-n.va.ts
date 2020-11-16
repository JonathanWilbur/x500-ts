/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { id_ha } from "../AlgorithmObjectIdentifiers/id-ha.va";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
export { id_ha } from "../AlgorithmObjectIdentifiers/id-ha.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";

/* START_OF_SYMBOL_DEFINITION id_ha_sqMod_n */
/**
 * @summary id_ha_sqMod_n
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ha-sqMod-n           ID ::= {id-ha 1}
 * ```
 *
 * @constant
 */
export const id_ha_sqMod_n: ID = new _OID([1], id_ha);
/* END_OF_SYMBOL_DEFINITION id_ha_sqMod_n */

/* eslint-enable */
