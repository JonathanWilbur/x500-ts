/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { search } from "../DirectoryAbstractService/search.oa";
import { chained } from "../DistributedOperations/chained.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { search } from "../DirectoryAbstractService/search.oa";
export { chained } from "../DistributedOperations/chained.oa";

/* START_OF_SYMBOL_DEFINITION chainedSearch */
/**
 * @summary chainedSearch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedSearch             OPERATION ::= chained{search}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedSearch: OPERATION = chained(search);
/* END_OF_SYMBOL_DEFINITION chainedSearch */

/* eslint-enable */
