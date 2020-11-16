/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_algo_mca } from "../GenAlgo/id-algo-mca.va";
export { id_algo_mca } from "../GenAlgo/id-algo-mca.va";

/* START_OF_SYMBOL_DEFINITION id_algo_multipleAuthenEncryptAlgo */
/**
 * @summary id_algo_multipleAuthenEncryptAlgo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-algo-multipleAuthenEncryptAlgo   OBJECT IDENTIFIER ::= {id-algo-mca 5}
 * ```
 *
 * @constant
 */
export const id_algo_multipleAuthenEncryptAlgo: OBJECT_IDENTIFIER = new _OID(
    [5],
    id_algo_mca
);
/* END_OF_SYMBOL_DEFINITION id_algo_multipleAuthenEncryptAlgo */

/* eslint-enable */
