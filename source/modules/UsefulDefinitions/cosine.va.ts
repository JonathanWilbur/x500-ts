/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta";
export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta";

/* START_OF_SYMBOL_DEFINITION cosine */
/**
 * @summary cosine
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * cosine              ID ::= {itu-t(0) data(9) pss(2342) ucl(19200300) pilot(100)}
 * ```
 *
 * @constant
 */
export const cosine: ID = new _OID([
    /* itu-t */ 0,
    /* data */ 9,
    /* pss */ 2342,
    /* ucl */ 19200300,
    /* pilot */ 100,
]);
/* END_OF_SYMBOL_DEFINITION cosine */

/* eslint-enable */
