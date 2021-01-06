/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { list } from "../DirectoryAbstractService/list.oa";
import { chained } from "../DistributedOperations/chained.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { list } from "../DirectoryAbstractService/list.oa";
export { chained } from "../DistributedOperations/chained.oa";

/* START_OF_SYMBOL_DEFINITION chainedList */
/**
 * @summary chainedList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedList               OPERATION ::= chained{list}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedList: OPERATION = chained(list);
/* END_OF_SYMBOL_DEFINITION chainedList */

/* eslint-enable */
