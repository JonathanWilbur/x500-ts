/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { modifyDN } from "../DirectoryAbstractService/modifyDN.oa";
import { chained } from "../DistributedOperations/chained.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { modifyDN } from "../DirectoryAbstractService/modifyDN.oa";
export { chained } from "../DistributedOperations/chained.oa";

/* START_OF_SYMBOL_DEFINITION chainedModifyDN */
/**
 * @summary chainedModifyDN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedModifyDN           OPERATION ::= chained{modifyDN}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedModifyDN: OPERATION = chained(modifyDN);
/* END_OF_SYMBOL_DEFINITION chainedModifyDN */

/* eslint-enable */
