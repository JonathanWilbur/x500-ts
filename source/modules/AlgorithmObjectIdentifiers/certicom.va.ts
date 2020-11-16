/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
import { iso_organization } from "../AlgorithmObjectIdentifiers/iso-organization.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";
export { iso_organization } from "../AlgorithmObjectIdentifiers/iso-organization.va";

/* START_OF_SYMBOL_DEFINITION certicom */
/**
 * @summary certicom
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certicom                ID ::= { iso-organization certicom(132) }
 * ```
 *
 * @constant
 */
export const certicom: ID = new _OID([/* certicom */ 132], iso_organization);
/* END_OF_SYMBOL_DEFINITION certicom */

/* eslint-enable */
