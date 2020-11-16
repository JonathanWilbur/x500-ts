/* eslint-disable */
import { APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca";
import { id_ac_shadowSupplierInitiatedAC } from "../DirectoryOSIProtocols/id-ac-shadowSupplierInitiatedAC.va";
import { coordinateShadowUpdate } from "../DirectoryShadowAbstractService/coordinateShadowUpdate.oa";
import { dSAShadowBind } from "../DirectoryShadowAbstractService/dSAShadowBind.oa";
import { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa";
export { APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca";
export { id_ac_shadowSupplierInitiatedAC } from "../DirectoryOSIProtocols/id-ac-shadowSupplierInitiatedAC.va";
export { coordinateShadowUpdate } from "../DirectoryShadowAbstractService/coordinateShadowUpdate.oa";
export { dSAShadowBind } from "../DirectoryShadowAbstractService/dSAShadowBind.oa";
export { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa";

/* START_OF_SYMBOL_DEFINITION shadowSupplierInitiatedAC */
/**
 * @summary shadowSupplierInitiatedAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shadowSupplierInitiatedAC APPLICATION-CONTEXT ::= {
 *   BIND-OPERATION            dSAShadowBind
 *   OPERATIONS                {updateShadow |
 *                              coordinateShadowUpdate}
 *   APPLICATION CONTEXT NAME  id-ac-shadowSupplierInitiatedAC }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const shadowSupplierInitiatedAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {},
    encoderFor: {},
    "&bind-operation": dSAShadowBind /* OBJECT_FIELD_SETTING */,
    "&Operations": [
        updateShadow,
        coordinateShadowUpdate,
    ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_shadowSupplierInitiatedAC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION shadowSupplierInitiatedAC */

/* eslint-enable */
