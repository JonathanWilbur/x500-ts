/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { chained } from "../DistributedOperations/chained.oa";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { chained } from "../DistributedOperations/chained.oa";
import { modifyDN } from "../DirectoryAbstractService/modifyDN.oa";

/* START_OF_SYMBOL_DEFINITION chainedModifyDN */
/**
 * @summary chainedModifyDN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedModifyDN           OPERATION ::= chained{modifyDN}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedModifyDN: OPERATION = chained(modifyDN);
/* END_OF_SYMBOL_DEFINITION chainedModifyDN */

/* eslint-enable */
