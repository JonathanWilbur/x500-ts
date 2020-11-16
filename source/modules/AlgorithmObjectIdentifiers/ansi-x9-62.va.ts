/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
import { us_iso } from "../AlgorithmObjectIdentifiers/us-iso.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";
export { us_iso } from "../AlgorithmObjectIdentifiers/us-iso.va";

/* START_OF_SYMBOL_DEFINITION ansi_x9_62 */
/**
 * @summary ansi_x9_62
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ansi-x9-62              ID ::= { us-iso ansi-x962(10045) }
 * ```
 *
 * @constant
 */
export const ansi_x9_62: ID = new _OID([/* ansi-x962 */ 10045], us_iso);
/* END_OF_SYMBOL_DEFINITION ansi_x9_62 */

/* eslint-enable */
