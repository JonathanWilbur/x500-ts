/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { certicom_curve } from "../AlgorithmObjectIdentifiers/certicom-curve.va";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
export { certicom_curve } from "../AlgorithmObjectIdentifiers/certicom-curve.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";

/* START_OF_SYMBOL_DEFINITION secp384r1 */
/**
 * @summary secp384r1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * secp384r1       ID ::= { certicom-curve 34 }
 * ```
 *
 * @constant
 */
export const secp384r1: ID = new _OID([34], certicom_curve);
/* END_OF_SYMBOL_DEFINITION secp384r1 */

/* eslint-enable */
