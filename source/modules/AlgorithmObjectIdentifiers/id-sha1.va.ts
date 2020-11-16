/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";

/* START_OF_SYMBOL_DEFINITION id_sha1 */
/**
 * @summary id_sha1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sha1                 ID ::= {iso(1) identified-organization(3) oiw(14) secsig(3)
 *                                 algorithms(2) 26}
 * ```
 *
 * @constant
 */
export const id_sha1: ID = new _OID([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* oiw */ 14,
    /* secsig */ 3,
    /* algorithms */ 2,
    26,
]);
/* END_OF_SYMBOL_DEFINITION id_sha1 */

/* eslint-enable */
