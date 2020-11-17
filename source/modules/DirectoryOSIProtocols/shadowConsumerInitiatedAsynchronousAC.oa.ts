/* eslint-disable */
import { APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca";
import { id_ac_shadowConsumerInitiatedAsynchronousAC } from "../DirectoryOSIProtocols/id-ac-shadowConsumerInitiatedAsynchronousAC.va";
import { dSAShadowBind } from "../DirectoryShadowAbstractService/dSAShadowBind.oa";
import { requestShadowUpdate } from "../DirectoryShadowAbstractService/requestShadowUpdate.oa";
import { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa";
export { OPERATION } from "../CommonProtocolSpecification/OPERATION.oca";
export { APPLICATION_CONTEXT } from "../DirectoryOSIProtocols/APPLICATION-CONTEXT.oca";
export { id_ac_shadowConsumerInitiatedAsynchronousAC } from "../DirectoryOSIProtocols/id-ac-shadowConsumerInitiatedAsynchronousAC.va";
export { dSAShadowBind } from "../DirectoryShadowAbstractService/dSAShadowBind.oa";
export { requestShadowUpdate } from "../DirectoryShadowAbstractService/requestShadowUpdate.oa";
export { updateShadow } from "../DirectoryShadowAbstractService/updateShadow.oa";

/* START_OF_SYMBOL_DEFINITION shadowConsumerInitiatedAsynchronousAC */
/**
 * @summary shadowConsumerInitiatedAsynchronousAC
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shadowConsumerInitiatedAsynchronousAC APPLICATION-CONTEXT ::= {
 *   BIND-OPERATION            dSAShadowBind
 *   OPERATIONS                {requestShadowUpdate |
 *                              updateShadow}
 *   APPLICATION CONTEXT NAME  id-ac-shadowConsumerInitiatedAsynchronousAC }
 * ```
 *
 * @constant
 * @type {APPLICATION_CONTEXT}
 * @implements {APPLICATION_CONTEXT}
 */
export const shadowConsumerInitiatedAsynchronousAC: APPLICATION_CONTEXT = {
    class: "APPLICATION-CONTEXT",
    decoderFor: {},
    encoderFor: {},
    "&bind-operation": dSAShadowBind /* OBJECT_FIELD_SETTING */,
    "&Operations": [
        requestShadowUpdate,
        updateShadow,
    ] /* OBJECT_FIELD_SETTING */,
    "&applicationContextName": id_ac_shadowConsumerInitiatedAsynchronousAC /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION shadowConsumerInitiatedAsynchronousAC */

/* eslint-enable */
