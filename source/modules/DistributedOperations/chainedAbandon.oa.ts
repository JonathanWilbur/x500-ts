/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { abandon } from "../DirectoryAbstractService/abandon.oa";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { abandon } from "../DirectoryAbstractService/abandon.oa";

/* START_OF_SYMBOL_DEFINITION chainedAbandon */
/**
 * @summary chainedAbandon
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * chainedAbandon            OPERATION ::= abandon
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const chainedAbandon: OPERATION = abandon;
/* END_OF_SYMBOL_DEFINITION chainedAbandon */

/* eslint-enable */
