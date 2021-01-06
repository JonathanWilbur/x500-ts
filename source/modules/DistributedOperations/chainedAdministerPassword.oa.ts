/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { administerPassword } from "../DirectoryAbstractService/administerPassword.oa";
import { chained } from "../DistributedOperations/chained.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { administerPassword } from "../DirectoryAbstractService/administerPassword.oa";
export { chained } from "../DistributedOperations/chained.oa";

/* START_OF_SYMBOL_DEFINITION chainedAdministerPassword */
/**
 * @summary chainedAdministerPassword
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedAdministerPassword OPERATION ::= chained{administerPassword}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedAdministerPassword: OPERATION = chained(administerPassword);
/* END_OF_SYMBOL_DEFINITION chainedAdministerPassword */

/* eslint-enable */
