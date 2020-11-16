/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";

/* START_OF_SYMBOL_DEFINITION iso_standard */
/**
 * @summary iso_standard
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * iso-standard            ID ::= { iso(1) standard(0) }
 * ```
 *
 * @constant
 */
export const iso_standard: ID = new _OID([/* iso */ 1, /* standard */ 0]);
/* END_OF_SYMBOL_DEFINITION iso_standard */

/* eslint-enable */
