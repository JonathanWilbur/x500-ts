/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ansi_x9_42 } from "../AlgorithmObjectIdentifiers/ansi-x9-42.va";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
export { ansi_x9_42 } from "../AlgorithmObjectIdentifiers/ansi-x9-42.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";

/* START_OF_SYMBOL_DEFINITION dh_public_number */
/**
 * @summary dh_public_number
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dh-public-number        ID ::= { ansi-x9-42 number-type(2) dh-public-number(1) }
 * ```
 *
 * @constant
 */
export const dh_public_number: ID = new _OID(
    [/* number-type */ 2, /* dh-public-number */ 1],
    ansi_x9_42
);
/* END_OF_SYMBOL_DEFINITION dh_public_number */

/* eslint-enable */
