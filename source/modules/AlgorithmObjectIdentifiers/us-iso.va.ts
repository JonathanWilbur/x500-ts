/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";

/* START_OF_SYMBOL_DEFINITION us_iso */
/**
 * @summary us_iso
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * us-iso                  ID ::= { iso(1) member-body(2) us(840) }
 * ```
 *
 * @constant
 */
export const us_iso: ID = new _OID([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
]);
/* END_OF_SYMBOL_DEFINITION us_iso */

/* eslint-enable */
