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

/* START_OF_SYMBOL_DEFINITION sect571k1 */
/**
 * @summary sect571k1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect571k1       ID ::= { certicom-curve 38 }
 * ```
 *
 * @constant
 */
export const sect571k1: ID = new _OID([38], certicom_curve);
/* END_OF_SYMBOL_DEFINITION sect571k1 */

/* eslint-enable */
