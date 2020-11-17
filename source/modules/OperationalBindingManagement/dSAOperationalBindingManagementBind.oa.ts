/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { dSABind } from "../DistributedOperations/dSABind.oa";
export {
    Code,
    _decode_Code,
    _encode_Code,
} from "../CommonProtocolSpecification/Code.ta";
export { ERROR } from "../CommonProtocolSpecification/ERROR.oca";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { dSABind } from "../DistributedOperations/dSABind.oa";

/* START_OF_SYMBOL_DEFINITION dSAOperationalBindingManagementBind */
/**
 * @summary dSAOperationalBindingManagementBind
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dSAOperationalBindingManagementBind OPERATION ::= dSABind
 * ```
 *
 * @constant
 * @type {OPERATION}
 * @implements {OPERATION}
 */
export const dSAOperationalBindingManagementBind: OPERATION = dSABind;
/* END_OF_SYMBOL_DEFINITION dSAOperationalBindingManagementBind */

/* eslint-enable */
