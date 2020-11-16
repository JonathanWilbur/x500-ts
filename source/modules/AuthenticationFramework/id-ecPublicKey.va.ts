/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";

/* START_OF_SYMBOL_DEFINITION id_ecPublicKey */
/**
 * @summary id_ecPublicKey
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ecPublicKey OBJECT IDENTIFIER ::= {iso(1) member-body(2) us(840) ansi-X9-62(10045)
 *                                       keyType(2) 1 }
 * ```
 *
 * @constant
 */
export const id_ecPublicKey: OBJECT_IDENTIFIER = new _OID([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* ansi-X9-62 */ 10045,
    /* keyType */ 2,
    1,
]);
/* END_OF_SYMBOL_DEFINITION id_ecPublicKey */

/* eslint-enable */
