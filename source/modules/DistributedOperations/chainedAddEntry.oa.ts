/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { addEntry } from "../DirectoryAbstractService/addEntry.oa";
import { chained } from "../DistributedOperations/chained.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { addEntry } from "../DirectoryAbstractService/addEntry.oa";

/* START_OF_SYMBOL_DEFINITION chainedAddEntry */
/**
 * @summary chainedAddEntry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedAddEntry           OPERATION ::= chained{addEntry}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedAddEntry: OPERATION = chained(addEntry);
/* END_OF_SYMBOL_DEFINITION chainedAddEntry */

/* eslint-enable */
