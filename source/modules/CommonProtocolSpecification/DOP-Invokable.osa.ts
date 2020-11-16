/* eslint-disable */
import { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
import { establishOperationalBinding } from "../OperationalBindingManagement/establishOperationalBinding.oa";
import { modifyOperationalBinding } from "../OperationalBindingManagement/modifyOperationalBinding.oa";
import { terminateOperationalBinding } from "../OperationalBindingManagement/terminateOperationalBinding.oa";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { establishOperationalBinding } from "../OperationalBindingManagement/establishOperationalBinding.oa";
export { modifyOperationalBinding } from "../OperationalBindingManagement/modifyOperationalBinding.oa";
export { terminateOperationalBinding } from "../OperationalBindingManagement/terminateOperationalBinding.oa";

/* START_OF_SYMBOL_DEFINITION DOP_Invokable */
/**
 * @summary DOP_Invokable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DOP-Invokable OPERATION ::= {establishOperationalBinding |
 *    modifyOperationalBinding |
 *    terminateOperationalBinding}
 * ```
 *
 * @constant
 * @type {OPERATION[]}
 *
 */
export const DOP_Invokable: OPERATION[] = [
    establishOperationalBinding,
    modifyOperationalBinding,
    terminateOperationalBinding,
];
/* END_OF_SYMBOL_DEFINITION DOP_Invokable */

/* eslint-enable */
