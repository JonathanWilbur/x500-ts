/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { chained } from "../DistributedOperations/chained.oa";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { chained } from "../DistributedOperations/chained.oa";
import { modifyEntry } from "../DirectoryAbstractService/modifyEntry.oa";

/* START_OF_SYMBOL_DEFINITION chainedModifyEntry */
/**
 * @summary chainedModifyEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedModifyEntry        OPERATION ::= chained{modifyEntry}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedModifyEntry: OPERATION = chained(modifyEntry);
/* END_OF_SYMBOL_DEFINITION chainedModifyEntry */

/* eslint-enable */
