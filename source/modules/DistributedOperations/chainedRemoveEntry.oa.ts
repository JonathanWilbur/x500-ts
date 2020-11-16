/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { chained } from "../DistributedOperations/chained.oa";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { chained } from "../DistributedOperations/chained.oa";
import { removeEntry } from "../DirectoryAbstractService/removeEntry.oa";

/* START_OF_SYMBOL_DEFINITION chainedRemoveEntry */
/**
 * @summary chainedRemoveEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedRemoveEntry        OPERATION ::= chained{removeEntry}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedRemoveEntry: OPERATION = chained(removeEntry);
/* END_OF_SYMBOL_DEFINITION chainedRemoveEntry */

/* eslint-enable */
