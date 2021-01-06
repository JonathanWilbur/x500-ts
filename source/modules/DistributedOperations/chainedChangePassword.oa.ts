/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { changePassword } from "../DirectoryAbstractService/changePassword.oa";
import { chained } from "../DistributedOperations/chained.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { changePassword } from "../DirectoryAbstractService/changePassword.oa";
export { chained } from "../DistributedOperations/chained.oa";

/* START_OF_SYMBOL_DEFINITION chainedChangePassword */
/**
 * @summary chainedChangePassword
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedChangePassword     OPERATION ::= chained{changePassword}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedChangePassword: OPERATION = chained(changePassword);
/* END_OF_SYMBOL_DEFINITION chainedChangePassword */

/* eslint-enable */
