/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";

/* START_OF_SYMBOL_DEFINITION us_joint */
/**
 * @summary us_joint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * us-joint                ID ::= { joint-iso-itu-t(2) country(16) us(840) }
 * ```
 *
 * @constant
 */
export const us_joint: ID = new _OID([
    /* joint-iso-itu-t */ 2,
    /* country */ 16,
    /* us */ 840,
]);
/* END_OF_SYMBOL_DEFINITION us_joint */

/* eslint-enable */
