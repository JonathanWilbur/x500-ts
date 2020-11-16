/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
import { rsadsi } from "../AlgorithmObjectIdentifiers/rsadsi.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";
export { rsadsi } from "../AlgorithmObjectIdentifiers/rsadsi.va";

/* START_OF_SYMBOL_DEFINITION pkcs_1 */
/**
 * @summary pkcs_1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-1                  ID ::= { rsadsi pkcs(1) pkcs-1(1) }
 * ```
 *
 * @constant
 */
export const pkcs_1: ID = new _OID([/* pkcs */ 1, /* pkcs-1 */ 1], rsadsi);
/* END_OF_SYMBOL_DEFINITION pkcs_1 */

/* eslint-enable */
