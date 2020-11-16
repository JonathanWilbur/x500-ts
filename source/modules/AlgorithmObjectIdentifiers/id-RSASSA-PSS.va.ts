/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta";
import { pkcs_1 } from "../AlgorithmObjectIdentifiers/pkcs-1.va";
export {
    ID,
    _decode_ID,
    _encode_ID,
} from "../AlgorithmObjectIdentifiers/ID.ta";
export { pkcs_1 } from "../AlgorithmObjectIdentifiers/pkcs-1.va";

/* START_OF_SYMBOL_DEFINITION id_RSASSA_PSS */
/**
 * @summary id_RSASSA_PSS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-RSASSA-PSS           ID ::= { pkcs-1 10 }
 * ```
 *
 * @constant
 */
export const id_RSASSA_PSS: ID = new _OID([10], pkcs_1);
/* END_OF_SYMBOL_DEFINITION id_RSASSA_PSS */

/* eslint-enable */
