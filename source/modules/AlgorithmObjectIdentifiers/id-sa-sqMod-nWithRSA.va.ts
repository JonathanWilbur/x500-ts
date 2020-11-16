/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { id_sa } from "../AlgorithmObjectIdentifiers/id-sa.va";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
export { id_sa } from "../AlgorithmObjectIdentifiers/id-sa.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";

/* START_OF_SYMBOL_DEFINITION id_sa_sqMod_nWithRSA */
/**
 * @summary id_sa_sqMod_nWithRSA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sa-sqMod-nWithRSA    ID ::= {id-sa 1}
 * ```
 *
 * @constant
 */
export const id_sa_sqMod_nWithRSA: ID = new _OID([1], id_sa);
/* END_OF_SYMBOL_DEFINITION id_sa_sqMod_nWithRSA */

/* eslint-enable */
