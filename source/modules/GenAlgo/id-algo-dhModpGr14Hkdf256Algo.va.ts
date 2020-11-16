/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_algo_kea } from "../GenAlgo/id-algo-kea.va";
export { id_algo_kea } from "../GenAlgo/id-algo-kea.va";

/* START_OF_SYMBOL_DEFINITION id_algo_dhModpGr14Hkdf256Algo */
/**
 * @summary id_algo_dhModpGr14Hkdf256Algo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-dhModpGr14Hkdf256Algo       OBJECT IDENTIFIER ::= {id-algo-kea 1}
 * ```
 *
 * @constant
 */
export const id_algo_dhModpGr14Hkdf256Algo: OBJECT_IDENTIFIER = new _OID(
    [1],
    id_algo_kea
);
/* END_OF_SYMBOL_DEFINITION id_algo_dhModpGr14Hkdf256Algo */

/* eslint-enable */
