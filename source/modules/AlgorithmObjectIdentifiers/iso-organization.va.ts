/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";

/* START_OF_SYMBOL_DEFINITION iso_organization */
/**
 * @summary iso_organization
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * iso-organization        ID ::= { iso(1) identified-organization(3) }
 * ```
 *
 * @constant
 */
export const iso_organization: ID = new _OID([
    /* iso */ 1,
    /* identified-organization */ 3,
]);
/* END_OF_SYMBOL_DEFINITION iso_organization */

/* eslint-enable */
