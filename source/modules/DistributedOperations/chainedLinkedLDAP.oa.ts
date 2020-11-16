/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { chained } from "../DistributedOperations/chained.oa";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { chained } from "../DistributedOperations/chained.oa";
import { linkedLDAP } from "../DirectoryAbstractService/linkedLDAP.oa";

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
