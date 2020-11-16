/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";

/* START_OF_SYMBOL_DEFINITION hashAlg */
/**
 * @summary hashAlg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * hashAlg                 ID ::= {  iso(1) identified-organization(3) dod(6) internet(1)
 *                                   private(4) enterprise(1) kudelski(1722)
 *                                   cryptography(12) 2 }
 * ```
 *
 * @constant
 */
export const hashAlg: ID = new _OID([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* private */ 4,
    /* enterprise */ 1,
    /* kudelski */ 1722,
    /* cryptography */ 12,
    2,
]);
/* END_OF_SYMBOL_DEFINITION hashAlg */

/* eslint-enable */
