/* eslint-disable */
import { id_op_binding_shadow } from "../DirectoryOperationalBindingTypes/id-op-binding-shadow.va";
import {
    _decode_ShadowingAgreementInfo,
    _encode_ShadowingAgreementInfo,
} from "../DirectoryShadowAbstractService/ShadowingAgreementInfo.ta";
import { shadowOperationalBinding_roleA } from "../DirectoryShadowAbstractService/shadowOperationalBinding-roleA.oa";
import { shadowOperationalBinding_roleB } from "../DirectoryShadowAbstractService/shadowOperationalBinding-roleB.oa";
import { OPERATIONAL_BINDING } from "../OperationalBindingManagement/OPERATIONAL-BINDING.oca";
export { id_op_binding_shadow } from "../DirectoryOperationalBindingTypes/id-op-binding-shadow.va";
export { shadowConsumerInitiatedAC } from "../DirectoryOSIProtocols/shadowConsumerInitiatedAC.oa";
export { shadowSupplierInitiatedAC } from "../DirectoryOSIProtocols/shadowSupplierInitiatedAC.oa";
export {
    ShadowingAgreementInfo,
    _decode_ShadowingAgreementInfo,
    _encode_ShadowingAgreementInfo,
} from "../DirectoryShadowAbstractService/ShadowingAgreementInfo.ta";
export { shadowOperationalBinding_roleA } from "../DirectoryShadowAbstractService/shadowOperationalBinding-roleA.oa";
export { shadowOperationalBinding_roleB } from "../DirectoryShadowAbstractService/shadowOperationalBinding-roleB.oa";
export { OP_BIND_ROLE } from "../OperationalBindingManagement/OP-BIND-ROLE.oca";
export { OP_BINDING_COOP } from "../OperationalBindingManagement/OP-BINDING-COOP.oca";
export { OPERATIONAL_BINDING } from "../OperationalBindingManagement/OPERATIONAL-BINDING.oca";

/* START_OF_SYMBOL_DEFINITION shadowOperationalBinding */
/**
 * @summary shadowOperationalBinding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * shadowOperationalBinding OPERATIONAL-BINDING ::= {
 *   AGREEMENT             ShadowingAgreementInfo
 *   APPLICATION CONTEXTS
 *     {{shadowSupplierInitiatedAC
 *       APPLIES TO  {All-operations-supplier-initiated}} |
 *     {shadowConsumerInitiatedAC
 *       APPLIES TO  {All-operations-consumer-initiated}}}
 *   ASYMMETRIC
 *     ROLE-A { -- shadow supplier role
 *       ESTABLISHMENT-INITIATOR  TRUE
 *       ESTABLISHMENT-PARAMETER  NULL
 *       MODIFICATION-INITIATOR   TRUE
 *       TERMINATION-INITIATOR    TRUE }
 *     ROLE-B { -- shadow consumer role
 *       ESTABLISHMENT-INITIATOR  TRUE
 *       ESTABLISHMENT-PARAMETER  NULL
 *       MODIFICATION-INITIATOR   TRUE
 *       MODIFICATION-PARAMETER   ModificationParameter
 *       TERMINATION-INITIATOR    TRUE}
 *   ID                    id-op-binding-shadow }
 * ```
 *
 * @constant
 * @type {OPERATIONAL_BINDING}
 * @implements {OPERATIONAL_BINDING}
 */
export const shadowOperationalBinding: OPERATIONAL_BINDING = {
    class: "OPERATIONAL-BINDING",
    decoderFor: {
        "&Agreement": _decode_ShadowingAgreementInfo,
    },
    encoderFor: {
        "&Agreement": _encode_ShadowingAgreementInfo,
    },
    "&Cooperation": [
        ,
        ,/* FIXME: COULD_NOT_COMPILE_DEFINED_SYNTAX_IN_OBJECT_SET */
    /* FIXME: COULD_NOT_COMPILE_DEFINED_SYNTAX_IN_OBJECT_SET */
    ] /* OBJECT_FIELD_SETTING */,
    "&roleA": shadowOperationalBinding_roleA /* OBJECT_FIELD_SETTING */,
    "&roleB": shadowOperationalBinding_roleB /* OBJECT_FIELD_SETTING */,
    "&id": id_op_binding_shadow /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Agreement": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION shadowOperationalBinding */

/* eslint-enable */
