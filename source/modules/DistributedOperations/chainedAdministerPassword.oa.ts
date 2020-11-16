/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { chained } from "../DistributedOperations/chained.oa";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { chained } from "../DistributedOperations/chained.oa";
import { administerPassword } from "../DirectoryAbstractService/administerPassword.oa";

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
