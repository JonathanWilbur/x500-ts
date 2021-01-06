/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { modifyEntry } from "../DirectoryAbstractService/modifyEntry.oa";
import { chained } from "../DistributedOperations/chained.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { modifyEntry } from "../DirectoryAbstractService/modifyEntry.oa";
export { chained } from "../DistributedOperations/chained.oa";

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
