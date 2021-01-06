/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { read } from "../DirectoryAbstractService/read.oa";
import { chained } from "../DistributedOperations/chained.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { read } from "../DirectoryAbstractService/read.oa";
export { chained } from "../DistributedOperations/chained.oa";

/* START_OF_SYMBOL_DEFINITION chainedRead */
/**
 * @summary chainedRead
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedRead               OPERATION ::= chained{read}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedRead: OPERATION = chained(read);
/* END_OF_SYMBOL_DEFINITION chainedRead */

/* eslint-enable */
