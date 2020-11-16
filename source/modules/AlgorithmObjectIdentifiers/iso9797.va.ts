/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
import { iso_standard } from "../AlgorithmObjectIdentifiers/iso-standard.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";
export { iso_standard } from "../AlgorithmObjectIdentifiers/iso-standard.va";

/* START_OF_SYMBOL_DEFINITION iso9797 */
/**
 * @summary iso9797
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * iso9797                 ID ::= { iso-standard message-authentication-codes(9797) }
 * ```
 *
 * @constant
 */
export const iso9797: ID = new _OID(
    [/* message-authentication-codes */ 9797],
    iso_standard
);
/* END_OF_SYMBOL_DEFINITION iso9797 */

/* eslint-enable */
