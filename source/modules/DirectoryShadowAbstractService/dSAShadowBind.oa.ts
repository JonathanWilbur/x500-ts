/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { dSABind } from "../DistributedOperations/dSABind.oa";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { dSABind } from "../DistributedOperations/dSABind.oa";

/* START_OF_SYMBOL_DEFINITION dSAShadowBind */
/**
 * @summary dSAShadowBind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dSAShadowBind OPERATION ::= dSABind
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const dSAShadowBind: OPERATION = dSABind;
/* END_OF_SYMBOL_DEFINITION dSAShadowBind */

/* eslint-enable */
