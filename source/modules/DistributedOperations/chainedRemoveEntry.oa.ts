/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { removeEntry } from "../DirectoryAbstractService/removeEntry.oa";
import { chained } from "../DistributedOperations/chained.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { removeEntry } from "../DirectoryAbstractService/removeEntry.oa";
export { chained } from "../DistributedOperations/chained.oa";

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
