/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { compare } from "../DirectoryAbstractService/compare.oa";
import { chained } from "../DistributedOperations/chained.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { compare } from "../DirectoryAbstractService/compare.oa";
export { chained } from "../DistributedOperations/chained.oa";

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
