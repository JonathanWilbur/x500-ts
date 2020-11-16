/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { chained } from "../DistributedOperations/chained.oa";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { chained } from "../DistributedOperations/chained.oa";
import { compare } from "../DirectoryAbstractService/compare.oa";

/* START_OF_SYMBOL_DEFINITION chainedCompare */
/**
 * @summary chainedCompare
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedCompare            OPERATION ::= chained{compare}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedCompare: OPERATION = chained(compare);
/* END_OF_SYMBOL_DEFINITION chainedCompare */

/* eslint-enable */
