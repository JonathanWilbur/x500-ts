/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_algo_mca } from "../GenAlgo/id-algo-mca.va";
export { id_algo_mca } from "../GenAlgo/id-algo-mca.va";

/* START_OF_SYMBOL_DEFINITION id_algo_multipleHashAlgo */
/**
 * @summary id_algo_multipleHashAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-multipleHashAlgo            OBJECT IDENTIFIER ::= {id-algo-mca 4}
 * ```
 *
 * @constant
 */
export const id_algo_multipleHashAlgo: OBJECT_IDENTIFIER = new _OID(
    [4],
    id_algo_mca
);
/* END_OF_SYMBOL_DEFINITION id_algo_multipleHashAlgo */

/* eslint-enable */
