/* eslint-disable */
import { APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca";
import { id_ac_directoryOperationalBindingManagementAC } from "../DirectoryOSIProtocols/id-ac-directoryOperationalBindingManagementAC.va";
import { dSAOperationalBindingManagementBind } from "../OperationalBindingManagement/dSAOperationalBindingManagementBind.oa";
import { establishOperationalBinding } from "../OperationalBindingManagement/establishOperationalBinding.oa";
import { modifyOperationalBinding } from "../OperationalBindingManagement/modifyOperationalBinding.oa";
import { terminateOperationalBinding } from "../OperationalBindingManagement/terminateOperationalBinding.oa";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca";
export { id_ac_directoryOperationalBindingManagementAC } from "../DirectoryOSIProtocols/id-ac-directoryOperationalBindingManagementAC.va";
export { dSAOperationalBindingManagementBind } from "../OperationalBindingManagement/dSAOperationalBindingManagementBind.oa";
export { establishOperationalBinding } from "../OperationalBindingManagement/establishOperationalBinding.oa";
export { modifyOperationalBinding } from "../OperationalBindingManagement/modifyOperationalBinding.oa";
export { terminateOperationalBinding } from "../OperationalBindingManagement/terminateOperationalBinding.oa";

/* START_OF_SYMBOL_DEFINITION directoryOperationalBindingManagementAC */
/**
 * @summary directoryOperationalBindingManagementAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryOperationalBindingManagementAC APPLICATION-CONTEXT ::= {
 *   BIND-OPERATION            dSAOperationalBindingManagementBind
 *   OPERATIONS                {establishOperationalBinding |
 *                              modifyOperationalBinding |
 *                              terminateOperationalBinding}
 *   APPLICATION CONTEXT NAME  id-ac-directoryOperationalBindingManagementAC }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const directoryOperationalBindingManagementAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {},
    encoderFor: {},
    "&bind-operation": dSAOperationalBindingManagementBind /* OBJECT_FIELD_SETTING */,
    "&Operations": [
        establishOperationalBinding,
        modifyOperationalBinding,
        terminateOperationalBinding,
    ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_directoryOperationalBindingManagementAC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION directoryOperationalBindingManagementAC */

/* eslint-enable */
