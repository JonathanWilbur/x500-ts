/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { linkedLDAP } from "../DirectoryAbstractService/linkedLDAP.oa";
import { chained } from "../DistributedOperations/chained.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { linkedLDAP } from "../DirectoryAbstractService/linkedLDAP.oa";
export { chained } from "../DistributedOperations/chained.oa";

/* START_OF_SYMBOL_DEFINITION chainedLinkedLDAP */
/**
 * @summary chainedLinkedLDAP
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedLinkedLDAP         OPERATION ::= chained{linkedLDAP}
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedLinkedLDAP: OPERATION = chained(linkedLDAP);
/* END_OF_SYMBOL_DEFINITION chainedLinkedLDAP */

/* eslint-enable */
