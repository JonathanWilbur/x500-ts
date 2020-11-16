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

/* START_OF_SYMBOL_DEFINITION sect163r2 */
/**
 * @summary sect163r2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * sect163r2       ID ::= { certicom-curve 15 }
 * ```
 *
 * @constant
 */
export const sect163r2: ID = new _OID([15], certicom_curve);
/* END_OF_SYMBOL_DEFINITION sect163r2 */

/* eslint-enable */
