/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";

/* START_OF_SYMBOL_DEFINITION rsadsi */
/**
 * @summary rsadsi
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rsadsi                  ID ::= { iso(1) member-body(2) us(840) rsadsi(113549) }
 * ```
 *
 * @constant
 */
export const rsadsi: ID = new _OID([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
]);
/* END_OF_SYMBOL_DEFINITION rsadsi */

/* eslint-enable */
